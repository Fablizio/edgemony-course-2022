const query = (selector) => document.querySelector(selector);
const Button = document.querySelector("#button");


document.addEventListener("DOMContentLoaded", () => {
    const form = query("#form");
    render(form, data);
});

const render = (container, items) => {
    const elements = items.map(
        (element) => {
            if (element.completed === true) {
                return `<label for="search">  ${element.title} <input type="checkbox" checked /></label>`
            } else {
                return `<label for="search">  ${element.title} <input type="checkbox"/></label> `
            }
        }
    );
    const output = elements.join(" ");
    Button.addEventListener("click", () => {
        elements.pop("")
        const output = elements.join(" ");
        container.innerHTML = output;
    });
    container.innerHTML = output;
};