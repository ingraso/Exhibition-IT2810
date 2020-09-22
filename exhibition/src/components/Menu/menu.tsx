import React, { useState } from "react";
import "./menu.css";
import {InstallationFilter, tagIsChosen} from "../InstallationFilter/installationFilter";
import {favoriteInstallationIds} from "../Favorite/favorite";

/**
 * Menu is a component for showing/hiding the menu. 

 * @param open this hook is used to decide if the menu is shown or not.
 */

const Menu = ({ favOnClick, filterOnClick }: { favOnClick: any, filterOnClick: any}) => {
  const [open, setOpen] = useState(false);

  const favButtonClick = () => {
    favOnClick();
    setOpen(!open);
  };

  const filterCheckboxClick = (new_tag: string) => {
    InstallationFilter(new_tag);
    filterOnClick();
  }

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
          <input type="checkbox" id="filter1" name="a_filter" onChange={() => filterCheckboxClick("a")} defaultChecked={tagIsChosen("a")}/>
          <label htmlFor="filter1"> Filter a</label><br/>
          <input type="checkbox" id="filter2" name="b_filter" onChange={() => filterCheckboxClick("b")} defaultChecked={tagIsChosen("b")}/>
          <label htmlFor="filter2"> Filter b</label>
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
