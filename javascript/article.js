import items from "./items.js";

const id = window.location.search.substr(4);

const newItems = items.filter((item) => item.id === id);

const articles = newItems.map((item, index) => {
  let image = item.image.map((imgg, i) => {
    return `<img src="${imgg} "alt="${i}"></img>`;
  });

  return `<div class="storeItem">
    <div class="itemImage">
        <img class="front-img" src="${item.image[0]} "alt="${item.title}"></img>
        <div class="otherImage">${image}</div>
    </div>
    <div class="itemInfo">
            <h3>${item.title}</h3>
        <p><span>$</span>${item.price}</p>
    </div>
</div>`;
});

// created item box
const box = document.createElement("div");
box.classList.add("articleBox");
box.innerHTML = articles;
//  add item box to item container
const articleContainer = document.querySelector(".articleContainer");
articleContainer.appendChild(box);

// creat action item
const action = `
    <div class="actionContainer">
        <div class="action">
            <img class="remove" src="../image/remove.svg"></img>
            <p></p>
            <img class="add" src="../image/add.svg"></img>
        </div>
        <div class="total">
            <span>Total</span> 
            <p class="totalPrice"><span>$</span></p> 
        </div>
        <div class="button">
            <button>Add to cart</button>
        </div>
        <div class="info"> 
            <p>suscipit adipiscing</p>
            <ul>
                <li>nisi lacus sed viverra tellus </li>
                <li>sit amet nisl suscipit adipiscing</li>
                <li>accumsan tortor posuere ac ut conse</li>
                <li>odio eu feugiat pretium nibh ipsum consequat</li>
                <li>ullamcorper morbi tincidunt ornare</li>
            </ul>
        </div>
    </div>
`;
const actionBox = document.createElement("div");
actionBox.classList.add("actionBox");
actionBox.innerHTML = action;

const articleAction = document.querySelector(".articleAction");
articleAction.appendChild(actionBox);

// image choise onclick
const image = document.querySelector(".front-img");
const otherItem = document.querySelectorAll(".otherImage img");

for (let index = 0; index < otherItem.length; index++) {
  otherItem[index].addEventListener("click", () => {
    image.src = otherItem[index].src;
  });
}

// add item and remove
const addItem = document.querySelector(".add");
const remove = document.querySelector(".remove");
const price = document.querySelector(".itemInfo p");
const total = document.querySelector(".totalPrice");
const actionInput = document.querySelector(".action p");

let number = 1;
actionInput.innerHTML = number;

let totalPrice = newItems[0].price * number;
total.innerHTML = `<span>$</span>${totalPrice}`;

// total.innerHTML = totalPrice;

//  add more item
addItem.addEventListener("click", () => {
  number += 1;
  actionInput.innerHTML = number;
  const test = JSON.stringify(newItems[0].price * number).split(".");
  const value1 = test[0];
  const value2 = test[1].substr(0, 2);
  const final = ` ${value1}.${value2}`;
  totalPrice = final;
  total.innerHTML = `<span>$</span>${totalPrice}`;
});

//  remove more item
remove.addEventListener("click", () => {
  if (number > 1) {
    number -= 1;
    actionInput.innerHTML = number;
    const test = JSON.stringify(newItems[0].price * number).split(".");
    const value1 = test[0];
    const value2 = test[1].substr(0, 2);
    const final = ` ${value1}.${value2}`;
    totalPrice = final;
    total.innerHTML = `<span>$</span>${totalPrice}`;
  }
});

// add item to localStorage

const articleStorage = window.localStorage;
const button = document.querySelector(".button button");

button.addEventListener("click", () => {
  const getValue = articleStorage.getItem(newItems[0].id);
  if (getValue) {
    const newValue = Number(getValue) + number;
    articleStorage.setItem(newItems[0].id, newValue);
    const cartContainer = document.querySelector(".cartTotal");
    let keys = Object.keys(articleStorage);
    let num = 0;
    for (let key of keys) {
      num += Number(articleStorage.getItem(key));
    }
    cartContainer.innerHTML = num;
  } else {
    articleStorage.setItem(newItems[0].id, number);
    const cartContainer = document.querySelector(".cartTotal");
    let keys = Object.keys(articleStorage)
    let num = 0
    for(let key of keys){
      num += Number(articleStorage.getItem(key))
    }
    cartContainer.innerHTML= num
  }
});

