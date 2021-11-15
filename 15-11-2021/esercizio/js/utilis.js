const API = "https://edgemony-backend.herokuapp.com/todos";

/**
 * Render some content within a container HTML tag
 */
const render = (container, content) => (container.innerHTML = content);

export {API, render };