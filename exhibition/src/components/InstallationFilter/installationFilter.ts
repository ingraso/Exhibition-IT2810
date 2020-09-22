import {
  allInstallations,
  Installation,
} from "../../installations/installations";

export let filteredInstallations: Installation[] = allInstallations;

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

export const updateFilteredInstallations = () => {
  if (window.sessionStorage.getItem("tags") === null) {
    window.sessionStorage.setItem("tags", JSON.stringify([]));
  }

  let tags: string[] = JSON.parse(window.sessionStorage.getItem("tags")!!);
  if (tags.length > 0) {
    filteredInstallations = allInstallations.filter((installation) =>
      installation.tags.some((tag) => tags.includes(tag))
    );
  }
  else {
    filteredInstallations = allInstallations;
  }
};
