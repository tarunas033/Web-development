let getproduct=document.getElementById("all_products");
data.forEach(function (el){
    let div=document.createElement("div");
    let type=document.createElement("p");
    type.innerText=el.type;

let description=document.createElement("p");
description.innerText=el.desc;

let price=document.createElement("p");
price.innerText=el.price;

let img=document.createElement("p");
img.src=el.image;

let btn=document.createElement("button");
btn.addEventListener("click",function(){
    this.remove(index)
})
div.append(type, description,price,img);
all_products.append(div);
})

display();
function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];
}