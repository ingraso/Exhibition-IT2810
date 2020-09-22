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

  /*if (tags.some((tag) => tag === new_tag)) {
        filteredInstallations.filter((installation) => installation.tags.every((tag) => tag !== new_tag));
        tags.filter((tag) => tag !== new_tag);
        window.sessionStorage.setItem("tags", JSON.stringify(tags));
    } else {
        filteredInstallations.concat(allInstallations.filter((installation) => installation.tags.some((tag) => tag === new_tag)));
        filteredInstallations.filter((installation, index) => filteredInstallations.indexOf(installation) === index);
        tags.concat(new_tag);
        window.sessionStorage.setItem("tags", JSON.stringify(tags));
    }*/

  if (tags.some((tag) => tag === new_tag)) {
    tags.filter((tag) => tag !== new_tag);
    window.sessionStorage.setItem("tags", JSON.stringify(tags));
  } else {
    tags.concat(new_tag);
    window.sessionStorage.setItem("tags", JSON.stringify(tags));
  }
  updateFilteredInstallations();

  console.log(tags);
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
  console.log(tags);
};
