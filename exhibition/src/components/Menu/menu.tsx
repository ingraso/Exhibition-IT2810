import React, { useState } from "react";
import "./menu.css";
import {
  InstallationFilter,
  tagIsChosen,
} from "../InstallationFilter/installationFilter";
import { favoriteInstallationIds } from "../Favorite/favorite";

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

  const filterCheckboxClick = (new_tag: string) => {
    InstallationFilter(new_tag);
    filterOnClick();
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
        </button>
        <div id="close-button" onClick={() => setOpen(!open)}>
          <div className="line-one">
            <div className="line-two" />
          </div>
        </div>
        <div id="up-arrow" onClick={() => setOpen(!open)} />
        <div id="blurry-area" />

        <h2 id="filterTitle">Filter by:</h2>
        <div id="filters">
          <div id="filter1">
            <input
              type="checkbox"
              id="darkCheckbox"
              name="dark_filter"
              onChange={() => filterCheckboxClick("Dark")}
              defaultChecked={tagIsChosen("Dark")}
            />
            <label htmlFor="darkCheckbox"> Dark </label>
          </div>
          <br />
          <div id="filter2">
            <input
              type="checkbox"
              id="lightCheckbox"
              name="light_filter"
              onChange={() => filterCheckboxClick("Light")}
              defaultChecked={tagIsChosen("Light")}
            />
            <label htmlFor="lightCheckbox"> Light </label>
          </div>
          <br />
          <div id="filter3">
            <input
              type="checkbox"
              id="colorfulCheckbox"
              name="colorful_filter"
              onChange={() => filterCheckboxClick("Colorful")}
              defaultChecked={tagIsChosen("Colorful")}
            />
            <label htmlFor="colorfulCheckbox"> Colorful </label>
          </div>
          <br />
          <div id="filter4">
            <input
              type="checkbox"
              id="CirclesCheckbox"
              name="circles_filter"
              onChange={() => filterCheckboxClick("Circles")}
              defaultChecked={tagIsChosen("Circles")}
            />
            <label htmlFor="CirclesCheckbox"> Circles </label>
          </div>
          <br />
          <div id="filter5">
            <input
              type="checkbox"
              id="rectanglesCheckbox"
              name="rect_filter"
              onChange={() => filterCheckboxClick("Rectangles")}
              defaultChecked={tagIsChosen("Rectangles")}
            />
            <label htmlFor="rectanglesCheckbox"> Rectangles </label>
          </div>
          <br />
          <div id="filter6">
            <input
              type="checkbox"
              id="figuresCheckbox"
              name="figures_filter"
              onChange={() => filterCheckboxClick("Figures")}
              defaultChecked={tagIsChosen("Figures")}
            />
            <label htmlFor="figuresCheckbox"> Figures </label>
          </div>
        </div>
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
