document.getElementById("popUpLog").style.display = "none";

document.getElementById("signIn-btn").addEventListener("click", showloginDiv);

function showloginDiv() {
  document.getElementById("popUpLog").style.display = "block";
  //console.log(hello);
}

document.getElementById("lg-close").addEventListener("click", clsLogIn);

function clsLogIn() {
  document.getElementById("popUpLog").style.display = "none";
}

// for create a/c show
document.getElementById("popUp").style.display = "none";

document
  .getElementById("createAcc-btn")
  .addEventListener("click", showCreateDiv);

function showCreateDiv() {
  document.getElementById("popUp").style.display = "block";
  //console.log(hello);
}

document.getElementById("cac-close").addEventListener("click", clscrtAcc);

function clscrtAcc() {
  document.getElementById("popUp").style.display = "none";
}
// Already added Code Below
document.getElementById("join-btn").addEventListener("click", createacDetails);

let createacArr = JSON.parse(localStorage.getItem("userLocal")) || [];
let userArr;
function createacDetails() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let c_email = document.getElementById("c_email").value;
  let c_password = document.getElementById("c_password").value;
  let mobile = document.getElementById("phone").value;
  let zip = document.getElementById("zip").value;
  let userobj = {
    fname,
    lname,
    c_email,
    c_password,
    mobile,
    zip,
  };
  if (
    fname == null ||
    lname == null ||
    c_email == null ||
    c_password == null ||
    zip == null ||
    mobile === ""
  ) {
    alert("Please enter the details");
  } else {
    createacArr.push(userobj);
    localStorage.setItem("userLocal", JSON.stringify(createacArr));

    alert("Your acccount has been created successfully");
    document.getElementById("popUp").style.display = "none";
    document.getElementById("popUpLog").style.display = "block";
    userArr = JSON.parse(localStorage.getItem("userLocal"));
    console.log(userArr);
  }
}

// Login

userArr = JSON.parse(localStorage.getItem("userLocal"));
console.log(userArr);
document.getElementById("sign-btn").addEventListener("click", loginFun);

function loginFun() {
  let user_email = document.getElementById("l_email").value;
  let user_password = document.getElementById("l_password").value;

  let sign_out = document.createElement("div");

  let flag = false;
  let flagarr = [];
  for (let i = 0; i < userArr.length; i++) {
    if (
      userArr[i].c_email === user_email &&
      userArr[i].c_password === user_password
    ) {
      flag = true;
      flagarr.push(userArr[i]);
      break;
    }
  }

  if (flag === true) {
    alert("log In successfully!");
    document.getElementById("popUpLog").style.display = "none";

    let chng_name = document.querySelector("#signinChange");
    chng_name.innerText = `Hi, ${flagarr[0].fname}`;

    let chng_stst = document.getElementById("bold");
    chng_stst.innerText = `Good afternoon, ${flagarr[0].fname}. 👋`;

    let mainAppDiv = document.querySelector(".mainListDiv");

    sign_out.setAttribute = ("id", "signOut");

    sign_out.style.paddingTop = "1.64vh";
    sign_out.style.paddingLeft = "0.78vw";
    sign_out.style.fontSize = "1.8vh";
    sign_out.style.lineHeight = "2vh";
    sign_out.style.textDecoration = "underline";

    sign_out.innerText = "Sign Out";

    mainAppDiv.append(sign_out);

    let signinPara = document.getElementById("siginPara");
    signinPara.innerHTML = `<div></div>`;

    let btnHide = document.querySelector(".btnFlx");
    btnHide.innerHTML = null;

    // document.getElementById('popUpLog').style.display = "none";

    sign_out.addEventListener("click", returnIndex);

    function returnIndex() {
      window.location.href = "index.html";
    }
  } else {
    console.log("Login Failed");
    alert("Invalid Email ID and Password");
  }
}
