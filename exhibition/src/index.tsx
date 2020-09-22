import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { InstallationIndexProvider } from "./state/installationIndexContext";

ReactDOM.render(
  <React.StrictMode>
    <InstallationIndexProvider>
      <App />
    </InstallationIndexProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
