const appendJustFun= (data,appendTag)=>{
    var c=1;
    data.forEach((el,index)=>{
        let divTag = document.createElement("div");

        let imgTag = document.createElement("img");
        imgTag.src= el.image250;

        let limitedTag = document.createElement("p");
        if(el.currentSku.isLimitedEdition===false)
        {
            limitedTag.innerText= "";
        }
        else
        {
            limitedTag.innerText= "limited edition";
        }

        let titleTag = document.createElement("p");
        titleTag.innerText= el.brandName;

        let descriptionTag = document.createElement("p");
        descriptionTag.innerText= el.displayName;

        let infoTag= document.createElement("div");
        infoTag.append(titleTag,descriptionTag);

        infoTag.addEventListener("mouseover", ()=>{

            infoTag.style.textDecoration= "underline";
         })

         infoTag.addEventListener("mouseout", ()=>{
            infoTag.style.textDecoration= "none";
        })

        //console.log(appendTag.id)

        let newTag = document.createElement("span");
        if(appendTag.id==="datacontainer2")
        {
            newTag.setAttribute("class","newClass")
            newTag.innerText= "NEW";
        }
        else if (appendTag.id==="datacontainer4")
        {
            newTag = document.createElement("b");
            newTag.setAttribute("class","sequenceOfNum")
            newTag.innerText= "#"+c;
            c++;
        }

        
        


        divTag.append(imgTag,limitedTag,infoTag,newTag);


        divTag.addEventListener("mouseenter", ()=>{
            divTag.innerHTML= "";
            
            let quickPTag=  document.createElement("button");
            quickPTag.innerText= "Quicklook";
            quickPTag.setAttribute("class","quickclass")
            //console.log(quickPTag);
            quickPTag.addEventListener("click",()=>{
                //console.log("clicked")
                //console.log(quickPTag);
                showFullDataFun(el);
            })
            divTag.append(imgTag,limitedTag,infoTag,quickPTag,newTag);
        })
        divTag.addEventListener("mouseleave", ()=>{
            //console.log("bye")
            divTag.innerHTML= "";
            divTag.append(imgTag,limitedTag,infoTag,newTag);
        })

        appendTag.append(divTag);

    })

    function showFullDataFun(el)
    {
        document.getElementById("showImage").innerHTML= "";
        //console.log(el);
        let qdivTag = document.createElement("div");
        let qdivTagim = document.createElement("div");
        let qimgTag= document.createElement("img");
        qimgTag.src= el.image450;

        let reviewsDivTag = document.createElement("div");

        let starTag =  document.createElement("img");
        starTag.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2g_CyJEN6QWdQbSd7psuahRnxl2wbp32EA&usqp=CAU"
       
        let reviewsTag = document.createElement("p");
        reviewsTag.innerText= `${el.reviews} reviews  |  87.4K loves`;


        reviewsDivTag.append(starTag,reviewsTag)
        reviewsDivTag.setAttribute("class","reviewsclass")
        qdivTagim.append(qimgTag,reviewsDivTag);



        let qtitleTag = document.createElement("p");
        qtitleTag.innerText= el.brandName;

        let qdescriptionTag = document.createElement("p");
        qdescriptionTag.innerText= el.displayName;


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
        priceTag.innerText= `$${el.currentSku.listPrice}`

        let shipTag= document.createElement("p");
        shipTag.innerText= "FREE SHIPPING";

        let priceDetails= document.createElement("div");
        priceDetails.append(priceTag,shipTag);
        priceDetails.setAttribute("class","priceclass")

        let buyTag=  document.createElement("button");
        buyTag.innerText= "Add to Basket";
        buyTag.addEventListener("click",()=>{
            let cartArr= JSON.parse(localStorage.getItem("cart")) || [];
            cartArr.push(el);
            localStorage.setItem("cart",JSON.stringify(cartArr));
        })
        let cartTag = document.createElement("button");
        // cartTag.innerText= "Add to Loves"


        var carttext=document.createElement("span");
        carttext.innerText= "Add to Loves";

        var lovessvgTag = document.createElement("div");

        lovessvgTag.innerHTML= `<svg style = "height:3vh;width: 2vw; stroke:black" viewBox="0 0 24 24">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
        </svg>`

        cartTag.append(lovessvgTag,carttext);

        cartTag.addEventListener("click",()=>{
            let wishArr= JSON.parse(localStorage.getItem("wish")) || [];
            wishArr.push(el);
            localStorage.setItem("wish",JSON.stringify(wishArr));
          
            document.querySelector(".buttonsclass>button:last-child>div>svg").style.fill="red";

        })

        // cartTag.addEventListener("mouseenter",()=>{
        //     document.querySelector(".buttonsclass>button:last-child>div>svg").style.fill="red";
        // })

        

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
        //console.log("ev", ev.target.parentNode.parentNode);
        //ev.path["6"].id !=="showImage"
        
        if(ev.target.innerText !== "Quicklook")
        {
            document.getElementById("showImage").style.display= "none";
        }
        if(ev.path["6"].id ==="showImage")
        {
            document.getElementById("showImage").style.display= "block";
        }
    }
} 


const slidersFun=(count,x,container,k)=>{
//console.log("Hel")
console.log(container);
document.querySelector(`${container}>.arrows>button:first-child`).addEventListener("click",()=>{

        // document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "black"
        // document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "black"
        slideFun(-1)
   
   
    });

document.querySelector(`${container}>.arrows>button:last-child`).addEventListener("click",()=>{
    
        slideFun(1);
});


const slideFun= (n)=>{
        
    //console.log("Hello",n,count);
    var arr3 = [
        "translateX(-600%)",
        "translateX(-1200%)",
      ];
      var arr4 = [
        "translateX(0%)",
        "translateX(0%)",
        "translateX(-600%)",
        "translateX(-1200%)",
      ];

    if (n > 0) {
        if (count > arr3.length-1) {
            count = arr3.length-1;
            document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "lightgray"
              
          }
          else{
                document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "black"
                document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "black"
          }
        for (var i = 0; i < x.length; i++) {
          x[i].style.transform = arr3[count];
          
        }
        count++;
        
      }
      if (n < 0) {
        if (count < 1) {
            count = 1;
            document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "lightgray"
          }
          else{
            document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "black"
            document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "black"
        }
        for (var i = 0; i < x.length; i++) {
          x[i].style.transform = arr4[count];
        }
        count--;
       
      }
      return count;
}

}

export {appendJustFun,slidersFun}
