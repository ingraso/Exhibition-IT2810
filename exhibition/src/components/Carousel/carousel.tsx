import React from "react";
import "./carousel.css";
import Installation from "../../installations/installation4";

interface CarouselState {
  displayedInstallationIndex: number;
}

const installations = [
  <Installation id1="rect1" id2="rect2" width="100" height="100" />,
  <Installation id1="rect2" id2="rect1" width="50" height="50" />,
  <Installation id1="rect2" id2="rect2" width="30" height="30" />,
];

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
            {installations[this.state.displayedInstallationIndex]}
          </div>

          <div
            className="arrows right"
            onClick={() => changeInstallation(true)}
          >
            <div className="rightArrow"></div>
          </div>

          <div id="artistInfo">
            <h2>The Ferd on Mars</h2>
            <h4>Name Namesen (1889)</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
