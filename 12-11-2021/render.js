import { getData, saveData } from "./data.js";

const update = (event) => {
  const id = parseInt(event.target.id);
  const newData = getData().map((item) => {
    if (item.id === id) {
      // { ...item, completed: !item.completed }
      // crea un nuovo oggetto basandosi sul primo e aggiunge o sovrascrive
      // le proprietà elencate successivamente
      return { ...item, completed: !item.completed };
    } else {
      return item;
    }
  });

  // Salviamo i dati nello stato locale (localStorage per ora) e invochiamo
  // nuovamente il render con i dati aggiornati
  saveData(newData);
  render(newData);
};

export const render = (data) => {
  const todos = document.querySelector("#todos");

  const items = data.map(
    (item) =>
      `<li><label><input 
      type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
    /> ${item.title}</label></li>`
  );

  todos.innerHTML = items.join("");

  // [...NodeList] converte una NodeList in Array
  const lis = [...todos.querySelectorAll("input")];
  lis.forEach((item) => {
    item.addEventListener("click", update);
  });
};
