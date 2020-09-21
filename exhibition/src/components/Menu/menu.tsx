import React, { useState } from "react";
import "./menu.css";
import {InstallationFilter} from "../InstallationFilter/installationFilter";

/*
A component for showing/hiding the menu. 
The open-hook is used to decide if the menu is shown or not. 
*/

const Menu = ({ favOnClick } : { favOnClick: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id="menu" className={open ? "open" : "closed"}>
        <div
          id="close-button"
          className={open ? "open" : "closed"}
          onClick={() => setOpen(!open)}
        >
          <div className="line-one">
            <div className="line-two"></div>
          </div>
        </div>
        <button id="displayFavButton" onClick={favOnClick} type="button">
          Only display favorites
        </button>
        <div>
          <input type="checkbox" id="filter1" name="a_filter" value="a" onChange={() => InstallationFilter("a")}/>
          <label htmlFor="filter1"> Filter a</label><br/>
          <input type="checkbox" id="filter2" name="b_filter" value="b" onChange={() => InstallationFilter( "b")}/>
          <label htmlFor="filter2"> Filter b</label>
        </div>
        <div
          id="up-arrow"
          className={open ? "open" : "closed"}
          onClick={() => setOpen(!open)}
        ></div>
      </div>
      <div
        id="burger-button"
        className={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
      >
        <div id="top-line" className={open ? "open" : "closed"}></div>
        <div id="middle-line" className={open ? "open" : "closed"}></div>
        <div id="bottom-line" className={open ? "open" : "closed"}></div>
      </div>
      <div id="blurry-area" className={open ? "open" : "closed"}></div>
    </div>
  );
};

export default Menu;
