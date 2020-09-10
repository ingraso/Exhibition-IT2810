import React, { Component } from "react";
import "./installation1.css";

export default class InstallationOne extends Component {
  render() {
    return (
      <div className="flex-container">
        <svg id="svg1" height="350" width="350">
          <circle
            id="c1"
            cx="156"
            cy="78"
            r="30"
            strokeWidth="3"
            fill="black"
          />
          <circle
            id="c2"
            cx="130"
            cy="276"
            r="60"
            strokeWidth="3"
            fill="black"
          />
          <circle
            id="c3"
            cx="300"
            cy="175"
            r="35"
            strokeWidth="3"
            fill="black"
          />
          <circle
            id="c4"
            cx="275"
            cy="40"
            r="20"
            strokeWidth="3"
            fill="black"
          />
          <circle
            id="c5"
            cx="60"
            cy="200"
            r="30"
            strokeWidth="3"
            fill="black"
          />
          <circle id="c6" cx="25" cy="30" r="40" strokeWidth="3" fill="black" />
          <circle
            id="c7"
            cx="270"
            cy="350"
            r="55"
            strokeWidth="3"
            fill="black"
          />
        </svg>

        <audio controls>
          <source src="https://docs.google.com/uc?export=download&id=1gAzs4UwdenQmNbEm9mdDIunb8Ef-kn5i" />
          Your browser does not supprt this
        </audio>
      </div>
    );
  }
}
