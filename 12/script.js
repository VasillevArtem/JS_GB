const data = JSON.parse(dataBase);
const contentBoxElement = document.querySelector(".content-box");
const cardItemsElement = document.querySelector(".card-items");

data.forEach((element) => {
  const itemElementOfDiv = document.createElement("div");
  itemElementOfDiv.classList.add("item");
  const imgItemDivElement = document.createElement("div");
  imgItemDivElement.classList.add("img-item-div");
  const imgItemElement = document.createElement("img");
  imgItemElement.classList.add("img-item");
  imgItemElement.src = element.img;
  imgItemElement.alt = element.name;
  const ArrClassOfP = ["price", "color", "size", "quantity"];
    const ArrClassOfSpanKey = [
      "price-key",
      "color-key",
      "size-key",
      "quantity-key",
    ];
    const ArrContOfSpanKey = ["Price: ", "Color: ", "Size: ", "Quantity: "];
    const ArrClassOfSpanValue = [
      "price-value",
      "color-value",
      "size-value",
      "quantity-value",
    ];
  const butonDivElement = document.createElement("div");
  butonDivElement.classList.add("btn-div");
  const butonAddToCart = document.createElement("button");
  butonAddToCart.classList.add("btn-add-to-cart");
  const btnIElCart = document.createElement("i");
  btnIElCart.classList.add("fas", "fa-light", "fa-cart-shopping", "cart-btn");
  const spanElementForButon = document.createElement("span");
  spanElementForButon.classList.add("for-btn");
  butonAddToCart.appendChild(btnIElCart);
  butonAddToCart.appendChild(spanElementForButon);
  butonAddToCart.addEventListener("click", function (e) {    
    if (cardItemsElement.querySelector(".head-card-items") == null) {
      cardItemsElement.appendChild(headCardItemsEl);
    }

    const productElement = document.createElement("div");
    productElement.classList.add("product");
    const photoEl = document.createElement("div");
    photoEl.classList.add("photo");
    const imgEl = document.createElement("img");
    imgEl.classList.add("img-card-items");
    imgEl.src = element.img;
    imgEl.alt = element.name;
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    const headElement = document.createElement("div");
    headElement.classList.add("head-items");
    const productHeaderEl = document.createElement("div");
    productHeaderEl.classList.add("product-header");
    const headerElement = document.createElement("h3");
    headerElement.classList.add("hdr");
    headerElement.textContent = element.name;
    const closerEl = document.createElement("div");
    closerEl.classList.add("closer");
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn-closer-card");
    const iTagElement = document.createElement("i");
    iTagElement.classList.add("fas", "fa-solid", "fa-xmark");
    btnEl.appendChild(iTagElement);

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    
    for (let i = 0; i < 4; i++) {
      const tagP = document.createElement("p");
      tagP.classList.add(ArrClassOfP[i]);
      const spanKey = document.createElement("span");
      spanKey.classList.add(ArrClassOfSpanKey[i]);
      spanKey.textContent = ArrContOfSpanKey[i];
      const spanValue = document.createElement("span");
      spanValue.classList.add(ArrClassOfSpanValue[i]);
      spanValue.textContent = element[ArrClassOfP[i]];

      contentElement.appendChild(tagP);
      tagP.appendChild(spanKey);
      tagP.appendChild(spanValue);
    }

    cardItemsElement.appendChild(productElement);
    productElement.appendChild(photoEl);
    photoEl.appendChild(imgEl);
    productElement.appendChild(descriptionElement);
    descriptionElement.appendChild(headElement);
    headElement.appendChild(productHeaderEl);
    headElement.appendChild(closerEl);
    closerEl.appendChild(btnEl);
    productHeaderEl.appendChild(headerElement);
    descriptionElement.appendChild(contentElement);

    btnEl.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
      if (cardItemsElement.querySelector(".product") == null) {        
        headCardItemsEl.remove();
      } 
    });
  });
  spanElementForButon.textContent = " Add to Cart";
  const headCardItemsEl = document.createElement("h3");
  headCardItemsEl.classList.add("head-card-items");
  headCardItemsEl.textContent = "Cart Items";
  const contItemDivElement = document.createElement("div");
  contItemDivElement.classList.add("cont-item-div");
  const headItemElement = document.createElement("h3");
  headItemElement.classList.add("head-item");
  headItemElement.textContent = element.name;
  const itemElement = document.createElement("p");
  itemElement.classList.add("descr-item");
  itemElement.textContent = element.description;
  const priceItemElement = document.createElement("p");
  priceItemElement.classList.add("price-item");
  priceItemElement.textContent = element.price;
  contentBoxElement.appendChild(itemElementOfDiv);
  itemElementOfDiv.appendChild(imgItemDivElement);
  imgItemDivElement.appendChild(imgItemElement);
  imgItemDivElement.appendChild(butonDivElement);
  butonDivElement.appendChild(butonAddToCart);
  itemElementOfDiv.appendChild(contItemDivElement);
  contItemDivElement.appendChild(headItemElement);
  contItemDivElement.appendChild(itemElement);
  contItemDivElement.appendChild(priceItemElement);

  
});
