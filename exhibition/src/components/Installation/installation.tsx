import React, { Component } from "react";

interface InstallationState {
  poem: [];
  url: string;
}

interface InstallationProps {}

class Installation extends React.Component<
  InstallationProps,
  InstallationState
> {
  constructor(props: InstallationProps, poetryUrl: string) {
    super(props);
    this.state = { poem: [], url: poetryUrl };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((poem) => poem[0].lines);
  }

  render() {
    return (
      <div>
        {this.state.poem.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}

export default Installation;
