import React from "react";
import "./carousel.css";
import "../../installations/installation1.css";
import "../../installations/installation2.css";
import "../../installations/installation3.css";
import "../../installations/installation4.css";
import "../../installations/installation5.css";
import "../../installations/installation6.css";
import "../../installations/installation7.css";
import "../../installations/installation8.css";
import "../../installations/installation9.css";
import InstallationContent from "../InstallationContent/installationContent";
import { allInstallations } from "../../installations/installations";
import InstallationInfo from "../InstallationInfo/installationInfo";
import Poetry from "../Poetry/poetry";
import Audio from "../Audio/audio";
import { Fav, favoriteInstallations } from "../Favorite/favorite";

interface CarouselState {
  displayedInstallationIndex: number;
}

interface CarouselProps {
  displayOnlyFavorites: Boolean;
}

let currentInstallations = allInstallations;

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      displayedInstallationIndex: 0,
    };
  }
  render() {
    //this.setState({ displayedInstallationIndex: 0 });
    if (this.props.displayOnlyFavorites) {
      currentInstallations = favoriteInstallations.map(
        (favInstallationId) =>
          allInstallations.filter((inst) => inst.id === favInstallationId)[0]
      );
    } else {
      currentInstallations = allInstallations;
    }

    const currentInstallation =
      currentInstallations[this.state.displayedInstallationIndex];

    const changeInstallation = (next: Boolean) => {
      if (next) {
        this.state.displayedInstallationIndex ===
        currentInstallations.length - 1
          ? this.setState({ displayedInstallationIndex: 0 })
          : this.setState({
              displayedInstallationIndex:
                this.state.displayedInstallationIndex + 1,
            });
      } else {
        this.state.displayedInstallationIndex === 0
          ? this.setState({
              displayedInstallationIndex: currentInstallations.length - 1,
            })
          : this.setState({
              displayedInstallationIndex:
                this.state.displayedInstallationIndex - 1,
            });
      }
    };

    return (
      <div id="carousel">
        <div className="arrows left" onClick={() => changeInstallation(false)}>
          <div className="leftArrow"></div>
        </div>

        <div id="installation">
          <InstallationContent installation={currentInstallation.shapes} />
          <Poetry
            url={currentInstallation.poemUrl}
            id={currentInstallation.poemId}
          />
        </div>
        <Audio audioUrl={currentInstallation.audioUrl} />
        <div className="arrows right" onClick={() => changeInstallation(true)}>
          <div className="rightArrow"></div>
        </div>
        <div id="artInfo">
          <InstallationInfo
            installationTitle={currentInstallation.title}
            year={currentInstallation.year}
            artist={currentInstallation.artist}
          />
        </div>

        <Fav installation={currentInstallation} />
      </div>
    );
  }
}

export default Carousel;
