# Lezione del 03 Novembre 2021

### Requisiti widget:
* Visualizzare una lista di contatti in pagina
* Cercare per nome
* Annullare la ricerca e tornare allo stato originale

### File presenti:
* `index.html` - marcatura base widget
* `data.js` - lista dei contatti descritta in array di oggetti
* `index.js` - file JS principale
* `style.css` - stili widget

### Esercizi:
Dato il seguente JSON:
```json
[
  {
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "title": "et porro tempora",
    "completed": true
  },
  {
    "title": "laboriosam mollitia et enim quasi adipisci quia providen  illum",
    "completed": false
  },
  {
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]
```
renderizzare questi dati in una pagina HTML con Javascript, utilizzando un [input di tipo `checkbox`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) per rappresentare il campo `completed` (vuoto se `false`, flaggato se `true`).

Esempio del risultato:
![_docs/preview.png](_docs/preview.png)

**Opzionale:** aggiungere un pulsante che al click rimuove l'ultimo elemento della lista con il metodo `.pop()` aggiornando il render in pagina.