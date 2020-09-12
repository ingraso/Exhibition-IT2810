import React from "react";
import { createShape } from "../../installations";

interface InstallationContentProps {
  installation: Object[];
}

class InstallationContent extends React.Component<
  InstallationContentProps,
  {}
> {
  render() {
    return (
      <svg>{this.props.installation.map((shape: Object) => createShape(shape))}</svg>
    );
  }
}

export default InstallationContent;
