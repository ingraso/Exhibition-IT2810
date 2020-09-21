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
import { Fav, favoriteInstallationIds } from "../Favorite/favorite";
import {filteredInstallations, updateFilteredInstallations} from "../InstallationFilter/installationFilter";

interface CarouselState {
  displayedInstallationIndex: number;
}

interface CarouselProps {
  displayOnlyFavorites: Boolean;
  changeDisplay: Boolean;
}

let currentInstallations = filteredInstallations;

function indexFromSessionStorage(sessionStorageKey: string) {
  const carouselIndex = sessionStorage.getItem(sessionStorageKey) || 0;
  return Number(carouselIndex);
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      displayedInstallationIndex: indexFromSessionStorage("carouselIndex"),
    };
  }

  render() {
    updateFilteredInstallations();
    if (this.props.displayOnlyFavorites) {
      currentInstallations = favoriteInstallationIds.map(
        (favInstallationId) =>
          allInstallations.filter((inst) => inst.id === favInstallationId)[0]
      );
    } else {
      currentInstallations = filteredInstallations;
    }

    const currentInstallation =
      currentInstallations[this.state.displayedInstallationIndex];

    const changeInstallation = (next: Boolean) => {
      if (next) {
        this.state.displayedInstallationIndex ===
        currentInstallations.length - 1
          ? this.setState({ displayedInstallationIndex: 0 }, () => {
              sessionStorage.setItem(
                "carouselIndex",
                String(this.state.displayedInstallationIndex)
              );
            })
          : this.setState(
              {
                displayedInstallationIndex:
                  this.state.displayedInstallationIndex + 1,
              },
              () => {
                sessionStorage.setItem(
                  "carouselIndex",
                  String(this.state.displayedInstallationIndex)
                );
              }
            );
      } else {
        this.state.displayedInstallationIndex === 0
          ? this.setState(
              {
                displayedInstallationIndex: currentInstallations.length - 1,
              },
              () => {
                sessionStorage.setItem(
                  "carouselIndex",
                  String(this.state.displayedInstallationIndex)
                );
              }
            )
          : this.setState(
              {
                displayedInstallationIndex:
                  this.state.displayedInstallationIndex - 1,
              },
              () => {
                sessionStorage.setItem(
                  "carouselIndex",
                  String(this.state.displayedInstallationIndex)
                );
              }
            );
      }
    };

    if (currentInstallation.id in favoriteInstallationIds) {
      document.getElementById("favoriteButton")!!.innerHTML =
        "Remove from favorites";
    } else {
      document.getElementById("favoriteButton")!!.innerHTML =
        "Add to favorites";
    }

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
