let userArr = JSON.parse(localStorage.getItem("userLocal"));
console.log(userArr);

document.querySelector("#sign-btn").addEventListener("click", () => {
  loginFun();
});

function loginFun() {
  let user_eamil = document.getElementById("l_email").value;
  let user_password = document.getElementById("l_password").value;

  let flag = false;
  let flagarr = [];
  for (let i = 0; i < userArr.length; i++) {
    if (
      userArr[i].c_email === user_eamil &&
      userArr[i].c_password === user_password
    ) {
      flag = true;
      flagarr.push(userArr[i]);
      break;
    }
  }

  if (flag === true) {
    let chng_name = document.querySelector("#signinChange");
    chng_name.innerText = `Hi, ${flagarr[0].fname}`;

    let chng_stst = document.getElementById("bold");
    chng_stst.innerText = `Good afternoon, ${flagarr[0].fname}. 👋`;

    let sign_out = document.getElementById("signOut");
    sign_out.innerText = "Sign Out";

    let signinPara = document.getElementById("siginPara");
    signinPara.innerText = null;

    let btnHide = document.querySelector(".btnFlx");
    btnHide.innerHTML = null;

    document.getElementById("popUpLog").style.display = "none";
  } else {
    console.log("Login Failed");
    alert("Invalid Email ID and Password");
  }
}

let returnMain = document.getElementById("signOut");
returnMain.addEventListener("click", Fn);

function Fn() {
  window.location.href = "index.html";
}
