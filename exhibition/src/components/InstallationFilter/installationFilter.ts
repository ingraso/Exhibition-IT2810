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
  checkSessionStorage();

  let tags: string[] = JSON.parse(
    window.sessionStorage.getItem("notAppliedTags")!!
  );

  if (tags.includes(new_tag)) {
    tags = tags.filter((tag) => tag !== new_tag);
    window.sessionStorage.setItem("notAppliedTags", JSON.stringify(tags));
  } else {
    tags.push(new_tag);
    window.sessionStorage.setItem("notAppliedTags", JSON.stringify(tags));
  }
};

/**
 * updateFilteredInstallations updates the list of installations to be shown,
 * based on which tags is in the "tags" list in sessionStorage.
 */

export const updateFilteredInstallations = () => {
  checkSessionStorage();

  let tags: string[] = JSON.parse(window.sessionStorage.getItem("tags")!!);

  if (tags.length > 0) {
    filteredInstallations = allInstallations.filter(
      (installation) =>
        installation.tags.every((tag) => tags.includes(tag)) &&
        tags.includes(installation.artist)
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
  checkSessionStorage();
  return JSON.parse(window.sessionStorage.getItem("notAppliedTags")!!).includes(
    tag
  );
};

/**
 * applyFilters changes the "tags" list in storage to reflect the desired tags, then calls updateFilteredInstallations().
 */

export const applyFilters = () => {
  window.sessionStorage.setItem(
    "tags",
    window.sessionStorage.getItem("notAppliedTags")!!
  );
  updateFilteredInstallations();
};

/**
 * applyPossible returns whether or not the chosen tags would result in a non-empty list of installations.
 */

export const applyPossible = () => {
  checkSessionStorage();
  let tags: string[] = JSON.parse(
    window.sessionStorage.getItem("notAppliedTags")!!
  );
  if (tags.length > 0) {
    return (
      allInstallations.filter(
        (installation) =>
          installation.tags.every((tag) => tags.includes(tag)) &&
          tags.includes(installation.artist)
      ).length > 0
    );
  }
  return false;
};

/**
 * checkSessionStorage stores all tags in session storage, if there is no stored "tags" item already.
 */

const checkSessionStorage = () => {
  if (window.sessionStorage.getItem("tags") === null) {
    let allTags = allInstallations
      .map((installation) => installation.tags)
      .flat(1)
      .concat(allInstallations.map((installation) => installation.artist));
    allTags = allTags.filter((tag, index) => allTags.indexOf(tag) === index);
    window.sessionStorage.setItem("tags", JSON.stringify(allTags));
    window.sessionStorage.setItem("notAppliedTags", JSON.stringify(allTags));
  }
};
