import React, { useState } from "react";
import "./menu.css";
import {
  applyFilters,
  applyPossible,
} from "../InstallationFilter/installationFilter";
import { favoriteInstallationIds } from "../Favorite/favorite";
import FilterGroup from "../FilterGroup/filterGroup";

/**
 * Menu is a component for showing/hiding the menu. 

 * @var open this hook is used to decide if the 
 *    menu is shown or not.
 * @var favOnClick is a function sent from App,
 *    which displays the favorite installations.
 * @var filterOnClick is a function sent from
 *    App, which displays the filtered installations.
 */

const Menu = ({
  favOnClick,
  filterOnClick,
}: {
  favOnClick: any;
  filterOnClick: any;
}) => {
  const [open, setOpen] = useState(false);

  const favButtonClick = () => {
    if (favoriteInstallationIds.length > 0) {
      favOnClick();
      setOpen(!open);
    }
  };

  const applyButtonClick = () => {
    if (applyPossible()) {
      applyFilters();
      filterOnClick();
      setOpen(!open);
    }
  };

  return (
    <div>
      <div id="menu" className={open ? "open" : "closed"}>
        <button
          id="displayFavButton"
          className="disabledButton"
          onClick={favButtonClick}
          type="button"
        >
          Only display favorites
          <span id="favHoverText">You don't have any favorites yet</span>
        </button>
        <div id="close-button" onClick={() => setOpen(!open)}>
          <div className="line-one">
            <div className="line-two" />
          </div>
        </div>
        <div id="up-arrow" onClick={() => setOpen(!open)} />
        <div id="blurry-area" />

        <h2 id="filterTitle">Display pictures with:</h2>
        <div id="filters">
          <FilterGroup divId="paletteFilters" groupName="Palette" />
          <FilterGroup divId="shapesFilters" groupName="Shapes" />
          <FilterGroup divId="artistFilters" groupName="Artist" />
        </div>
        <button id="apply_btn" className="allowedButton" onClick={applyButtonClick}>
          Apply filters
          <span id="filterHoverText">
            No installations fit the chosen filters
          </span>
        </button>
      </div>
      <div
        id="burger-button"
        className={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
      >
        <div id="top-line" />
        <div id="middle-line" />
        <div id="bottom-line" />
      </div>
    </div>
  );
};

export default Menu;
