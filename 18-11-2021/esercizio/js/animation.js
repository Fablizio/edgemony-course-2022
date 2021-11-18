
const W = document.querySelector(".W");
const A = document.querySelector(".A");
const S = document.querySelector(".S");
const D = document.querySelector(".D");
const box = document.querySelector(".box");


S.addEventListener("click", () => {
    box.classList.add("A");
    setTimeout(() => {
        box.classList.remove("A");
    }, 1000);
}
   
);
