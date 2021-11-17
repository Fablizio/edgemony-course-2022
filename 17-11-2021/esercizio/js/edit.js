import { render, API } from "./utils.js";

const Edit = (id = 0) => {
  const resource = `${API}/${id}`;

  // GET della singola risorsa che ci interessa
  fetch(resource)
    .then((response) => response.json())
    .then((movie) => {
      // Renderizzo il template
      const container = document.querySelector("#container");
      render(
        container,
        `<div>
          <h3>Modifica una scheda</h3>
          <form id="create">
            <div class="row">
              <label for="title">Titolo:</label>
              <input type="text" id="title" name="title" 
                value="${movie.title}" />
            </div>
  
            <div class="row">
              <label for="poster">Poster:</label>
              <input type="text" id="poster" name="poster"
                value="${movie.poster}" />
            </div>
  
            <div class="row">
              <label for="year">Anno:</label>
              <input type="number" min="1900"
                value="${movie.year}" id="year" name="year" />
            </div>
  
            <div class="row">
              <label for="description">Descrizione:</label>
              <textarea id="description" name="description">${movie.description}</textarea>
            </div>
      
            <button>Aggiorna scheda</button>
          </form>
      
          <a href="#" id="back">Torna alla home</a>
        </div>`
      );

      // Gestisco il submit della form
      const form = document.querySelector("#create");
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const updatedMovie = {
          title: event.target.title.value,
          poster: event.target.poster.value,
          year: parseInt(event.target.year.value),
          description: event.target.description.value,
        };

        console.log(updatedMovie);

        fetch(resource, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMovie),
        })
          .then((response) => response.json())
          .then(() => (location.hash = ""));
      });
    });
};

export { Edit };
