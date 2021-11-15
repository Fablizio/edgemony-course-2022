
// Importazione di dati o funzioni da moduli JS
import { data } from './data.js';
import { q } from './query.js';
import { render } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  const input = q('form input');
  const list = q('ul');

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
  });
});