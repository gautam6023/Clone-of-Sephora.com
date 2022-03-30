const appendJustFun= (data,appendTag)=>{
    var c=1;
    data.forEach((el,index)=>{
        let divTag = document.createElement("div");

        let imgTag = document.createElement("img");
        imgTag.src= el.image;

        let limitedTag = document.createElement("p");
        if(el.limited===undefined)
        {
            limitedTag.innerText= "";
        }
        else
        {
            limitedTag.innerText= el.limited;
        }

        let titleTag = document.createElement("p");
        titleTag.innerText= el.title;

        let descriptionTag = document.createElement("p");
        descriptionTag.innerText= el.description;

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
        let qimgTag= document.createElement("img");
        qimgTag.src= el.image;
        qdivTag.append(qimgTag);
        document.getElementById("showImage").append(qdivTag);
        console.log( document.getElementById("showImage"));
        document.getElementById("showImage").style.display= "block";
        
            document.getElementById("main").addEventListener("click",()=>{
                setTimeout(showImageFun,2000)
            })
        
    }
    
    const showImageFun= ()=>{
        document.getElementById("showImage").style.display= "none";
    }
} 


const slidersFun=(count,x,container,k)=>{
//console.log("Hel")
console.log(container);
document.querySelector(`${container}>.arrows>button:first-child`).addEventListener("click",()=>{

    // slideFun(-1)
    if(count>k)
    {
        document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "black"
        document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "black"
        slideFun(-1)
    }
    else
    {
        // console.log("Hello");
        document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "lightgray"
    }
   
    });

document.querySelector(`${container}>.arrows>button:last-child`).addEventListener("click",()=>{
    if(count<=x.length-k)
    {
        document.querySelector(`${container}>.arrows>button:first-child`).style.fill = "black"
        document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "black"
        slideFun(1);
    }
    else
    {
        // console.log("bye");
        document.querySelector(`${container}>.arrows>button:last-child`).style.fill = "lightgray"
    }
});


const slideFun= (n)=>{
        
    // console.log("Hello",n,count);
    if(n==1)
    {
        var y=count;
        const rightFun = ()=>{
            for(var i=0;i<x.length; i++)
            {
                x[i].style.opacity= "1";
                x[i].style.display= "none";
            }
            for(i=count;i<y+k; i++)
            {
                x[i].style.opacity= "1";
                x[i].style.display= "block";
                count++;
            }
        }

        for(var i=0;i<x.length; i++)
        {
            x[i].style.opacity= "0";
        }
        setTimeout(rightFun,500)

        return count;
    }
    
    if(n==-1)
    {
        var y=count;
        const leftFun= ()=>{
            for(var i=0;i<x.length; i++)
            {
                x[i].style.opacity= "1";
                x[i].style.display= "none";
            }
            for(i=count-(2*k);i<y-k; i++)
            {
                x[i].style.opacity= "1";
                x[i].style.display= "block";
                count--;
            }

        }
        for(var i=0;i<x.length; i++)
        {
            x[i].style.opacity= "0";
        }
        setTimeout(leftFun,500)
        return count;
    }
}

}

export {appendJustFun,slidersFun}
