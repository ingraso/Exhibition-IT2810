import React from "react";
import "./carousel.css";
import InstallationContent from "../InstallationContent/installationContent";
import { installations } from "../../installations";
import InstallationInfo from "../InstallationInfo/installationInfo";

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
          <div className="arrows" onClick={() => changeInstallation(false)}>
            <i className="arrow left"></i>
          </div>

          <div id="installation">
            <InstallationContent
              installation={
                installations[this.state.displayedInstallationIndex].shapes
              }
            />
          </div>
          <div className="arrows" onClick={() => changeInstallation(true)}>
            <i className="arrow right"></i>
          </div>
        </div>
        <div id="artistInfo">
          <InstallationInfo
            installationTitle={
              installations[this.state.displayedInstallationIndex].title
            }
            year={installations[this.state.displayedInstallationIndex].year}
            artist={installations[this.state.displayedInstallationIndex].artist}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
