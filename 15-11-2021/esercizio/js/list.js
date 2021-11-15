import {render} from "./utilis.js";

const list = (data) => {
    const elements = data
        .map((item) => `<li><input type="checkbox" ${item.completed ? 'checked':""} />${item.title}  </li>`)
        .join("");

    const container = document.querySelector("#container");
    render(
        container,
        `
    <p>Elenco todos</p>
    <ul>${elements}</ul>`
    );
};

export {list};