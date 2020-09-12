import React from "react";

interface InstallationInfoProps {
  installationTitle: string;
  year: number;
  artist: string;
}

class InstallationInfo extends React.Component<InstallationInfoProps, {}> {
  render() {
    return (
      <div>
        <h2>
          {this.props.installationTitle} ({this.props.year})
        </h2>
        <h4>{this.props.artist}</h4>
      </div>
    );
  }
}

export default InstallationInfo;
