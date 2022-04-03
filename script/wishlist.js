import { nav, Footer } from "../components/nav.js";
let navData = document.getElementById("NAVIGATION");

//Appdending nav and footer
let footer = document.getElementById("FOOTER");
footer.innerHTML = Footer();
navData.innerHTML = nav();

//Footer and Nav appending ends here
//Catching data from localStorage;
let cartData = JSON.parse(localStorage.getItem("wish")) || [];

//catching container
let cartProducts = document.getElementById("cartItemsTable");
let Price;
const displayData = (data) => {
  cartProducts.innerHTML = "";
  data.map((el, index) => {
    console.log(data);
    let {
      brandName,
      displayName,
      image450,
      currentSku: { listPrice: price },
    } = el;

    let row = document.createElement("div");
    row.setAttribute("id", "row");

    // let col1 = document.createElement("d");

    let img = document.createElement("img");
    img.src = image450;
    img.setAttribute("class", "cartImage");

    // col1.append(img);

    let col2 = document.createElement("div");
    col2.setAttribute("id", "secondDiv");

    let innDiv = document.createElement("div");
    let Title = document.createElement("p");
    Title.innerText = displayName;
    Title.setAttribute("id", "cartTitle");
    Title.setAttribute("class", "cartHover");
    let desc = document.createElement("p");
    desc.innerText = brandName;
    desc.setAttribute("class", "cartHover");
    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM ${code}`;
    itemCode.style.color = "#666666";
    itemCode.style.fontSize = "1.3vh";

    innDiv.append(Title, desc, itemCode);
    let div = document.createElement("div");
    div.setAttribute("id", "btnForCart");

    let btnLoves = document.createElement("button");
    btnLoves.innerText = `Move to Loves`;

    btnLoves.addEventListener("click", () => {
      let wishArr = JSON.parse(localStorage.getItem("wish")) || [];
      wishArr.push(el);
      localStorage.setItem("wish", JSON.stringify(wishArr));
    });

    //Added col two elements
    col2.append(innDiv, div);

    let col3 = document.createElement("div");
    col3.setAttribute("id", "thirdDiv");

    Price = document.createElement("p");

    Price.innerText = `$${price}`;
    console.log(price);

    col3.append(Price);

    let col4 = document.createElement("div");
    col4.setAttribute("id", "cartBtns");
    el.qty = 1;
    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Basket";

    addToCartBtn.addEventListener("click", () => {
      addToCart(el);
    });
    let iconHeart = document.createElement("span");
    iconHeart.setAttribute("id", "removeFromWish");
    iconHeart.innerHTML = `<svg
    viewBox="0 0 24 24"
    style="width: 2vw"
    id="wishlistIcon"
  >
  <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>
    >
  </svg>`;
    iconHeart.addEventListener("click", () => {
      getDelete(index);
    });
    col4.append(addToCartBtn, iconHeart);

    row.append(img, col2, col3, col4);

    cartProducts.append(row);
  });
};
displayData(cartData);
//Delete Func
const getDelete = (index) => {
  cartData.splice(index, 1);
  localStorage.setItem("wish", JSON.stringify(cartData));
  displayData(cartData);
};
//Adding item to cart
function addToCart(el) {
  console.log(el);
  alert("Product is successfully added to Basket");
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.push(el);
  localStorage.setItem("cart", JSON.stringify(cartData));
}
