import React, { useEffect, useState } from "react";

// an array containing all the favorited installations' ids
export let favoriteInstallationIds = [];

/**
 * FavoriteButton saves the installation's id to HTML
 * localstorage.
 *
 * @param installation contains all info about an
 *    installation, like its id.
 * @param favoriteIds is an array of all the favorited
 *    installations' ids.
 */

export const FavoriteButton = (installation: any) => {
  installation = installation.installation;
  const [favoriteIds, setFavoriteIds] = useState<any[]>([]);
  const addFavorite = () => {
    if (favoriteIds.some((favorite) => favorite === installation.id)) {
      setFavoriteIds(
        favoriteIds.filter((favorite) => favorite !== installation.id)
      );
    } else {
      setFavoriteIds((favoriteIds) => favoriteIds.concat(installation.id));
    }
  };

  useEffect(() => {
    window.localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  if (window.localStorage.getItem("favoriteIds") !== null) {
    favoriteInstallationIds = JSON.parse(
      window.localStorage.getItem("favoriteIds")!!
    );
  }

  return (
    <button id="favoriteButton" onClick={addFavorite}>
      Add to favorites
    </button>
  );
};
