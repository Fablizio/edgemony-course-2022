/**
 * Wraps the document.querySelector method
 */
const q = (selector) => document.querySelector(selector);


const render = (container, items) => {

  /* 
  VERSIONE ALTERNATIVA
  const elements = items
    .sort(sortinfFunction)
    .map(mappingFunction)
    .join('')
  */

  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(items);

  const elements = items.map((element) => 
    `<li>
      <h3>${element.name}</h3>
      <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
    </li>`
  );
  
  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = q('form');
  const input = q('form input');
  const list = q('ul');

  // Seleziono la seconda form (quella di creazione utente)
  const add = q('#add');
  
  render(list, data);

  input.addEventListener('keyup', (event) => {
    const value = input.value.toLowerCase();

    const results = data.filter((element) => 
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
  });

  add.addEventListener('submit', (event) => {
    event.preventDefault();

    const newContact = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    };

    data.push(newContact);

    render(list, data);

    add.reset();
    // event.target.reset()
  });
});