import React from "react";

interface PoetryState {
  txt: string[];
  id: string;
}

interface PoetryProps {
  id: string;
  url: string;
}

/**
 * Poetry is a component that makes a fetch call to the given url,
 * then parses and returns the poem it found.
 * @var id is the identifying string linking it to the correct installation
 * @var url is the url the fetch call is made on.
 */

class Poetry extends React.Component<PoetryProps, PoetryState> {
  constructor(props: PoetryProps) {
    super(props);
    this.state = {
      txt: [],
      id: this.props.id,
    };
    this.fetchPoetry = this.fetchPoetry.bind(this);
  }

  fetchPoetry() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((poem) => {
        this.setState({ txt: poem[0].lines });
      });
    this.setState({ id: this.props.id });
  }

  componentDidMount() {
    this.fetchPoetry();
  }

  render() {
    if (this.props.id !== this.state.id) this.fetchPoetry();
    return (
      <div id={this.props.id} className={"poem"}>
        {this.state.txt.map((poemLine, index) => (
          <p key={index}>{poemLine}</p>
        ))}
      </div>
    );
  }
}

export default Poetry;
