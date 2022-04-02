let beautyArr = JSON.parse(localStorage.getItem("beautyinsider"));
let datacontainer7= document.getElementById("datacontainer7");

const append7Fun= ()=>{
    beautyArr.forEach((el,index)=>{
    let divTag = document.createElement("div");

    let imgTag = document.createElement("img");
    imgTag.src= el.image;

    let limitedTag = document.createElement("p");
    if(el.points===undefined)
    {
        limitedTag.innerText= "";
    }
    else
    {
        limitedTag.innerText= el.points;
    }

    let titleTag = document.createElement("p");
    titleTag.innerText= el.title;

    let descriptionTag = document.createElement("p");
    descriptionTag.innerText= el.description;

    let infoTag= document.createElement("div");
    infoTag.append(titleTag,descriptionTag)


    infoTag.addEventListener("mouseover", ()=>{
        infoTag.style.textDecoration= "underline";
    })

    infoTag.addEventListener("mouseout", ()=>{
        infoTag.style.textDecoration= "none";
    })

    let buttonTag = document.createElement("button");
    let buttonptag1 =  document.createElement("p");
    buttonptag1.innerText= "Add to Basket";
    let buttonptag2 =  document.createElement("p");
    buttonptag2.innerText= "for Standard Shopping";
    buttonTag.append(buttonptag1,buttonptag2)

    divTag.append(imgTag,infoTag,limitedTag,buttonTag);

    divTag.addEventListener("mouseenter", ()=>{
        divTag.innerHTML= "";
        let quickPTag=  document.createElement("button");
        quickPTag.innerText= "Quicklook";
        quickPTag.setAttribute("class","quickclass7")
        quickPTag.style.background= "rgba(0, 0, 0, 0.5)"
        quickPTag.addEventListener("click",()=>{
            showFullDataFun7(el);
        })
        divTag.append(imgTag,infoTag,limitedTag,buttonTag,quickPTag);
    })
    divTag.addEventListener("mouseleave", ()=>{
        divTag.innerHTML= "";
        divTag.append(imgTag,infoTag,limitedTag,buttonTag);
    })

    document.getElementById("datacontainer7").append(divTag);

})

function showFullDataFun7(el)
{
    document.getElementById("showImage").innerHTML= "";
    //console.log(el);
    let qdivTag = document.createElement("div");
    let qdivTagim = document.createElement("div");
    let qimgTag= document.createElement("img");
    qimgTag.src= el.image;

    let reviewsDivTag = document.createElement("div");

    let starTag =  document.createElement("img");
    starTag.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2g_CyJEN6QWdQbSd7psuahRnxl2wbp32EA&usqp=CAU"
   
    let reviewsTag = document.createElement("p");
    reviewsTag.innerText= "716 reviews  |  87.4K loves";


    reviewsDivTag.append(starTag,reviewsTag)
    reviewsDivTag.setAttribute("class","reviewsclass")
    qdivTagim.append(qimgTag,reviewsDivTag);



    let qtitleTag = document.createElement("p");
    qtitleTag.innerText= el.title;

    let qdescriptionTag = document.createElement("p");
    qdescriptionTag.innerText= el.description;


    let qdescriptionTag1= document.createElement("p");
    qdescriptionTag1.innerText= "A Dior foundation with 24h wear, radiant medium-to-full coverage and hydration. With 86% skincare ingredients to visibly improve skin over time."

    let qdescriptionTag2= document.createElement("p");
    qdescriptionTag2.innerText= "Size: 6.7 oz/ 200 mL"

      let qdescriptionTag3= document.createElement("a");
    qdescriptionTag3.href= "#";
    qdescriptionTag3.innerText= "See product details"

    // let qdescriptionTag3= document.createElement("img");
    // qdescriptionTag3.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AYKF-v3JL8Cqshjat8Qkg_nRBbw3UNCnwQ&usqp=CAU"

    let lastDivTag =document.createElement("div");

    let priceTag= document.createElement("p");
    priceTag.innerText= `$${Math.floor(Math.random() * 90) + 10}`;

    let shipTag= document.createElement("p");
    shipTag.innerText= "FREE SHIPPING";

    let priceDetails= document.createElement("div");
    priceDetails.append(priceTag,shipTag);
    priceDetails.setAttribute("class","priceclass")

    let buyTag=  document.createElement("button");
    buyTag.innerText= "Add to Basket";
    let cartTag = document.createElement("button");
    // cartTag.innerText= "Add to Loves"
    let carttext=document.createElement("span");
    carttext.innerText= "Add to Loves";
    let lovessvgTag = document.createElement("div");
    lovessvgTag.innerHTML= `<svg style = "height:3vh;width: 2vw; fill:white; stroke:black" viewBox="0 0 24 24">
    <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
    </svg>`
    cartTag.append(lovessvgTag,carttext);

    let buttonTag= document.createElement("div");
    buttonTag.append(buyTag,cartTag)
    buttonTag.setAttribute("class","buttonsclass")

    lastDivTag.append(priceDetails,buttonTag)
    lastDivTag.setAttribute("class","lastinquick")

    let qinfoTag= document.createElement("div");
    qinfoTag.append(qtitleTag,qdescriptionTag,qdescriptionTag1,qdescriptionTag3,qdescriptionTag2,lastDivTag);

    qdivTag.append(qdivTagim,qinfoTag)

    document.getElementById("showImage").append(qdivTag);
    console.log( document.getElementById("showImage"));
    document.getElementById("showImage").style.display= "block";

        document.getElementById("main").addEventListener("click",()=>{
            
            showImageFun(event)
        })
    
}

const showImageFun= (ev)=>{
    if(ev.target.innerText !== "Quicklook")
    {
        document.getElementById("showImage").style.display= "none";
    }
}
} 
append7Fun();





var showImagedisplay= document.getElementById("showImage")