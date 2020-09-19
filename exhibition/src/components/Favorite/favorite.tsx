import React, { useEffect, useState } from "react";

export let favoriteInstallations = [];

export const Fav = (installation: any) => {
  installation = installation.installation;
  const [favorites, setFavorites] = useState<any[]>([]);
  const addFavorite = () => {
    if (favorites.some((favorite) => favorite === installation.id)) {
      setFavorites(
        favorites.filter((favorite) => favorite !== installation.id)
      );
    } else {
      setFavorites((favorites) => favorites.concat(installation.id));
    }
  };

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  if (favorites.length > 0) {
    favoriteInstallations = JSON.parse(
      window.localStorage.getItem("favorites")!!
    );
  }

  return <button onClick={addFavorite}>Add to favorites</button>;
};
