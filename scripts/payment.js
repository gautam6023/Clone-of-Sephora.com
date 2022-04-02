var cartArr =JSON.parse(localStorage.getItem("cart"))
console.log(cartArr);

document.getElementById("cartlength").innerText=`(${cartArr.length})`;

const shipcartFun = () => {
  cartArr.forEach((el) => {
    let qdivTag = document.createElement("div");
    qdivTag.setAttribute("class", "cartdivMain");

    let qdivTagim = document.createElement("div");
    let qimgTag = document.createElement("img");
    qimgTag.src = el.heroImage;

    qdivTagim.append(qimgTag);

    let qtitleTag = document.createElement("b");
    qtitleTag.innerText = el.brandName;
    let qdescriptionTag = document.createElement("p");
    qdescriptionTag.innerText = el.displayName;

    let qdescriptionTag1 = document.createElement("p");
    qdescriptionTag1.innerText = "Color: 1 Cool (104)";

    let priceTag = document.createElement("b");
    priceTag.innerText = el.currentSku.listPrice;
    let qtyTag = document.createElement("b");
    qtyTag.innerText = `Qty: ${el.qty}`

    let priceqtyTag = document.createElement("div");
    priceqtyTag.append(qtyTag, priceTag);
    priceqtyTag.setAttribute("class", "cartpriceclass");

    let infoTag = document.createElement("div");
    infoTag.append(qtitleTag, qdescriptionTag, qdescriptionTag1, priceqtyTag);

    qdivTag.append(qdivTagim, infoTag);
    document.getElementById("cartData").append(qdivTag);
  });
};

shipcartFun();

const addressFun = () => {
  event.preventDefault();
  let addressData = document.getElementById("shippingForm");
  let fname = addressData.fname.value;
  let lname = addressData.lname.value;
  let phone = addressData.phone.value;
  let saddress = addressData.saddress.value;
  let zip = addressData.zip.value;

  let addressobj = { fname, lname, phone, saddress, zip };
  localStorage.setItem("address", JSON.stringify(addressobj));
  let addObj = JSON.parse(localStorage.getItem("address"));
  appendAdressFun(addObj);
};

document
  .getElementById("shippingForm")
  .addEventListener("submit", addressFun);

const appendAdressFun = (el) => {
  document.getElementById("showAddress").innerHTML= "";
  document.getElementById("showAddress").style.display = "block";
  document.getElementById("shippingForm").style.display = "none";
  let divTag = document.createElement("div");

  let nameTag = document.createElement("p");
  nameTag.innerText = el.fname + " " + el.lname;

  let streetTag = document.createElement("p");
  streetTag.innerText = el.saddress;

  let zipTag = document.createElement("p");
  zipTag.innerText = el.zip + "," + el.phone;

  divTag.append(nameTag, streetTag, zipTag);

  document.getElementById("showAddress").append(divTag);

  document.querySelector("#shipping>div:first-child>a").style.display =
    "block";

    //cardadress
    document.getElementById("cardadress").innerText= `${el.saddress},${el.zip},${el.phone}`;
};

document.getElementById("cardclick").addEventListener("click", () => {
  document.getElementById("paymentsChange").style.display = "none";
  document.getElementById("cardChange").style.display = "block";
});

document.getElementById("cardcancel").addEventListener("click", () => {
  document.getElementById("paymentsChange").style.display = "block";
  document.getElementById("cardChange").style.display = "none";
});

document.getElementById("giftid1").addEventListener("click", () => {
  document.getElementById("giftid2").style.display = "block";
  document.getElementById("giftid1").style.display = "none";
});

document.getElementById("giftcancel").addEventListener("click", () => {
  document.getElementById("giftid2").style.display = "none";
  document.getElementById("giftid1").style.display = "flex";
});

//addressedit

document.getElementById("addressedit").addEventListener("click", () => {
  document.getElementById("shippingForm").style.display = "block";
  document.getElementById("showAddress").style.display = "none";
  document.querySelector("addressedit").style.display = "none";
});

//paymentcon
//inrightcontainer4

document.getElementById("paymentcon1").addEventListener("click", () => {
  document.querySelector("#inrightcontainer4>button").style.background = "crimson";
  document.querySelector("#inrightcontainer4>button").addEventListener("click",()=>{
    window.location.href="otp.html";
  })
});


document.getElementById("paymentcon2").addEventListener("click", () => {
  document.querySelector("#inrightcontainer4>button").style.background = "crimson";
  document.querySelector("#inrightcontainer4>button").addEventListener("click",()=>{
    window.location.href="otp.html";
  })
});


//inrightcontainer5

document.querySelector("#inrightcontainer5>button").addEventListener("click", () => {
  document.querySelector(".inrightcontainer6").classList.toggle("toggleclass")
});

let msubtotal = localStorage.getItem("totalprice");
document.getElementById("fetprice").innerText=msubtotal;
document.getElementById("fprice").innerText=Number((document.getElementById("fetprice")).innerText.substring(1))+ 8.34

// #shippingForm > input:nth-child(10)

const showNYFun= ()=>{
  document.querySelector("#shippingForm > input:nth-child(10)").style.display="inline-block";
  document.querySelector("#shippingForm > input:nth-child(9)").style.display="inline-block";
  document.querySelector("#shippingForm > span").style.display="none";
}

// let ziplength= document.querySelector("#shippingForm > input:nth-child(7)").innerText