const hamburger = document.querySelector(".burger img");
const navbar = document.querySelector(".navbar-toggle");
const cartContainer = document.querySelector(".cart-container");
const itemsNumber = document.createElement("span");
itemsNumber.className = "cartTotal";
hamburger.addEventListener("click", () => {
  if (navbar.style.display === "") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "";
  }
});

window.addEventListener("resize", () => {
  const test = window.innerWidth;
  if (test >= 800) {
    navbar.style.display = "";
  }
});

const articlesLocalStorage = localStorage;

cartContainer.appendChild(itemsNumber);

let keys = Object.keys(articlesLocalStorage);
let num = 0;
for (let key of keys) {
  if (key != "sum") {
    num += Number(articlesLocalStorage.getItem(key));
  }
}
itemsNumber.innerHTML = num;
