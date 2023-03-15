import { navbar} from "../component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();
// console.log(navbar);


let data = JSON.parse(localStorage.getItem("cart"))||[];

const count=()=>{
    let cart_count_div = document.getElementById("cart_count")
    cart_count_div.innerText=data.length;
}
count()



const renderDom =(data)=>{
    let items_div = document.getElementById("items")
    items_div.innerHTML=null

    data.forEach((el,i)=>{
        let cart = document.createElement("div")
        

        let name = document.createElement("h1");
        name.innerText = `Name-${el.name}`;
    
        let price = document.createElement("h2");
        price.innerHTML = `Price-${el.price}`;

        let img = document.createElement("img");
        img.src = el.image;

        let btn = document.createElement("button")
        btn.innerText ="Remove"
        btn.setAttribute("class","remove")
        btn.addEventListener("click",()=>{
           Delete(i)
        })
        cart.append(img, name,  price, btn)
         items_div.append(cart)
    })
}

renderDom(data)


const Delete =(i)=>{
    data.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(data))
    renderDom(data)
    count()
};