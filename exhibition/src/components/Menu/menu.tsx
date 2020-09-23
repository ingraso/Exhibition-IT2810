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

        <h2 id="filterTitle">Filter by:</h2>
        <div id="filters">
          <div id="filter1">
            <input
              type="checkbox"
              id="input1"
              name="dark_filter"
              onChange={() => filterCheckboxClick("Dark")}
              defaultChecked={tagIsChosen("Dark")}
            />
            <label htmlFor="input1"> Dark </label>
          </div>
          <br />
          <div id="filter2">
            <input
              type="checkbox"
              id="input2"
              name="light_filter"
              onChange={() => filterCheckboxClick("Light")}
              defaultChecked={tagIsChosen("Light")}
            />
            <label htmlFor="input2"> Light </label>
          </div>
          <br />
          <div id="filter3">
            <input
              type="checkbox"
              id="input3"
              name="colorful_filter"
              onChange={() => filterCheckboxClick("Colorful")}
              defaultChecked={tagIsChosen("Colorful")}
            />
            <label htmlFor="input3"> Colorful </label>
          </div>
          <br />
          <div id="filter4">
            <input
              type="checkbox"
              id="input4"
              name="circles_filter"
              onChange={() => filterCheckboxClick("Circles")}
              defaultChecked={tagIsChosen("Circles")}
            />
            <label htmlFor="input4"> Circles </label>
          </div>
          <br />
          <div id="filter5">
            <input
              type="checkbox"
              id="input5"
              name="rect_filter"
              onChange={() => filterCheckboxClick("Rectangles")}
              defaultChecked={tagIsChosen("Rectangles")}
            />
            <label htmlFor="input5"> Rectangles </label>
          </div>
          <br />
          <div id="filter6">
            <input
              type="checkbox"
              id="input6"
              name="figures_filter"
              onChange={() => filterCheckboxClick("Figures")}
              defaultChecked={tagIsChosen("Figures")}
            />
            <label htmlFor="input6"> Figures </label>
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
