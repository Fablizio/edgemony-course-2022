import {API} from "./utilis.js";
import {list} from "./list.js";
import {add} from "./add.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => list(data));

  const btn = document.querySelector("#add");
  btn.addEventListener("click", add);
});