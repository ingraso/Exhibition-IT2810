import React from "react";

interface PoetryState {
  txt : string[];
}

interface PoetryProps {
  url: string;
}

class Poetry extends React.Component<
  PoetryProps,
  PoetryState
> {
  constructor({url}: PoetryProps) {
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
        {this.state.txt.map((poemLine, index) => (
          <p key={index}>{poemLine}</p>
        ))}
      </div>
    );
  }
}

export default Poetry;
