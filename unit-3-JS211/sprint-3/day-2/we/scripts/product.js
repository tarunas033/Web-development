import { navbar} from "../component/navbar.js";
import{ data } from "../component/product_data.js";
import append from "../component/append.js";
import card from "../component/card.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
console.log(navbar);

let container = document.getElementById("container");

let card =(image,price) => {

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = image;

    let h3 = document.createElement("h3");
    h3.innerText = price;

    div.append(img,h3)
    return div;

};

let append = () => {
    container. innerHTML = null;
    data.forEach(({image,price})  => {
        let p = card(image,price);
        container.append(p);
    })
};

window.onload = () => {
    append();
};
