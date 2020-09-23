import React, { useState } from "react";
import "./menu.css";
import {
  InstallationFilter,
  tagIsChosen,
} from "../InstallationFilter/installationFilter";

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
            <div className="line-two"/>
          </div>
        </div>
        <div id="up-arrow" onClick={() => setOpen(!open)}/>
        <div id="blurry-area"/>

        <h2 id="filterTitle">Display pictures with:</h2>
        <div id="filters">
          <div id="paletteFilters">
            <h4>Palette:</h4>
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
          </div>
          <div id="shape_filters">
            <h4>Shapes</h4>
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
            <div id="filter6">
              <input
                type="checkbox"
                id="complexCheckbox"
                name="complex_filter"
                onChange={() => filterCheckboxClick("Complex")}
                defaultChecked={tagIsChosen("Complex")}
              />
              <label htmlFor="complexCheckbox"> Complex </label>
            </div>
          </div>
        </div>
      </div>
      <div
        id="burger-button"
        className={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
      >
        <div id="top-line"/>
        <div id="middle-line"/>
        <div id="bottom-line"/>
      </div>
    </div>
  );
};

export default Menu;
