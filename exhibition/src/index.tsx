import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ContextBasedApp from "./contextBasedApp";

ReactDOM.render(
  <React.StrictMode>
    <ContextBasedApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
