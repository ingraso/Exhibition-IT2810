import React from "react";

// an array containing all the favorited installations' ids
export let favoriteInstallationIds = [];

interface FavoriteButtonState {
  favoriteIds: Array<Number>;
}

interface FavoriteButtonProps {
  installation: any;
  updateStarCarousel: any;
}

/**
 * FavoriteButton saves the installation's id to HTML
 * localstorage.
 *
 * @var favoriteIds is an array of all the favorited
 *    installations' ids.
 * @var installation contains all info about an
 *    installation, like its id.
 * @var updateStarCarousel is the updateStar function
 *    from carousel.tsx
 */

class FavoriteButton extends React.Component<
  FavoriteButtonProps,
  FavoriteButtonState
> {
  constructor(props: FavoriteButtonProps) {
    super(props);
    this.state = { favoriteIds: [] };
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite = () => {
    if (
      this.state.favoriteIds.some(
        (favorite) => favorite === this.props.installation.id
      )
    ) {
      this.setState(
        {
          favoriteIds: this.state.favoriteIds.filter(
            (favorite) => favorite !== this.props.installation.id
          ),
        },
        () => {
          localStorage.setItem(
            "favoriteIds",
            JSON.stringify(this.state.favoriteIds)
          );
          favoriteInstallationIds = JSON.parse(
            window.localStorage.getItem("favoriteIds")!!
          );
          this.props.updateStarCarousel();
        }
      );
    } else {
      this.setState(
        {
          favoriteIds: this.state.favoriteIds.concat(
            this.props.installation.id
          ),
        },
        () => {
          localStorage.setItem(
            "favoriteIds",
            JSON.stringify(this.state.favoriteIds)
          );
          favoriteInstallationIds = JSON.parse(
            window.localStorage.getItem("favoriteIds")!!
          );
          this.props.updateStarCarousel();
        }
      );
    }
  };

  render() {
    if (window.localStorage.getItem("favoriteIds") !== null) {
      favoriteInstallationIds = JSON.parse(
        window.localStorage.getItem("favoriteIds")!!
      );
    }

    return (
      <button id="starButton" onClick={this.addFavorite}>
        <span id="star" className="">
          {"\u2606"}
        </span>
      </button>
    );
  }
}

export default FavoriteButton;
