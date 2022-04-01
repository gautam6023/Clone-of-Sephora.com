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

function createacDetails() {
  let userobj = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    c_email: document.getElementById("c_email").value,
    c_password: document.getElementById("c_password").value,
    mobile: document.getElementById("phone").value,
    zip: document.getElementById("zip").value,
  };
  //    if(fname == null || lname == null || c_email == null || c_password == null || zip == null || mobile === ""){
  //         alert("Please enter the details")
  //     }
  //     else{
  createacArr.push(userobj);
  localStorage.setItem("userLocal", JSON.stringify(createacArr));

  alert("Your acccount has been created successfully");
  document.getElementById("popUp").style.display = "none";
  document.getElementById("popUpLog").style.display = "block";
}
