// "use strict";
const data = JSON.parse(dataBase);
const contentBoxEl = document.querySelector(".content-box");

data.forEach((element) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  const imgItemDivEl = document.createElement("div");
  imgItemDivEl.classList.add("img-item-div");
  const imgItemEl = document.createElement("img", ".img-item:hover");
  imgItemEl.classList.add("img-item");
  imgItemEl.src = element.img;
  imgItemEl.alt = element.name;
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
  itemEl.appendChild(contItemDivEl);
  contItemDivEl.appendChild(headItemEl);
  contItemDivEl.appendChild(descrItemEl);
  contItemDivEl.appendChild(priceItemEl);
});
