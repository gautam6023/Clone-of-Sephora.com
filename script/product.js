let product = JSON.parse(localStorage.getItem('clickedProduct'))
   
console.log('product1: ', product);

let leftcontainer = document.querySelector('#leftcontainer');
let right_info= document.querySelector('#right_info');

const appendproduct = (elem)=>{
  

           //left side
        let div = document.createElement('div');

        let img450 = document.createElement('img');
        img450.src= elem.image450;
        let ldivTag= document.createElement('div');
        ldivTag.append(img450)
      
        let img1= document.createElement('img');
        img1.src= elem.heroImage;
        let img2= document.createElement('img');
        img2.src= elem.heroImage;
        let img3= document.createElement('img');
        img3.src= elem.heroImage;

        let smdivTag1= document.createElement('div');
        smdivTag1.append(img1)
        let smdivTag2= document.createElement('div');
        smdivTag2.append(img2)
        let smdivTag3= document.createElement('div');
        smdivTag3.append(img3)

        let smallDivTag= document.createElement('div');
        smallDivTag.append(smdivTag1,smdivTag2,smdivTag3)
        smallDivTag.setAttribute("id","smallImages")

        leftcontainer.append(smallDivTag,ldivTag);

        //left side

    //right side============================================================

        let brand = document.createElement('h5');
        brand.innerText = elem.brandName;
        let title = document.createElement('p');
        title.innerText = elem.displayName;

        document.querySelector("title").innerText=elem.displayName;

        let starTag = document.createElement("div")
        starTag.innerHTML=`
    <span>
                <span class="css-1be0bml"></span>
                <span class="css-1be0bml"></span>
                <span class="css-1be0bml"></span>
                <span class="css-1be0bml"></span>
                <span class="css-m88no0"></span>
         </span>
         <span><b>1K</b></span>
         <span> | Ask a question | </span>
         <span>
            <svg viewBox="0 0 24 24"  style="height:1.5vh">
                <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>
            </svg>
         42.5K</span>`
         starTag.setAttribute("class","priceTag")

        let pricedivTag=  document.createElement('div');
        let itemprice = document.createElement('h4');
        itemprice.innerText = elem.currentSku.listPrice;
        let pricecap1= document.createElement('span');
        pricecap1.innerText="or $10.00 off your Sephora order when you open and use a Sephora Credit Card today.¹";
        let pricecap2= document.createElement('a');
        pricecap2.href="#";
        pricecap2.innerText= "See details";
        pricedivTag.append(itemprice,pricecap1,pricecap2)
        pricedivTag.setAttribute("class","priceTag")

        let sizeTag=  document.createElement('div');
        sizeTag.setAttribute("id","sizeTag")
        let sizeTag1= document.createElement('p');
        sizeTag1.innerText="Size: 1 oz/ 30 mL"
        let sizeTag2= document.createElement('p');
        sizeTag2.innerText="Natural finish - Standard size"
        let sizeTag3= document.createElement('button');
        sizeTag3.innerText="1 oz/ 30 mL"

        sizeTag.append(sizeTag1,sizeTag2,sizeTag3)

        right_info.append(brand,title,starTag,pricedivTag,sizeTag);

}
appendproduct(product);


document.querySelector("#baskedbutton>button").addEventListener("click",()=>{
    let cartArr= JSON.parse(localStorage.getItem("cart")) || [];
    product.qty=1;
    cartArr.push(product);
    localStorage.setItem("cart",JSON.stringify(cartArr));
})

document.querySelector("#baskedbutton>span").addEventListener("click",()=>{
    let wishArr=JSON.parse(localStorage.getItem("wish")) || [];
    document.querySelector("#baskedbutton>span>svg").style.fill="crimson"
    wishArr.push(product);
    localStorage.setItem("wish",JSON.stringify(cartArr));
})