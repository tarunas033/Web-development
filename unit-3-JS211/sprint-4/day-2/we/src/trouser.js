
import {Navbar} from "../component/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

const url = "http://localhost:3000/product?category=trouser";

let getData = async () =>{
 let res =  await fetch(url);
 res= await res.json();
 renderDom(res)
};

getData();

let card = ({image,price,id}) =>{
 let div = document.createElement("div");
 let images=document.createElement("img");
 let p = document.createElement("p");
 let deleteBtn = document.createElement("button");
 deleteBtn.innerText="Delete";

 images.src=image;
 p.innerText=`Price:${price}`;
deleteBtn.onclick = ()=>{
 deleteProduct(id);
}

 div.append(img,p,deleteBtn);
 return div;
}

let renderDom = (data) =>{
 let cont =  document.getElementById("container");
 cont.innerHTML=null;
data.foreach((el)=>{
let product = card(el);
cont.append(product);
});
};

let deleteProduct = async () =>{
 await fetch (`http://localhost:3000/product/${id}`,{
  method: "DELETE",
 });
};