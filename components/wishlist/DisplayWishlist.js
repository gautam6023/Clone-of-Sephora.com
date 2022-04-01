import { wishList } from "../../Constants/wishList.js";
const DisplayWishlist = () => {
  const displaySinglelist = () => {
    const data = wishList
      .map(res => {
        return `<div class="wishlistContainer">
        <div class="wishlistDetails">
            <a href=${res.brand_url} class="displayImagelink breadcrumLink">
                <div>
                    <img src=${res.image}></img>
                </div>
                <div>
                    <div>${res.title}</div>
                    <div>${res.description}</div>
                    <div>${res.itemDetails}</div>
                </div>
            </a>
        </div>
        <div>
            <button>Add to Basket</button>
        </div>
     <div>${res.price}</div>
    </div>`;
      })
      .join("");
    return data;
  };
  return `<div>${displaySinglelist()}</div>`;
};
export default DisplayWishlist;
