import { API } from "./utils.js";
import { List } from "./list.js";
import { Add } from "./add.js";

const loadList = () =>
  fetch(API)
    .then((response) => {
      if (response.status === 404) {
        console.error(
          "READ HERE: Could not load remote data, is the server on?"
        );
        document.querySelector(".alert").classList.add("show");
      } else {
        return response.json();
      }
    })
    .then((data) => List(data));

document.addEventListener("DOMContentLoaded", loadList);

window.addEventListener("hashchange", () => {
  //console.log("hash has changed", location.hash);

  switch (location.hash) {
    case "#add":
      Add();
      break;
    case "":
      loadList();
      break;
  }
});
