/**
 * Wraps the document.querySelector method
 */
const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
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
  const form2 = q('#AddForm');
  const nome = q('#nome');
  const mail = q('#mail');
  const telefono = q('#telefono');

  render(list, data);

  // VERSIONE ORIGINALE CON IL SUBMIT
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const value = input.value.toLowerCase();

  //   const results = data.filter((element) => 
  //     element.name.toLowerCase().search(value) > -1);

  //   render(list, results);
  // });

  input.addEventListener('keyup', (event) => {
    const value = input.value.toLowerCase();

    const results = data.filter((element) =>
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
  });

  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser = {
      name: nome.value,
      phone: telefono.value,
      email: mail.value,
    }

    data.push(newUser);

    render(list, data);

    form2.reset ()
  });

});

