import React from "react";
import "./installation2.css";

const InstallationTwo = () => {
  return (
    <div className="flex-container">
      <svg id="svg2" height="350" width="350">
        <circle id="c8" cx="32" cy="78" r="30" strokeWidth="3" fill="white" />
        <circle id="c9" cx="175" cy="100" r="30" strokeWidth="3" fill="white" />
        <circle
          id="c13"
          cx="100"
          cy="200"
          r="10"
          strokeWidth="3"
          fill="white"
        />
      </svg>
      <audio controls>
        <source src=" https://docs.google.com/uc?export=download&id=13-YgFevw6zqpnV96zCkuvxCZL9ij7FvA" />
        Your browser does not supprt this
      </audio>
    </div>
  );
};

export default InstallationTwo;
