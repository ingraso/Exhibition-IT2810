import React from "react";

interface AudioProps {
  audioUrl: string;
}

/**
 * Audio is the component that controls the audio.
 *
 * @param audioUrl is the url source of the audio.
 */

class Audio extends React.Component<AudioProps> {
  render() {
    return (
      <div className="audio-control">
        <audio controls key={this.props.audioUrl}>
          <source src={this.props.audioUrl} />
          Your browser does not support audio-tag.
        </audio>
      </div>
    );
  }
}

export default Audio;
