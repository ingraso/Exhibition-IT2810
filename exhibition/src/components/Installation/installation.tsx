import React from "react";

interface InstallationState {
  txt : string[];
}

interface InstallationProps {
  url: string;
}

class Installation extends React.Component<
  InstallationProps,
  InstallationState
> {
  constructor({url}: InstallationProps) {
    super({url});
    this.state = {
      txt : []
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then(poem => {this.setState({txt : poem[0].lines});})
  }

  render() {
    return (
      <div>
        {this.state.txt.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}

export default Installation;
