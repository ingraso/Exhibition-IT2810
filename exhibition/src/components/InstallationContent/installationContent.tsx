import React from "react";
import { createShape } from "../../installations/installations";

interface InstallationContentProps {
  installation: Object[];
}

/**
 * InstallationContent contains the svg of the installations.
 * It initializes an installation's shapes into its respective
 * objects.
 *
 * @var installation is an installation and contains a list
 *     of shapes.
 */

const InstallationContent = ({ installation }: { installation: Object[] }) => {
  return (
    <div>
      <svg className="picture" width="350" height="350">
        {installation.map((shape: Object) => createShape(shape))}
      </svg>
    </div>
  );
};

export default InstallationContent;
