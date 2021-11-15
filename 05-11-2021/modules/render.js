export const render = (container, items) => {

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