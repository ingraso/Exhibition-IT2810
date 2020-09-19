import React, { useState } from "react";
import "./menu.css";

/*
A component for showing/hiding the menu. 
The open-hook is used to decide if the menu is shown or not. 
*/

const Menu = () => {
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
