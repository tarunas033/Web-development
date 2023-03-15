import { navbar} from "../component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
// console.log(navbar);

let data = JSON.parse(localStorage.getItem('s_user')) || []
const form = document.getElementById('form');
form.addEventListener('submit',(event)=>{
event.preventDefault()
data.forEach(({email})=>{
    const c_emails = document.getElementById('email').value;
    const name= document.getElementById("name").value;
    const addrss = document.getElementById('address');
    if(name==""||c_emails==""||addrss==""){
     alert("Invalid Credential")
    }
    else if(c_emails===email){
        alert('Your Order is confirmed')
       
    }else if(c_emails!=email){
        alert("First Login and after Checkout")
        window.location.href="./login.html"
    }
})
})
