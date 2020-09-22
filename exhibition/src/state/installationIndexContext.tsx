import React from "react";

/**
 * InstallationIndexContext is a context to keep track
 * of which installation is displayed.
 * It is a context because it is used several places in
 * the webapp.
 */

type InstallationIndexContextType = {
  installationIndex: number;
  setInstallationIndex: (value: number) => void;
};

export const InstallationIndexContext = React.createContext<
  InstallationIndexContextType
>(undefined!);

type ContextProps = {
  children: React.ReactNode;
};

export const InstallationIndexProvider = ({ children }: ContextProps) => {
  const [installationIndex, setInstallationIndex] = React.useState(0);

  React.useEffect(() => {
    const currentIndex = indexFromSessionStorage();
    setInstallationIndex(currentIndex);
  }, []);

  return (
    <InstallationIndexContext.Provider
      value={{ installationIndex, setInstallationIndex }}
    >
      {children}
    </InstallationIndexContext.Provider>
  );
};

export const useInstallationIndex = () =>
  React.useContext(InstallationIndexContext);

/**
 * indexFromSessionStorage retrieves the index of the
 * installation which is displayed at the time.
 *
 * Used in InstallationIndexContext to display the
 * last shown installation before reloading.
 */

const indexFromSessionStorage = () => {
  const carouselIndex = sessionStorage.getItem("carouselIndex") || 0;
  return Number(carouselIndex);
};
