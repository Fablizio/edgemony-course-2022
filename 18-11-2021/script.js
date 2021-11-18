document.addEventListener("DOMContentLoaded", () => {
  // Cambio il font size di un paragrafo modificando il valore di una input numerica
  const resize = document.querySelector(".resize");
  const input = document.querySelector("input");

  input.addEventListener(
    "change",
    () => (resize.style.fontSize = input.value + "px")
  );

  // const interval = setInterval(() => {
  //   console.log("hello chiara");
  // }, 1000);

  // Assegno un'animazione di Animate.css a un elemento al click
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    const animation = "animate__rubberBand";
    btn.classList.add(animation);
    setTimeout(() => {
      btn.classList.remove(animation);
    }, 1000);

    // clearInterval(interval);
  });
});
