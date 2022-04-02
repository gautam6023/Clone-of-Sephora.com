let userArr = JSON.parse(localStorage.getItem("userLocal"));

document.getElementById('sign-btn').addEventListener("click",loginFun);

function loginFun(){

    let user_email = document.getElementById('l_email').value;
    let user_password = document.getElementById('l_password').value;
    
    let sign_out = document.createElement("div");

    let flag = false;
    let flagarr=[]
    for(let i = 0; i < userArr.length; i++){
        if(userArr[i].c_email === user_email && userArr[i].c_password === user_password){
            flag = true;
            flagarr.push(userArr[i])
            break;
            
        } 
    }

    

    if(flag === true){
       alert("log In successfully!");
       document.getElementById('popUpLog').style.display = "none";

        let chng_name = document.querySelector('#signinChange');
        chng_name.innerText = `Hi, ${flagarr[0].fname}`;

        let chng_stst =  document.getElementById('bold');
        chng_stst .innerText = `Good afternoon, ${flagarr[0].fname}. 👋`;
        
        let mainAppDiv = document.querySelector('.mainListDiv');

        sign_out.setAttribute = ("id","signOut");
          
        sign_out.style.paddingTop = "1.64vh";
        sign_out.style.paddingLeft = "0.78vw";
        sign_out.style.fontSize = "1.8vh";
        sign_out.style.lineHeight = "2vh";
        sign_out.style.textDecoration = "underline";
        
        sign_out.innerText = "Sign Out";
        
        mainAppDiv.append(sign_out);

        let signinPara = document.getElementById('siginPara');
        signinPara.innerHTML = `<div></div>`;

        let btnHide = document.querySelector(".btnFlx");
        btnHide.innerHTML = null;

        // document.getElementById('popUpLog').style.display = "none";
        
        
        sign_out.addEventListener("click",returnIndex);
        
        function returnIndex(){
            window.location.href = "index.html";
        }
        

}
    else{
       
            console.log("Login Failed");
           alert("Invalid Email ID and Password");
            
        }
    
}

