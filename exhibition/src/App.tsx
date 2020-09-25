import React, { useState } from "react";
import Carousel from "./components/Carousel/carousel";
import { favoriteInstallationIds } from "./components/Favorite/favorite";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";
import { useInstallationIndex } from "./state/installationIndexContext";

/**
 * App is the component at the highest level in this webapp.
 * It runs displayFavorites() when the button in the menu is
 * pressed.
 *
 * @param displayFav this hook tells us whether the user wants
 *    to display only its favorited installations or not.
 * @param setInstallationIndex sets the index to 0 to start
 *    the carousel from the first element after a display
 *    change.
 */

function App() {
  const [displayFav, setDisplayFav] = useState(false);
  const [updateFilters, setUpdateFilters] = useState(true);
  const [updateFavorites, setUpdateFavorites] = useState(false);
  const { installationIndex, setInstallationIndex } = useInstallationIndex();

  const displayFavorites = () => {
    if (favoriteInstallationIds.length > 0) {
      setInstallationIndex(0);
      setDisplayFav(!displayFav);
      updateFavButton();
    }
  };

  const displayAllInstallations = () => {
    setInstallationIndex(0);
    setDisplayFav(false);
    updateFavButton();
  };

  const updateFilteredIndex = () => {
    if (installationIndex === 0) setUpdateFilters(!updateFilters);
    setInstallationIndex(0);
    setDisplayFav(false);

    updateFavButton();
  };

  const updateFavButton = () => {
    if (displayFav) {
      document.getElementById("displayFavButton")!!.innerHTML =
        "Display only favorites";
    } else {
      document.getElementById("displayFavButton")!!.innerHTML =
        "Display all installations";
    }
  };

  const updateDisplayedFavorites = () => {
    if (displayFav && favoriteInstallationIds.length === 0) {
      alert("You have no more favorites </3 \n\nDisplaying all installations.");
      displayAllInstallations();
    } else if (
      displayFav &&
      installationIndex >= favoriteInstallationIds.length
    ) {
      setInstallationIndex(favoriteInstallationIds.length - 1);
    }

    setUpdateFavorites(!updateFavorites);
  };

  const displayFavButton = document.getElementById("displayFavButton");

  if (favoriteInstallationIds.length === 0) {
    displayFavButton?.classList.remove("allowedButton");
    displayFavButton?.classList.add("disabledButton");
  } else {
    displayFavButton?.classList.remove("disabledButton");
    displayFavButton?.classList.add("allowedButton");
  }

  return (
    <div>
      <Header />
      <Menu favOnClick={displayFavorites} filterOnClick={updateFilteredIndex} />
      <Carousel
        displayOnlyFavorites={displayFav}
        updateFilters={updateFilters}
        updateFavorites={updateDisplayedFavorites}
      />
    </div>
  );
}

export default App;
