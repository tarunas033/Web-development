/*
navbar (link to pages) (import export) --->Done

admin page ---> add products 
adding product ---> form 
form ---> input fields and dropdown(category)
categories :- --> shirts, makeup, trouser, shoes

shirt.html
makeup.html
trouser.html
shoe.html

on the above pages filter the data and append 

product :[
 {
  id: 524215654,
  name:"shoe-1",
  category:"shoe",
 }
]

// delete the item 
 */

import {Navbar} from "../component/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();


window.onload = ()=>{
 let form = document.getElementById("addProduct");
 form.onsubmit = () =>{
  addProduct(event);
 };
};

const apiUrl = "http://localhost:3000/product";

let addProduct = async (e) =>{
 e.preventDefault();
 //POST
let form = document.getElementById("addProduct");

let image = form.image.value;
let price = form.price.value;
let category= form.category.value;

let data = {id: Date.now() + Math.random()*100,image,price,category};

 await fetch(apiUrl, {
  method: "POST",
  body: JSON.stringify(data),
  headers:{
   "Content-Type": "application/json",
  },
 });
};