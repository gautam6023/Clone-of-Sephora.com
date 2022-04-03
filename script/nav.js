//Import

import {
  openDiv,
  searchRes,
  dataOfClicked,
  showData,
} from "../components/debounce.js";
let input = document.getElementById("search");
input.addEventListener("input", () => {
  let value = input.value;
  let url = `https://sephora.p.rapidapi.com/products/search?q=${value}&pageSize=60&currentPage=1`;
  gettingData(value, url);
});

//-------------> data needs to append in searchbar
// let resultCon = document.getElementById("resultCon");

// // let input = document.getElementById("mealName");
// let body = document.getElementById("body");
// let timerId;
// //------------------
// let show = document.getElementById("showR");

//-------------> data needs to append in searchbar
let resultCon = document.getElementById("debounceDiv");
let body = document.getElementById("body");
let timerId;
const gettingData = async (input, url) => {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(async () => {
    let data = await searchRes(url);
    console.log(data);
    let el = openDiv(resultCon, body, data);
  }, 1000);
};

//Nav Icon Svg Path Change
let heartIcon = document.getElementById("wishlistIcon");

heartIcon.addEventListener("mouseenter", () => {
  heartIcon.innerHTML = `<path
  d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"
></path>`;
});

heartIcon.addEventListener("mouseleave", () => {
  heartIcon.innerHTML = `<path
  d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"
></path>`;
});

//Basket

let basketIcon = document.getElementById("basketIcon");

basketIcon.addEventListener("mouseenter", () => {
  basketIcon.innerHTML = `<path
  d="M21.397 20.472l-.516 2.088a1.631 1.631 0 01-1.582 1.245H4.741c-.75 0-1.402-.513-1.583-1.245l-.517-2.088h18.756zm.813-3.286l-.565 2.286H2.393l-.565-2.286H22.21zm.813-3.286l-.566 2.286H1.582L1.016 13.9h22.007zm.373-4.333c.355 0 .616.334.53.679L23.27 12.9H.77l-.654-2.654a.546.546 0 01.53-.679h22.75zM13.83 1.716l5.572 5.2a.5.5 0 01-.683.731l-5.572-5.201a1.647 1.647 0 00-2.256 0L5.319 7.647a.501.501 0 01-.682-.732l5.573-5.199a2.647 2.647 0 013.62 0z"
></path>`;
});

basketIcon.addEventListener("mouseleave", () => {
  basketIcon.innerHTML = `<path
  d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"
></path>`;
});

let cartIcon = document.getElementById("cartCount");
if (cartIcon.value == null) {
  cartIcon.style.visibility = "hidden";
  cartIcon.style.opacity = "0";
}
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
if (cartData.length > 0) {
  cartIcon.innerText = cartData.length;
  cartIcon.style.visibility = "visible";
  cartIcon.style.opacity = "1";
}
