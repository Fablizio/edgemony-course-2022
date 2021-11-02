
// [] rappresenta un array vuoto
// ogni valore è separato da una virgola ,
const names = ["mickey", "donald", "goofy"]; 

console.log("Array completo:", names);
// Posso leggere e scrivere un singolo valore all'interno di un array
// con la sintassi: array[index]
console.log("Primo elemento nell'array:", names[0]);

console.log("Numero di elementi nell'array:", names.length);

// const collection = ["pippo", 42, true]

names[0] = "bugs bunny";
console.log("Array completo prima del push:", names);

names.push('mickey');
console.log("Array completo dopo il push:", names);

// Creo un nuovo array che contiene un elemento in più, preservando
// l'array originale
const newNames = names.concat(['rick']);

names.forEach((element, index) => {
  console.log(element, index);
  names[index] = element.toLocaleUpperCase();
});

console.log("Dopo il forEach:", names);

