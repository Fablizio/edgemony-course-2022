import { render, API } from "./utils.js";

const View = (id = 0) => {
  console.log(id);

  fetch(`${API}/${id}`)
    .then((response) => response.json())
    .then((movie) => {
      const container = document.querySelector("#container");
      render(
        container,
        `<article>
        <h2>${movie.title}</h2>
        <p>${movie.year}</p>
        <img src="${movie.poster}" />
        <p>${movie.description}</p>
        <hr />
        <a href="#" id="back">Torna alla home</a>
      </article>`
      );
    });
};

export { View };
