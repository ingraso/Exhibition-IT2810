import React from "react";
import "./installation4.css";

interface InstallationProps {
  // TODO
  id1: string;
  id2?: string;
  width: string;
  height: string;
}

class Installation extends React.Component<InstallationProps, {}> {
  render() {
    return (
      <svg>
        <rect
          id={this.props.id1}
          width={this.props.width}
          height={this.props.height}
        />
        <rect
          id={this.props.id2}
          x="75"
          y="41"
          width={this.props.width}
          height={this.props.height}
        />
      </svg>
    );
  }
}

export default Installation;

/**
 * <rect id="rect1" width="300" height="330" />
        <rect id="rect2" x="75" y="41" width="50" height="50" />
 */
