import React from "react";
import "./installationInfo.css";

interface InstallationInfoProps {
  installationTitle: string;
  year: number;
  artist: string;
}

/**
 * InstallationInfo contains info about the installation.
 * This includes the title, year it was created and the
 * artist who created it.
 */

const InstallationInfo = ({
  installationTitle,
  year,
  artist,
}: {
  installationTitle: string;
  year: number;
  artist: string;
}) => {
  return (
    <div>
      <h2 id="installation-title">
        {installationTitle} ({year})
      </h2>
      <h4 id="artist">{artist}</h4>
    </div>
  );
};

export default InstallationInfo;
