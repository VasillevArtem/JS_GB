const data = JSON.parse(dataBase);
const contentBoxEl = document.querySelector(".content-box");
const cardItemsEl = document.querySelector(".card-items");

data.forEach((element) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  const imgItemDivEl = document.createElement("div");
  imgItemDivEl.classList.add("img-item-div");
  const imgItemEl = document.createElement("img");
  imgItemEl.classList.add("img-item");
  imgItemEl.src = element.img;
  imgItemEl.alt = element.name;

  const btnDivEl = document.createElement("div");
  btnDivEl.classList.add("btn-div");
  const btnAddToCart = document.createElement("div");
  btnAddToCart.classList.add("btn-add-to-cart");
  const headCardItemsEl = document.createElement("h3");
  headCardItemsEl.classList.add("head-card-items");
  headCardItemsEl.textContent = "Cart Items";

  const contItemDivEl = document.createElement("div");
  contItemDivEl.classList.add("cont-item-div");
  const headItemEl = document.createElement("h3");
  headItemEl.classList.add("head-item");
  headItemEl.textContent = element.name;
  const descrItemEl = document.createElement("p");
  descrItemEl.classList.add("descr-item");
  descrItemEl.textContent = element.description;
  const priceItemEl = document.createElement("p");
  priceItemEl.classList.add("price-item");
  priceItemEl.textContent = element.price;

  contentBoxEl.appendChild(itemEl);
  itemEl.appendChild(imgItemDivEl);
  imgItemDivEl.appendChild(imgItemEl);
  imgItemDivEl.appendChild(btnDivEl);
  btnDivEl.appendChild(btnAddToCart);

  itemEl.appendChild(contItemDivEl);
  contItemDivEl.appendChild(headItemEl);
  contItemDivEl.appendChild(descrItemEl);
  contItemDivEl.appendChild(priceItemEl);
});
