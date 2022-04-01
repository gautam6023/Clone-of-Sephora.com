import DisplayWishlist from "./DisplayWishlist.js";
const header = () => {
  return `<div class="pageMargin"><div class="breadcrum">
    <a class="breadcrumLink"
    href="#">< Back to Lists</a>
  </div><div class="lovesText">Loves</div></div>
    <div class="headerDevider
    "></div>
  <div class="pageMargin">${DisplayWishlist()}</div>
  `;
};
export default header;
