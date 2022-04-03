const getData = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    data = data.products;
    console.log("data: ", data);
    //    var productsarray = [];
    //    productsarray.push(data);
    //    localStorage.setItem("products",JSON.stringify(productsarray));

    // let l2h = document.getElementById("sort_l2h");
    // l2h.addEventListener("click", () => {
    //   console.log(data);
    //   data.sort(function (a, b) {
    //     return a.currentSku.listPrice - b.currentSku.listPrice;
    //   });
    //   appendData(data, main);
    // });

    // let h2l = document.getElementById("sortSelect");
    // h2l.addEventListener("change", () => {
    //   console.log(data);
    //   data.sort(function (a, b) {
    //     return b.currentSku.listPrice - a.currentSku.listPrice;
    //   });
    //   appendData(data, main);
    // });



    // let topRated = document.getElementById("topRated");
    // topRated.addEventListener("click", () => {
    //   console.log(data);
    //   data.sort(function (a, b) {
    //     return b.rating - a.rating;
    //   });
    //   appendData(data, main);
    // });

      //  var sorting = document.getElementById("sortdiv").value;
      //  if(sorting===sort_h2l){
      //      data.sort(function(a,b){
      //           return b.currentSku.listPrice-a.currentSku.listPrice;
      //       })
      //       appendData(data,main) ;
      //  }

      document.getElementById("sortSelect").addEventListener("change",()=>{
        sortFun();
      })

      const sortFun =()=>{
        let sortValue=document.getElementById("sortSelect").value
        console.log(sortValue);
        if(sortValue==="sort_h2l"){
            data.sort(function(a,b){
                 return b.currentSku.listPrice-a.currentSku.listPrice;
             })
             console.log(data);
             appendData(data,main) ;
        }
        if(sortValue==="sort_l2h"){
          data.sort(function(a,b){
               return a.currentSku.listPrice-b.currentSku.listPrice;
           })
           console.log(data);
           appendData(data,main) ;
      }
      if(sortValue==="topRated"){
          data.sort(function (a, b) {
                return b.rating - a.rating;
              });
         console.log(data);
         appendData(data,main) ;
    }
      }

    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};

const appendData = (data, main) => {
  main.innerHTML = null;
  data.forEach((elem,ind) => {
    let div = document.createElement("div");
    let quicklook = document.createElement("div");
    quicklook.id = "quicklook";
    let new_heart = document.createElement("div");
    new_heart.id = "new_heart";
    let newdiv = document.createElement("div");
    newdiv.id = "newdiv1";
    newdiv.innerHTML = null;
    if (elem.currentSku.isNew === true) {
      newdiv.innerHTML = "New";
      newdiv.style = "background-color:black ;color: white; width: 19%";
    }
    let lovediv = document.createElement("div");
    lovediv.id = "lovediv";
// <<<<<<< HEAD
// =======
    lovediv.innerHTML = `<svg id="heart" viewBox="0 0 24 24">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
        </svg>`;
    new_heart.append(newdiv, lovediv);
    let heart = document.querySelector("#lovediv>svg");
// >>>>>>> 2eb82d5cc326c4ccb3bf17750ddbc1da153e278c
    lovediv.addEventListener("click", () => {
      console.log(ind);
        document.querySelectorAll("#heart")[ind].style.fill = "red";
        document.querySelectorAll("#heart")[ind].style.stroke = "red";
        let wishArr= JSON.parse(localStorage.getItem("wish")) || [];
        wishArr.push(elem);
        localStorage.setItem("wish",JSON.stringify(wishArr));
    });
       
       
    

    let limitedED = document.querySelector("#limitedED");
    let newArvl = document.querySelector("#newArrival");
    let sephora = document.querySelector("#sephora");
    let organic = document.querySelector("#organic");

    limitedED.addEventListener("click", () => {
      if (elem.currentSku.isLimitedEdition === false) {
        div.style = "display:none";
      }
    });

    newArvl.addEventListener("click", () => {
      if (elem.currentSku.isNew === false) {
        div.style = "display:none";
      }
    });

    sephora.addEventListener("click", () => {
      if (elem.currentSku.isSephoraExclusive === false) {
        div.style = "display:none";
      }
    });

    organic.addEventListener("click", () => {
      if (elem.currentSku.isOrganic === false) {
        div.style = "display:none";
      }
    });

    div.addEventListener("mouseenter", () => {
      quicklook.innerHTML = null;
      quicklook.innerHTML = `<div id='quicklookdiv'>Quicklook  </div>`;
// <<<<<<< HEAD
    //  div.append(quicklook);
      title1.style = "text-decoration: underline";
      lovediv.innerHTML = `<svg id="heart" viewBox="0 0 24 24">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
        </svg>`;
      
// =======
      //   div.append(quicklook);
      title1.style = "text-decoration: underline";
// >>>>>>> 2eb82d5cc326c4ccb3bf17750ddbc1da153e278c
    });
    div.addEventListener("mouseleave", () => {
      quicklook.innerHTML = null;
      title1.style = "text-decoration: none";
      // lovediv.innerHTML = null ;
    });
// <<<<< HEAD<<
    new_heart.append(newdiv, lovediv);
    
    
    
// =======
// >>>>>>> 2eb82d5cc326c4ccb3bf17750ddbc1da153e278c

    let image1 = document.createElement("img");
    image1.src = elem.heroImage;

    let brand1 = document.createElement("h5");
    brand1.innerText = elem.brandName;

    let title1 = document.createElement("p");
    title1.innerText = elem.displayName;
    title1.addEventListener("click", function () {
      let productArr = [];
      productArr.push(elem);
      console.log(elem);
      localStorage.setItem("clickedProduct", JSON.stringify(elem));

      window.location.href = "../product.html";
    });

    let price1 = document.createElement("h5");
    price1.innerText = `$ ${elem.currentSku.listPrice}`;

    let span = document.createElement("span");
    span.id = "span1";

    let rating = document.createElement("p");
    rating.innerText = `Rating : ${Number(elem.rating).toFixed(1)}`;

    div.append(new_heart, image1, brand1, title1, price1, rating);

    main.append(div);
  });
};



export { getData, appendData};
