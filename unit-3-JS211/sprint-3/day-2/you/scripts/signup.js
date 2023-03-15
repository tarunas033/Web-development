import { navbar} from "../component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
// console.log(navbar);

let dataObj = JSON.parse(localStorage.getItem("user"))||[]

document.querySelector("form").addEventListener("submit",data)

function data(event){
    event.preventDefault()
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let dataObj={
    name,
    email,
    password,
    
  }
  if(dataObj.name ===""||dataObj.email ===""||dataObj.password===""){
    
    alert("Some fields are empty")
  } else{
    
    // dataArr.push(dataObj)
    localStorage.setItem("user",JSON.stringify(dataObj))
    window.location.href="./login.html"
  }
}
