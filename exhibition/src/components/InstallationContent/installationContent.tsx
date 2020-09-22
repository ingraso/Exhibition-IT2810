import React from "react";
import { createShape } from "../../installations/installations";

interface InstallationContentProps {
  installation: Object[];
}

/**
 * InstallationContent contains the svg of the installations.
 * It initializes a installation's shapes into its respective
 * objects.
 *
 * @param installation is an installation and contains a list
 *     of shapes.
 */

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
