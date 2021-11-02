
// Creo un oggetto vuoto con {}

const movie = { 
  title: "Free Guy", 
  year: 2021,
  director: "Shaun Levy",
  cast: ["Ryan Raynolds", "Jodie Comer"],
  details: {
    cameos: true,
    isFunny: true,
    realistic: false
  },
  genre: "comedy",
  duration: 115,
};

console.log('Oggetto:', movie);
console.log('Singola chiave:', movie.title);
console.log('Singola chiave annidata:', movie.details.cameos);
console.log('Singolo array annidata:', movie.cast[0]);

// movie.director = "Shaun Levy";

console.log('Oggetto:', movie);