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
        <svg className="picture" width="350" height="350">
          {this.props.installation.map((shape: Object) => createShape(shape))}
        </svg>
      </div>
    );
  }
}

export default InstallationContent;
