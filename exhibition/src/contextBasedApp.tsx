import React from "react";
import App from "./App";
import { InstallationIndexProvider } from "./state/installationIndexContext";

function ContextBasedApp() {
  return (
    <InstallationIndexProvider>
      <App />
    </InstallationIndexProvider>
  );
}

export default ContextBasedApp;
