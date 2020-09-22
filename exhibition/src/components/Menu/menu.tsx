import React, { useState } from "react";
import "./menu.css";
import {
  InstallationFilter,
  tagIsChosen,
} from "../InstallationFilter/installationFilter";
import { favoriteInstallationIds } from "../Favorite/favorite";

/**
 * Menu is a component for showing/hiding the menu. 

 * @param open this hook is used to decide if the menu is shown or not.
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
    favOnClick();
    setOpen(!open);
  };

  const filterCheckboxClick = (new_tag: string) => {
    InstallationFilter(new_tag);
    filterOnClick();
  };

  return (
    <div>
      <div id="menu" className={open ? "open" : "closed"}>
        <button id="displayFavButton" onClick={favButtonClick} type="button">
          Only display favorites
        </button>
        <div id="close-button" onClick={() => setOpen(!open)}>
          <div className="line-one">
            <div className="line-two"></div>
          </div>
        </div>
        <div id="up-arrow" onClick={() => setOpen(!open)}></div>
        <div id="blurry-area"></div>
        <div id="filterCheckboxes">
          <input
            type="checkbox"
            id="filter1"
            name="dark_filter"
            onChange={() => filterCheckboxClick("Dark")}
            defaultChecked={tagIsChosen("Dark")}
          />
          <label htmlFor="filter1"> Dark </label>
          <br />
          <input
            type="checkbox"
            id="filter2"
            name="light_filter"
            onChange={() => filterCheckboxClick("Light")}
            defaultChecked={tagIsChosen("Light")}
          />
          <label htmlFor="filter2"> Light </label>
          <br />
          <input
            type="checkbox"
            id="filter3"
            name="colorful_filter"
            onChange={() => filterCheckboxClick("Colorful")}
            defaultChecked={tagIsChosen("Colorful")}
          />
          <label htmlFor="filter2"> Colorful </label>
          <br />
          <input
            type="checkbox"
            id="filter4"
            name="circles_filter"
            onChange={() => filterCheckboxClick("Circles")}
            defaultChecked={tagIsChosen("Circles")}
          />
          <label htmlFor="filter2"> Circles </label>
          <br />
          <input
            type="checkbox"
            id="filter5"
            name="rect_filter"
            onChange={() => filterCheckboxClick("Rectangles")}
            defaultChecked={tagIsChosen("Rectangles")}
          />
          <label htmlFor="filter2"> Rectangles </label>
          <br />
          <input
            type="checkbox"
            id="filter6"
            name="figures_filter"
            onChange={() => filterCheckboxClick("Figures")}
            defaultChecked={tagIsChosen("Figures")}
          />
          <label htmlFor="filter2"> Figures </label>
        </div>
      </div>
      <div
        id="burger-button"
        className={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
      >
        <div id="top-line"></div>
        <div id="middle-line"></div>
        <div id="bottom-line"></div>
      </div>
    </div>
  );
};

export default Menu;
