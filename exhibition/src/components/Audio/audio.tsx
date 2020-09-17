import React from "react";

interface AudioProps {
    audioUrl: string;
}

class Audio extends React.Component<AudioProps> {
    render() {
        return(
            <div className="audio-control">
                <audio controls  key={this.props.audioUrl}>
                    <source src={this.props.audioUrl} />
                    Your browser does not support audio-tag
                </audio>
            </div>
        );
    }
}

export default Audio;