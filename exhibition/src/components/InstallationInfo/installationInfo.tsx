import React from "react";
import "./installationInfo.css"

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

class InstallationInfo extends React.Component<InstallationInfoProps, {}> {
  render() {
    return (
      <div>
        <h2 id="installation-title">
          {this.props.installationTitle} ({this.props.year})
        </h2>
        <h4 id="artist">{this.props.artist}</h4>
      </div>
    );
  }
}

export default InstallationInfo;
