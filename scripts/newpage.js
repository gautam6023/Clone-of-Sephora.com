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
        quicklook.style ="background-color:grey;opacity:0.5;margin:auto"
        div.addEventListener("mouseover", ()=>{
            quicklook.innerHTML =null ;
            quicklook.innerHTML = "QuickLook";        
            div.append(quicklook);
        })
        div.addEventListener("mouseout", ()=>{
            quicklook.innerHTML = null ;
        })

        let image1 = document.createElement('img');
        image1.src = elem.image ;

        let brand1 = document.createElement('h5');
        brand1.innerText = elem.brand;

        let title1 = document.createElement('p');
        title1.innerText = elem.title ;
        title1.addEventListener('click',function(){
            let productArr = [];
            productArr.push(elem);
            localStorage.setItem('product',JSON.stringify(productArr));
            console.log(productArr);
            window.location.href= "product.html";
        })

        let price1 = document.createElement('h5');
        price1.innerText = elem.price ;
        let span = document.createElement('span');
        span.style="display:flex;justify-content:space-between;width:20%;margin:auto"
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
        div.append(image1,brand1,title1,price1,span)

        main.append(div);

    })
}

export {getData,appendData} ;