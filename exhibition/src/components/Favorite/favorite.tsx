import React, { useEffect, useState } from "react";
//import FavoriteInstallation from "../FavoriteInstallations/favoriteinstallation";

export const Fav = (installation: any) => {
  installation = installation.installation;
  const [favorites, setFavorites] = useState<any[]>([]);
  const addFavorite = () => {
    // change title to id after merging of MR #13 on GitLab (and add ids in installations.ts)
    if (favorites.some((favorite) => favorite.title === installation.title)) {
      setFavorites(
        favorites.filter((favorite) => favorite.title !== installation.title)
      );
    } else {
      setFavorites((favorites) => favorites.concat(installation));
    }
  };

  useEffect(() => {
    window.localStorage.setItem("favorites", favorites.toString());
  }, [favorites]);

  return (
    <div>
      <button onClick={addFavorite}>FAAAVEE</button>
      <div>
        {favorites.length > 0 ? (
          <p>{favorites.map((favorite) => favorite.title + "\n")}</p>
        ) : (
          <p>No faves yet</p>
        )}
      </div>
    </div>
  );
};
