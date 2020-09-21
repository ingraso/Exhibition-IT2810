import React, { useState } from "react";
import "./menu.css";

/*
A component for showing/hiding the menu. 
The open-hook is used to decide if the menu is shown or not. 
*/

const Menu = ({ favOnClick }: { favOnClick: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id="menu" className={open ? "open" : "closed"}>
        <button id="displayFavButton" onClick={favOnClick} type="button">
          Only display favorites
        </button>
        <div id="close-button" onClick={() => setOpen(!open)}>
          <div className="line-one">
            <div className="line-two"></div>
          </div>
        </div>
        <div id="up-arrow" onClick={() => setOpen(!open)}></div>
        <div id="blurry-area"></div>
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
