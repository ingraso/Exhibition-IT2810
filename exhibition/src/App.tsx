import React, { useState } from "react";
import Carousel from "./components/Carousel/carousel";
import { favoriteInstallationIds } from "./components/Favorite/favorite";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";
import { useInstallationIndex } from "./state/installationIndexContext";
import { filteredInstallations } from "./components/InstallationFilter/installationFilter";

/**
 * App is the component at the highest level in this webapp.
 * It runs displayFavorites() when the button in the menu is
 * pressed.
 *
 * @param displayFav this hook tells us wheter the user wants
 *    to display only its favorited installations or not.
 * @param setInstallationIndex sets the index to 0 to start
 *    the carousel from the first element after a display
 *    change.
 */
function App() {
  const [displayFav, setDisplayFav] = useState(false);
  const { installationIndex, setInstallationIndex } = useInstallationIndex();

  const displayFavorites = () => {
    if (favoriteInstallationIds.length > 0) {
      setInstallationIndex(0);

      setDisplayFav(!displayFav);
      if (displayFav) {
        document.getElementById("displayFavButton")!!.innerHTML =
          "Display only favorites";
      } else {
        document.getElementById("displayFavButton")!!.innerHTML =
          "Display all installations";
      }
    } else {
      alert("You don't have any favorites yet!");
    }
  };

  const updateFilteredIndex = () => {
    if (installationIndex > filteredInstallations.length)
      setInstallationIndex(0);
  };

  return (
    <div>
      <Header />
      <Menu favOnClick={displayFavorites} filterOnClick={updateFilteredIndex} />
      <Carousel displayOnlyFavorites={displayFav} />
    </div>
  );
}

export default App;
