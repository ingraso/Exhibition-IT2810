import React from "react";
import "./carousel.css";
import Installation from "../../../installations/intallation4";

interface CarouselState {
  displayedInstallationIndex: number;
}

/**
 * TODO:
 * have to get the installation and artist name somehow
 * maybe think of a good way to do this with props
 * insert an installation, which is both the picture,
 * and with {.title}, {.artistName} and {.year}
 *
 * Create installations in the same way as I did in project 1?
 * Have to have an effective way to add animations
 *
 *
 * Responsive design for mobile:
 *    - Move buttons below installation
 */

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
        // should one be able to go from element 1 to the last (backwards) by pressing the arrows?
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
            {installations[this.state.displayedInstallationIndex]}
          </div>

          <div className="arrows" onClick={() => changeInstallation(true)}>
            <i className="arrow right"></i>
          </div>
        </div>
        <div id="artistInfo">
          <h2>The Ferd on Mars</h2>
          <h4>Name Namesen (1889)</h4>
        </div>
      </div>
    );
  }
}

export default Carousel;
