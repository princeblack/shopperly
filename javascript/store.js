import items from "./items.js";


const itemsContainer = document.querySelector(".storeItems");
const itemsList = items.map((item, index) => {
  const content = document.createElement("div");
  content.classList.add("itemBox");
  const storeItems = `<div class="storeItem">
        <div class="itemImage">
            <img src="${item.image[0]} "alt="${item.title}"></img>
        </div>
        <div class="itemInfo">
            <a href="../component/item.html?id=${item.id}">
                <h3>${item.title}</h3>
             </a>
            <p><span>$</span>${item.price}</p>
        </div>
    </div>`;
  content.innerHTML = storeItems;
  itemsContainer.appendChild(content);
});

