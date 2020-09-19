import React, { useState } from "react";
import Carousel from "./components/Carousel/carousel";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";

function App() {
  const [displayFav, setDisplayFav] = useState(false);
  const displayFavorites = () => {
    setDisplayFav(!displayFav);
    if (displayFav) {
      document.getElementById("displayFavButton")!!.innerHTML =
        "Display only favorites";
    } else {
      document.getElementById("displayFavButton")!!.innerHTML =
        "Display all installations";
    }
  };
  return (
    <div className="App">
      <Header />
      <Menu favOnClick={displayFavorites} />
      <Carousel displayOnlyFavorites={displayFav} />
    </div>
  );
}

export default App;
