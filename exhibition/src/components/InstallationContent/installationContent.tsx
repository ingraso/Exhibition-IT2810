import React from "react";
import { createShape } from "../../installations/installations";

interface InstallationContentProps {
  installation: Object[];
  audioUrl: string;
}

class InstallationContent extends React.Component<
  InstallationContentProps,
  {}
> {
  render() {
    return (
      <div key={this.props.audioUrl}>
        <svg width="350" height="350">
          {this.props.installation.map((shape: Object) => createShape(shape))}
        </svg>
        <audio controls>
          <source src={this.props.audioUrl} />
          Your browser does not support audio-tag
        </audio>
      </div>
    );
  }
}

export default InstallationContent;
