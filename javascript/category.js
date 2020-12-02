import items from "./items.js";

const catogoryList = document.querySelectorAll(".cat-liste");
const container = document.querySelector(".category-items");

console.log(items);

Array.prototype.random = function (length) {
  return this[Math.floor(Math.random() * length)];
};

var teams = ["patriots", "colts", "jets", "texans", "ravens", "broncos"];
var random = items.random(items.length);
console.log(random);

const [populare, men, women] = catogoryList;

populare.addEventListener("click", () => {
  men.classList.remove("active");
  women.classList.remove("active");
  populare.classList.add("active");
  const populareItems = [];

  for (let i = 0; i < items.length; i++) {
    const product = Math.floor(Math.random() * length);
    console.log(product);
  }

  if (container.hasChildNodes()) {
    container.innerHTML = "";
    const element = `
    <div class="item-container">
        <div class="image-container">
            <img src="./image/shoos/jordan1.jpg" alt=""></img>
        </div>
        <div class="itemInfo">
            <a href="../component/item.html?id=aa0a2b3a-a85e-4830-ad0a-fcf6492a7fe3">
                <h3>Jordan React Elevation</h3>
            </a>
            <span>Mens shoe</span>
            <strong>
                <p>$</p>120.99
            </strong>
        </div>
    </div>
    <div class="item-container">
        <div class="image-container">
            <img src="./image/storeImg/H0faf21d6483d42ffa39873181abeb011R.webp" alt=""></img>
        </div>
        <div class="itemInfo">
            <a href="../component/item.html?id=7fe83b69-e9e1-409b-b8cb-48251800a45a">
                <h3>Floral Ruffled Hem Bikini</h3>
                </a>
            <span>Women Bikini</span>
            <strong>
                <p>$</p>30.99
            </strong>
        </div>
    </div>
    <div class="item-container">
        <div class="image-container">
            <img src="../image/storeImg/HTB19Z1FUrvpK1RjSZFqq6AXUVXaG.webp" alt=""></img>
        </div>
        <div class="itemInfo">
            <a href="../component/item.html?id=f475656e-3bc8-4824-bd29-d85b6f80debe">
                <h3>Shorts Jumpsuit  Bodysuit Playsuit</h3>
            </a>
            <span>Women Shorts</span>
            <strong>
                <p>$</p>25.99
            </strong>
        </div>
    </div>
    <div class="item-container">
        <div class="image-container">
            <img src="./image/storeImg/Hf790587c3f9f44bfb4a299037260d4135.jpg" alt=""></img>
        </div>
        <div class="itemInfo">
            <a href="../component/item.html?id=71193d19-fbe9-45ac-bfef-faf83fafbe18">
                <h3>Men's Jacket Winter Coat Solid </h3>
            </a>
            <span>Mens Jacket</span>
            <strong>
                <p>$</p>59.99
            </strong>
        </div>
    </div>
    `;
    container.innerHTML = element;
  }
});

men.addEventListener("click", () => {
  men.classList.add("active");
  women.classList.remove("active");
  populare.classList.remove("active");

  const element = `
  <div class="item-container">
    <div class="image-container">
        <img src="./image/storeImg/Hf796b694e09e42598b23d23de6a624b1Z.webp" alt=""></img>
    </div>
    <div class="itemInfo">
        <a href="../component/item.html?id=d9a4e7af-287a-4f82-9e55-240a25d88c5a">
            <h3>Men's Casual Shoes Leather Low-Top Sneakers</h3>
        </a>
        <span>Mens shoe</span>
        <strong>
            <p>$</p>69.99
        </strong>
    </div>
    </div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/H909d02329be549bf89dc483a8fa2f04ea.jpg" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=752e1abd-d045-4996-8c01-10e5f66942c4">
          <h3>Hand Made Casual Slip On Men Shoes</h3>
          </a>
      <span>Mens shoe</span>
      <strong>
          <p>$</p>36.99
      </strong>
  </div>
</div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/H02f15a26d45947cd8152a49ccf1049f8V.jpg" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=b5237b78-bed0-41f4-a6ee-cb26db473d5d">
          <h3>Down Jacket Japanese Cartoon Graffiti Print</h3>
      </a>
      <span>Mens jacket</span>
      <strong>
          <p>$</p>114.99
      </strong>
  </div>
</div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/Hfd4abeb237174dcd8bd27136b9803941f.webp" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=0672fbba-b307-40e1-b402-7ce9ceccedbf">
          <h3>Men Cloak Coats Streetwear</h3>
      </a>
      <span>Mens Cloak</span>
      <strong>
          <p>$</p>34.99
      </strong>
  </div>
</div>
`;
  container.innerHTML = element;
});

women.addEventListener("click", () => {
  men.classList.remove("active");
  women.classList.add("active");
  populare.classList.remove("active");
  const element = `
  <div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/H37af75b3d4a64f4391e5b46a83d85cefe.jpg" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=8102decc-0cbb-49ee-ad13-ec30f1c98038">
          <h3>Party Dress Solid Color Knee Length Half Sleeve</h3>
      </a>
      <span>Women Dress</span>
      <strong>
          <p>$</p>99.99
      </strong>
  </div>
</div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/H385357dfeac1405cbdb91413e2720ab1Z.webp" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=8fc5d83e-99fc-47bf-babf-86f0042a3e48">
          <h3>2020 Fashion With Belt Loose Woolen Jacket Coat Vintage</h3>
          </a>
      <span>Women Jacket</span>
      <strong>
          <p>$</p>49.99
      </strong>
  </div>
</div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/H25e45bd26813415aa359150b84066fceK.webp" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=4d1a30de-bf39-4d72-844a-6214b4326928">
          <h3>2020 Fashion knit zip-up sweatshirt high neck zip</h3>
      </a>
      <span>Women sweatshirt</span>
      <strong>
          <p>$</p>54.99
      </strong>
  </div>
</div>
<div class="item-container">
  <div class="image-container">
      <img src="./image/storeImg/HTB19Z1FUrvpK1RjSZFqq6AXUVXaG.webp" alt=""></img>
  </div>
  <div class="itemInfo">
      <a href="../component/item.html?id=f475656e-3bc8-4824-bd29-d85b6f80debe">
          <h3>Shorts Jumpsuit  Bodysuit Playsuit</h3>
      </a>
      <span>Women Bodysuit</span>
      <strong>
          <p>$</p>25.99
      </strong>
  </div>
</div>
`;
  container.innerHTML = element;
});
