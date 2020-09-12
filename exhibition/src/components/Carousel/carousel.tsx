import React from "react";
import "./carousel.css";
import "../../installations/installation1.css";
import "../../installations/installation2.css";
import "../../installations/installation3.css";
import InstallationContent from "../InstallationContent/installationContent";
import { installations } from "../../installations/installations";
import InstallationInfo from "../InstallationInfo/installationInfo";
import Poetry from "../Poetry/poetry";

interface CarouselState {
  displayedInstallationIndex: number;
}

class Carousel extends React.Component<{}, CarouselState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      displayedInstallationIndex: 0,
    };
  }
  render() {
    const changeInstallation = (next: Boolean) => {
      if (next) {
        this.state.displayedInstallationIndex === installations.length - 1
          ? this.setState({ displayedInstallationIndex: 0 })
          : this.setState({
              displayedInstallationIndex:
                this.state.displayedInstallationIndex + 1,
            });
      } else {
        this.state.displayedInstallationIndex === 0
          ? this.setState({
              displayedInstallationIndex: installations.length - 1,
            })
          : this.setState({
              displayedInstallationIndex:
                this.state.displayedInstallationIndex - 1,
            });
      }
    };

    return (
      <div>
        <div id="carousel">
          <div
            className="arrows left"
            onClick={() => changeInstallation(false)}
          >
            <div className="leftArrow"></div>
          </div>

          <div id="installation">
            <InstallationContent
              installation={
                installations[this.state.displayedInstallationIndex].shapes
              }
              audioUrl={
                installations[this.state.displayedInstallationIndex].audioUrl
              }
            />
            <Poetry
              url={installations[this.state.displayedInstallationIndex].poemUrl}
              id={installations[this.state.displayedInstallationIndex].poemId}
            />
          </div>
          <div
            className="arrows right"
            onClick={() => changeInstallation(true)}
          >
            <div className="rightArrow"></div>
          </div>
          <div id="artInfo">
            <InstallationInfo
              installationTitle={
                installations[this.state.displayedInstallationIndex].title
              }
              year={installations[this.state.displayedInstallationIndex].year}
              artist={
                installations[this.state.displayedInstallationIndex].artist
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
