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

        div.append(image1,brand1,title1,price1,)

        main.append(div);

    })
}

export {getData,appendData} ;