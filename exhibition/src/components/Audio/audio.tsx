import React from "react";

interface AudioProps {
  audioUrl: string;
}

/*Component for the Audio controller.
Takes in the url source of the audio as a prop*/

class Audio extends React.Component<AudioProps> {
  render() {
    return (
      <div className="audio-control">
        <audio controls key={this.props.audioUrl}>
          <source src={this.props.audioUrl} />
          Your browser does not support audio-tag
        </audio>
      </div>
    );
  }
}

export default Audio;
