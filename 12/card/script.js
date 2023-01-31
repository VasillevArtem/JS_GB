const data = JSON.parse(dataProducts);
console.log(data);

data.forEach((element) => {
  const productBoxEl = document.querySelector(".product-box");

  const productEl = document.createElement("div");
  productEl.classList.add("product", "flex-box");
  const photoEl = document.createElement("div");
  photoEl.classList.add("photo");
  const imgEl = document.createElement("img");
  imgEl.src = element.img;
  imgEl.alt = element.name;
  const descriptionEl = document.createElement("div");
  descriptionEl.classList.add("description");
  const headEl = document.createElement("div");
  headEl.classList.add("head");
  const productHeaderEl = document.createElement("div");
  productHeaderEl.classList.add("product-header");
  const hdrEl = document.createElement("h3");
  hdrEl.classList.add("hdr");
  hdrEl.textContent = element.name;
  const closerEl = document.createElement("div");
  closerEl.classList.add("closer");
  const btnEl = document.createElement("button");
  btnEl.textContent = "X";

  const contentEl = document.createElement("div");
  contentEl.classList.add("content");  

  const pricePar = document.createElement("p");
  pricePar.classList.add("price");
  const priceKS = document.createElement("span");
  priceKS.classList.add("price-key");
  priceKS.textContent = "Price: ";
  const priceVS = document.createElement("span");
  priceVS.classList.add("price-value");
  priceVS.textContent = element.Price;

  const colorPar = document.createElement("p");
  colorPar.classList.add("color");
  const colorKS = document.createElement("span");
  colorKS.classList.add("color-key");
  colorKS.textContent = "Color: ";
  const colorVS = document.createElement("span");
  colorVS.classList.add("color-value");
  colorVS.textContent = element.Color;

  const sizePar = document.createElement("p");
  sizePar.classList.add("size");
  const sizeKS = document.createElement("span");
  sizePar.classList.add("size-key");
  sizePar.textContent = "Size: ";
  const sizeVS = document.createElement("span");
  sizeVS.classList.add("size-value");
  sizeVS.textContent = element.Size;

  const quanPar = document.createElement("p");
  quanPar.classList.add("quan");
  const quanKS = document.createElement("span");
  quanPar.classList.add("quan-key");
  quanPar.textContent = "Quantity: ";
  const quanVS = document.createElement("span");
  quanVS.classList.add("quan-value");
  quanVS.textContent = element.Quantity;

  productBoxEl.appendChild(productEl);
  productEl.appendChild(photoEl);
  photoEl.appendChild(imgEl);
  productEl.appendChild(descriptionEl);
  descriptionEl.appendChild(headEl);
  headEl.appendChild(productHeaderEl);
  headEl.appendChild(closerEl);
  closerEl.appendChild(btnEl);
  productHeaderEl.appendChild(hdrEl);
  descriptionEl.appendChild(contentEl);

  contentEl.appendChild(pricePar);
  pricePar.appendChild(priceKS);
  pricePar.appendChild(priceVS);

  contentEl.appendChild(colorPar);
  colorPar.appendChild(colorKS);
  colorPar.appendChild(colorVS);

  contentEl.appendChild(sizePar);
  sizePar.appendChild(sizeKS);
  sizePar.appendChild(sizeVS);

  contentEl.appendChild(quanPar);
  quanPar.appendChild(quanKS);
  quanPar.appendChild(quanVS);

  closerEl.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
  });
});
