import { navbar} from "../component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
// console.log(navbar);

let data = JSON.parse(localStorage.getItem('s_user')) || []
const form = document.getElementById('form');
form.addEventListener('submit',(event)=>{
event.preventDefault()
data.forEach(({email,password})=>{
    const emails = document.getElementById('email').value;
    const passwords = document.getElementById('password').value;
    if(emails===email||passwords===password){
        alert('login Successfull')
        window.location.href="./index.html"
    }else{
        alert('Invalid Credential')
    }
})
})