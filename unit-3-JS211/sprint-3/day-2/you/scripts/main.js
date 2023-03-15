import { navbar} from "../component/navbar.js";
import { data } from "../component/product_data.js";
import {append,count} from "../component/append.js"
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
// console.log(navbar);

window.onload =()=>{
    append(data)
    count()
}