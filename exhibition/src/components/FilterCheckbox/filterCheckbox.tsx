import React from "react";
import {
  InstallationFilter,
  tagIsChosen,
  applyPossible
} from "../InstallationFilter/installationFilter";

const filterCheckboxClick = (new_tag: string) => {
  InstallationFilter(new_tag);

  const applyButton = document.getElementById("apply_btn");
    if(applyPossible()) {
      applyButton?.classList.add("allowedButton");
      applyButton?.classList.remove("disabledButton");
    } else {
      applyButton?.classList.remove("allowedButton");
      applyButton?.classList.add("disabledButton");
    }
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
