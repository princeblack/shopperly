import items from "./items.js";

const articleStorage = window.localStorage;
articleStorage.setItem("sum", 0);

const shopingCartContainer = document.querySelector(".shopingCart");
if (articleStorage.length <= 0) {
  const emptyContaire = document.createElement("div");
  emptyContaire.className = "empty";
  emptyContaire.innerHTML = `
        <h2>Your Shopperly cart is empty.</h2>
        <img src="../image/empty.svg"></img>
    `;
  shopingCartContainer.appendChild(emptyContaire);
} else {
  const container = document.createElement("div");
  container.className = "container";

  const topInfo = document.createElement("h2");
  topInfo.innerHTML = "My shopping cart";

  const articleContainer = document.createElement("div");
  articleContainer.className = "articleContainer";

  container.appendChild(topInfo);
  container.appendChild(articleContainer);
  shopingCartContainer.appendChild(container);

  let keys = Object.keys(articleStorage);

  let rs = [];
  const newItems = items.filter((item) => {
    if (keys.includes(item.id)) {
      let match = {
        number: articleStorage.getItem(item.id),
        item: item,
      };
      rs.push(match);
      return rs;
    }
    return rs;
  });

  const articleItems = rs.map((article, index) => {
    let localSum = Number(articleStorage.getItem("sum"));
    const total = Number(article.number) * Number(article.item.price);
    const sum = (localSum += total);
    localStorage.setItem("sum", sum);
    return `<div key=${article.item.id} class="item">
        <div class="itemImage">
        <img
            class="front-img"
            src="${article.item.image[0]} "
            alt="${article.item.title}"
        ></img>
        </div>
        <div class="itemInfo">
            <h3>${article.item.title}</h3>
            <div>
                <span>$</span>
                <p>${article.item.price}</p>
            </div>
        </div>
        <div class="actionContainer">
            <div class="action">
                <img class="remove" src="../image/remove.svg"></img>
                <p>${article.number}</p>
                <img class="add" src="../image/add.svg"></img>
            </div>
            <div class="total">
                <span>Total:</span>
                <p class="totalPrice">
                <span>$ ${total.toFixed(2)}</span>
                </p>
            </div>
            <div class="delete">
                <button>Remove</button>
            </div>
        </div>
    </div>`;
  });

  const articleBox = document.createElement("div");
  articleBox.className = "articleBox";
  const joinArticleItems = articleItems.join(" ");
  articleBox.innerHTML = joinArticleItems;
  articleContainer.appendChild(articleBox);

  // Shopping cart validation
  const boxValidation = document.createElement("div");
  boxValidation.className = "boxValidation";

  let localSum = Object.keys(articleStorage);
  let newNum = 0;
  for (let key of localSum) {
    if (key === "sum") {
      newNum = Number(articleStorage.getItem(key)).toFixed(2);
    }
  }

  const shoppongCartBox = `
    <div class="containerCart">
        <div class="amount">
            <p>BASKET AMOUNT</p>
        </div>
        <div class="sumTotalCart">
            <p>TOTAL</p>
            <div>
                <span>$</span>
                <p>${newNum}</p>
            </div>
        </div>
        <div class="buyButtonContainer">
            <div class="buyButton">
                <img src="../image/store.svg"></img>
                <p>Buy now</p>
            </div>
        </div>
    </div>
  `;

  boxValidation.innerHTML = shoppongCartBox;

  articleContainer.appendChild(boxValidation);

  //  more article or less

  const allItems = document.querySelectorAll(".item");

  for (let i = 0; i < allItems.length; i++) {
    const id = allItems[i].getAttribute("key");
    const remove = allItems[i].querySelector(".remove");
    const add = allItems[i].querySelector(".add");
    const deletItem = allItems[i].querySelector(".delete button");

    const value = allItems[i].querySelector(".action p");
    const totalValueSpan = allItems[i].querySelector(".totalPrice span");
    const itemFixPrice = allItems[i].querySelector(".itemInfo div p");

    // get the cart container
    const itemsNumber = document.querySelector(".cartTotal");

    // get total sum container
    const basket = document.querySelector(".sumTotalCart div p");

    deletItem.addEventListener("click", () => {
      articleStorage.removeItem(id);
      let totalArray = totalValueSpan.innerHTML.substr(1).split(".");
      const value1 = totalArray[0];
      const value2 = totalArray[1].substr(0, 2);
      let newValue = Number(value1 + "." + value2);
      //  localStorage sum
      let storageSum = Number(articleStorage.getItem("sum"));
      const newStoragevalue = (storageSum -= newValue);
      articleStorage.setItem("sum", newStoragevalue);
      basket.innerHTML = newStoragevalue.toFixed(2);
      let keys = Object.keys(articleStorage);
      let num = 0;
      for (let key of keys) {
        if (key != "sum") {
          num += Number(articleStorage.getItem(key));
        }
      }
      itemsNumber.innerHTML = num;
      allItems[i].remove()
    });

    //  add more items
    add.addEventListener("click", () => {
      // debugger;
      let totalArray = totalValueSpan.innerHTML.substr(1).split(".");
      const value1 = totalArray[0];
      const value2 = totalArray[1].substr(0, 2);
      let newValue = Number(value1 + "." + value2);
      const fixprice = Number(itemFixPrice.innerHTML);

      let currentValue = Number(value.innerHTML);
      let sum = (newValue += fixprice);
      let sumArray = sum.toString().split(".");

      const sumValue1 = sumArray[0];
      const sumValue2 = sumArray[1].substr(0, 2);
      const totalSum = Number(sumValue1 + "." + sumValue2).toFixed(2);

      currentValue += 1;
      value.innerHTML = currentValue;
      articleStorage.setItem(id, currentValue);
      totalValueSpan.innerHTML = `$ ${totalSum}`;

      //  localStorage sum
      let storageSum = Number(articleStorage.getItem("sum"));
      const newStoragevalue = (storageSum += fixprice);
      articleStorage.setItem("sum", newStoragevalue);
      basket.innerHTML = newStoragevalue.toFixed(2);
      currentValue = 0;

      let keys = Object.keys(articleStorage);
      let num = 0;
      for (let key of keys) {
        if (key != "sum") {
          num += Number(articleStorage.getItem(key));
        }
      }
      itemsNumber.innerHTML = num;
    });

    //   remove items
    remove.addEventListener("click", () => {
      let totalArray = totalValueSpan.innerHTML.substr(1).split(".");
      const value1 = totalArray[0];
      const value2 = totalArray[1].substr(0, 2);
      let newValue = Number(value1 + "." + value2);
      const fixprice = Number(itemFixPrice.innerHTML);

      let currentValue = Number(value.innerHTML);
      let sum = (newValue -= fixprice);
      let sumArray = sum.toString().split(".");

      const sumValue1 = sumArray[0];
      const sumValue2 = sumArray[1].substr(0, 2);
      const totalSum = Number(sumValue1 + "." + sumValue2).toFixed(2);

      if (currentValue > 1) {
        currentValue -= 1;
        value.innerHTML = currentValue;
        articleStorage.setItem(id, currentValue);
        totalValueSpan.innerHTML = `$ ${totalSum}`;
        //  localStorage sum
        let storageSum = Number(articleStorage.getItem("sum"));
        const newStoragevalue = (storageSum -= fixprice);
        articleStorage.setItem("sum", newStoragevalue);
        basket.innerHTML = newStoragevalue.toFixed(2);
        currentValue = 0;
        let keys = Object.keys(articleStorage);
        let num = 0;
        for (let key of keys) {
          if (key != "sum") {
            num += Number(articleStorage.getItem(key));
          }
        }
        itemsNumber.innerHTML = num;
      }
    });
  }
}
