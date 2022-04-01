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
