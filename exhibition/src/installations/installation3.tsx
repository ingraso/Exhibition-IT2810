import React from "react";
import "./installation3.css";

const InstallationThree = () => {
  return (
    <div className="flex-container">
      <svg id="svg3" width="350" height="350">
        <circle
          id="c10"
          cx="175"
          cy="175"
          r="150"
          fill="#6bffb5"
          stroke="white"
          strokeWidth="50"
        />
        <circle
          id="c11"
          cx="175"
          cy="175"
          r="100"
          fill="#6bffb5"
          stroke="white"
          strokeWidth="50"
        />
        <circle
          id="c12"
          cx="175"
          cy="175"
          r="50"
          fill="#6bffb5"
          stroke="white"
          strokeWidth="50"
        />
      </svg>

      <audio controls>
        <source src="https://docs.google.com/uc?export=download&id=1DIDOj7PlYM0XczQKTlmK5zbr_jwn4nNB" />
        Your browser does not support audio-tag
      </audio>
    </div>
  );
};

export default InstallationThree;
