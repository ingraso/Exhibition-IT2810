import {
  allInstallations,
  Installation,
} from "../../installations/installations";

export let filteredInstallations: Installation[] = allInstallations;

/**
 * InstallationFilter checks if a tag is in the tags-list in sessionStorage.
 * If it is, it removes the tag from the list, otherwise the tag is added.
 * filteredInstallations is then updated.
 * @param new_tag is a string that should be removed or added to the list of filtered tags.
 */

export const InstallationFilter = (new_tag: string) => {
  if (window.sessionStorage.getItem("tags") === null) {
    window.sessionStorage.setItem("tags", JSON.stringify([]));
  }

  let tags: string[] = JSON.parse(window.sessionStorage.getItem("tags")!!);

  if (tags.includes(new_tag)) {
    tags = tags.filter((tag) => tag !== new_tag);
    window.sessionStorage.setItem("tags", JSON.stringify(tags));
  } else {
    tags.push(new_tag);
    window.sessionStorage.setItem("tags", JSON.stringify(tags));
  }
  updateFilteredInstallations();
};

/**
 * updateFilteredInstallations updates the list of installations to be shown,
 * based on which tags is in the "tags" list in sessionStorage.
 */

export const updateFilteredInstallations = () => {
  if (window.sessionStorage.getItem("tags") === null) {
    window.sessionStorage.setItem("tags", JSON.stringify([]));
  }

  let tags: string[] = JSON.parse(window.sessionStorage.getItem("tags")!!);
  if (tags.length > 0) {
    filteredInstallations = allInstallations.filter((installation) =>
      installation.tags.some((tag) => tags.includes(tag))
    );
  } else {
    filteredInstallations = allInstallations;
  }
};

/**
 * tagIsChosen returns whether or not the specified tag is in
 * the "tags" list in sessionStorage.
 * @param tag is the string that is being searched for.
 */

export const tagIsChosen = (tag: string) => {
  if (window.sessionStorage.getItem("tags") === null) {
    return false;
  }
  return JSON.parse(window.sessionStorage.getItem("tags")!!).includes(tag);
};
