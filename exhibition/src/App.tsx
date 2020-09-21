import React, { useState } from "react";
import Carousel from "./components/Carousel/carousel";
import { favoriteInstallationIds } from "./components/Favorite/favorite";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";

function App() {
  const [displayFav, setDisplayFav] = useState(false);
  const [changeDisplay, setChangeDisplay] = useState(false);

  const displayFavorites = () => {
    if (favoriteInstallationIds.length > 0) {
      setChangeDisplay(true);
      setDisplayFav(!displayFav);
      //changeDisplay = true;
      if (displayFav) {
        document.getElementById("displayFavButton")!!.innerHTML =
          "Display only favorites";
      } else {
        document.getElementById("displayFavButton")!!.innerHTML =
          "Display all installations";
      }
    } else {
      setChangeDisplay(false);
      alert("You don't have any favorites yet!");
    }
  };

  console.log(changeDisplay);
  return (
    <div className="App">
      <Header />
      <Menu favOnClick={displayFavorites} />
      <Carousel
        displayOnlyFavorites={displayFav}
        changeDisplay={changeDisplay}
      />
    </div>
  );
}

export default App;
