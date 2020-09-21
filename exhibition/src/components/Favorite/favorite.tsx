import React, { useEffect, useState } from "react";

export let favoriteInstallationIds = [];
let isFavorite = false;

export const Fav = (installation: any) => {
  installation = installation.installation;
  const [favorites, setFavorites] = useState<any[]>([]);
  const addFavorite = () => {
    if (favorites.some((favorite) => favorite === installation.id)) {
      setFavorites(
        favorites.filter((favorite) => favorite !== installation.id)
      );
      document.getElementById("favoriteButton")!!.innerHTML =
        "Add to favorites";
    } else {
      setFavorites((favorites) => favorites.concat(installation.id));
      document.getElementById("favoriteButton")!!.innerHTML =
        "Remove from favorites";
    }
  };

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  if (favorites.length > 0) {
    favoriteInstallationIds = JSON.parse(
      window.localStorage.getItem("favorites")!!
    );
  }

  return (
    <button id="favoriteButton" onClick={addFavorite}>
      Add to favorites
    </button>
  );
};
