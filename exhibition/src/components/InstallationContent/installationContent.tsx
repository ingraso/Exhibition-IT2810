import React from "react";
import { createShape } from "../../installations/installations";

interface InstallationContentProps {
  installation: Object[];
}

class InstallationContent extends React.Component<
  InstallationContentProps,
  {}
> {
  render() {
    return (
      <div>
        <svg width="350" height="350">
          {this.props.installation.map((shape: Object) => createShape(shape))}
        </svg>
        <br />
        
      </div>
    );
  }
}

export default InstallationContent;
