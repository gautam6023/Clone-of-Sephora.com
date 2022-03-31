

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': '9241d20813mshed0ceea1c1c8b71p1de436jsn39d2f064f84e'
	}
};

// fetch('https://sephora.p.rapidapi.com/products/list?categoryId=cat140006&pageSize=60&currentPage=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.products))
// 	.catch(err => console.error(err));


let page = 4 ;


const getData= async ()=>{
    try{
        let response = await fetch(`https://sephora.p.rapidapi.com/products/list?categoryId=cat140006&pageSize=60&currentPage=${page}`,options);
        let data =await response.json();
        data= data.products
       console.log('data: ', data);
        appendData(data) ;
    }catch(error){
        console.log('error: ', error); 
    }
}


let limitedED = document.querySelector("#limitedED");
let newArvl = document.querySelector("#newArrival");
let sephora = document.querySelector("#sephora");
let organic = document.querySelector("#organic");






const appendData = (data) => {
    data.forEach((elem)=>{
        let div = document.createElement('div');
        let quicklook = document.createElement('div');
        quicklook.id ="quicklook";
        let new_heart = document.createElement('div');
        new_heart.id = "new_heart"
        let newdiv = document.createElement('div');
        newdiv.id="newdiv1"
        newdiv.innerHTML = null;
        if(elem.currentSku.isNew===true){
            newdiv.innerHTML = "New";
            newdiv.style="background-color:black ;color: white; width: 19%"
        }
        let lovediv = document.createElement('div');
        lovediv.id = "lovediv" ;
        lovediv.addEventListener("click",()=>{
            console.log("1");
            // lovediv.style = "fill:red";
        })
        

        limitedED.addEventListener("click",()=>{
            if(elem.currentSku.isLimitedEdition===false){
                div.style = "display:none";
            }
        })

        newArvl.addEventListener("click",()=>{
            if(elem.currentSku.isNew===false){
                div.style = "display:none";
            }
        })

        sephora.addEventListener("click",()=>{
            if(elem.currentSku.isSephoraExclusive===false){
                div.style = "display:none";
            }
        })

        organic.addEventListener("click",()=>{
            if(elem.currentSku.isOrganic===false){
                div.style = "display:none";
            }
        })


        
  
        div.addEventListener("mouseenter", ()=>{
            quicklook.innerHTML =null ;
            quicklook.innerHTML = `<div id='quicklookdiv'>Quicklook  </div>`;        
            div.append(quicklook);
            title1.style="text-decoration: underline"
            lovediv.innerHTML =`<svg id="heart" viewBox="0 0 24 24">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
        </svg>`
        })
        div.addEventListener("mouseleave", ()=>{
            quicklook.innerHTML = null ;
            title1.style="text-decoration: none";
            lovediv.innerHTML = null;
        })
        new_heart.append(newdiv,lovediv);

        let heart = document.getElementById("heart");
        

        let image1 = document.createElement('img');
        image1.src = elem.heroImage ;

        let brand1 = document.createElement('h5');
        brand1.innerText = elem.brandName;

        let title1 = document.createElement('p');
        title1.innerText = elem.displayName ;
        div.addEventListener('click',function(){
            let productArr = [];
            productArr.push(elem);
            localStorage.setItem('product',JSON.stringify(productArr));
            console.log(productArr);
            window.location.href= "product.html";
        })

        let price1 = document.createElement('h5');
        price1.innerText = elem.currentSku.listPrice ;
        let span = document.createElement('span');
        span.id="span1"
        
        let star1 = document.createElement('img');
        star1.style = "height:1.9786vh; width:1.9786vh"
        star1.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star2 = document.createElement('img');
        star2.style = "height:1.9786vh; width:1.9786vh"
        star2.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star3 = document.createElement('img');
        star3.style = "height:1.9786vh; width:1.9786vh"
        star3.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star4 = document.createElement('img');
        star4.style = "height:1.9786vh; width:1.9786vh"
        star4.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star5 = document.createElement('img');
        star5.style = "height:1.9786vh; width:1.9786vh"
        star5.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        span.append(star1,star2,star3,star4,star5)
        div.append(new_heart,image1,brand1,title1,price1,span)

        main.append(div);

    })
}



getData();



//   document.getElementById('quicklook').addEventListener("onclick",()=>{
//       console.log("1")
//     // let resp = await getData("newpage.json");
//       appendData(resp,main);
//   })