import React from "react";
import {
  InstallationFilter,
  tagIsChosen,
} from "../InstallationFilter/installationFilter";

const filterCheckboxClick = (new_tag: string) => {
  InstallationFilter(new_tag);
};

export const FilterCheckbox = ({
  divId,
  id,
  name,
  tag,
}: {
  divId: string;
  id: string;
  name: string;
  tag: string;
}) => {
  return (
    <div id={divId}>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={() => filterCheckboxClick(tag)}
        defaultChecked={tagIsChosen(tag)}
      />
      <label htmlFor={id}> {tag} </label>
    </div>
  );
};
