import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/filterCheckbox";

interface FilterGroupProps {
  divId: string;
  groupName: string;
}

class FilterGroup extends React.Component<FilterGroupProps, {}> {
  render() {
    let groupContent;
    if (this.props.groupName === "Palette") {
      groupContent = (
        <>
          <FilterCheckbox
            divId="filter1"
            id="darkCheckbox"
            name="dark_filter"
            tag="Dark"
          />
          <FilterCheckbox
            divId="filter2"
            id="lightCheckbox"
            name="light_filter"
            tag="Light"
          />
          <FilterCheckbox
            divId="filter3"
            id="colorfulCheckbox"
            name="colorful_filter"
            tag="Colorful"
          />
        </>
      );
    } else if (this.props.groupName === "Shapes") {
      groupContent = (
        <>
          <FilterCheckbox
            divId="filter4"
            id="CirclesCheckbox"
            name="circles_filter"
            tag="Circles"
          />
          <FilterCheckbox
            divId="filter5"
            id="rectanglesCheckbox"
            name="rect_filter"
            tag="Rectangles"
          />
          <FilterCheckbox
            divId="filter6"
            id="complexCheckbox"
            name="complex_filter"
            tag="Complex"
          />
        </>
      );
    } else if (this.props.groupName === "Artist") {
      groupContent = (
        <>
          <FilterCheckbox
            divId="filter7"
            id="cassattCheckbox"
            name="cassatt_filter"
            tag="Mary Cassatt"
          />
          <FilterCheckbox
            divId="filter8"
            id="kinsonCheckbox"
            name="kinson_filter"
            tag="Milly Kinson"
          />
          <FilterCheckbox
            divId="filter9"
            id="crowCheckbox"
            name="crow_filter"
            tag="A Literal Crow"
          />
        </>
      );
    }

    return (
      <div id={this.props.divId}>
        <h4>{this.props.groupName}:</h4>
        {groupContent}
      </div>
    );
  }
}

export default FilterGroup;
