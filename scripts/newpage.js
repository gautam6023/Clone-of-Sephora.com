const getData= async (url)=>{
    try{
        let response = await fetch(url);
        let data =await response.json();
       data= data.NewData
       console.log('data: ', data);
        return data ;
    }catch(error){
        console.log('error: ', error); 
    }
}





const appendData = (data,main) => {
    data.forEach((elem)=>{
        let div = document.createElement('div');
        let quicklook = document.createElement('div');
        quicklook.id ="quicklook";
        let new_love = document.createElement('div');
        new_love.id = "new_love"
        let newdiv = document.createElement('div');
        newdiv.id="newdiv1"
        newdiv.innerHTML = "NEW"
        let lovediv = document.createElement('div');
        lovediv.id = "lovediv" ;
        lovediv.innerHTML =`<svg viewBox="0 0 24 24">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>>
        </svg>`


        
  
        div.addEventListener("mouseenter", ()=>{
            quicklook.innerHTML =null ;
            quicklook.innerHTML = `<div id='quicklookdiv'>QuickLook  </div>`;        
            div.append(quicklook);
            title1.style="text-decoration: underline"
            
        })
        div.addEventListener("mouseleave", ()=>{
            quicklook.innerHTML = null ;
            title1.style="text-decoration: none";
        })
        new_love.append(newdiv,lovediv);
        

        let image1 = document.createElement('img');
        image1.src = elem.image ;

        let brand1 = document.createElement('h5');
        brand1.innerText = elem.brand;

        let title1 = document.createElement('p');
        title1.innerText = elem.title ;
        div.addEventListener('click',function(){
            let productArr = [];
            productArr.push(elem);
            localStorage.setItem('product',JSON.stringify(productArr));
            console.log(productArr);
            window.location.href= "product.html";
        })

        let price1 = document.createElement('h5');
        price1.innerText = elem.price ;
        let span = document.createElement('span');
        span.id="span1"
        
        let star1 = document.createElement('img');
        star1.style = "height:6px; width:6px"
        star1.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star2 = document.createElement('img');
        star2.style = "height:6px; width:6px"
        star2.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star3 = document.createElement('img');
        star3.style = "height:6px; width:6px"
        star3.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star4 = document.createElement('img');
        star4.style = "height:6px; width:6px"
        star4.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        let star5 = document.createElement('img');
        star5.style = "height:6px; width:6px"
        star5.src = "https://www.sephora.com/img/ufe/icons/star-outline.svg"
        span.append(star1,star2,star3,star4,star5)
        div.append(new_love,image1,brand1,title1,price1,span)

        main.append(div);

    })
}

export {getData,appendData} ;





//   document.getElementById('quicklook').addEventListener("onclick",()=>{
//       console.log("1")
//     // let resp = await getData("newpage.json");
//       appendData(resp,main);
//   })