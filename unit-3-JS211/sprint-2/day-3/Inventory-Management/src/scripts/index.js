//store the products array in localstorage as "data"

function redirectToInventoryPage() {

  window.location.href = `./inventory.html`

}

function getFormData() {

const name = document.getElementById("product_name").value;
const brand = document.getElementById("product_brand").value;
const price = document.getElementById("product_price").value;
const image = document.getElementById("product_image").value;

addData(name, brand, price, image);
    
}

function addData(name, brand, price, image) {

let obj = {
  name,
  brand,
  price,
  image
}

let data = JSON.parse(localStorage.getItem("data")) || [];
data.push(obj);
console.log(data);
localStorage.setItem("data",JSON.stringify(data));

name = document.getElementById("product_name").value="";
brand = document.getElementById("product_brand").value="";
price = document.getElementById("product_price").value="";
image = document.getElementById("product_image").value="";

}

window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners

let form = document.getElementById("product_form");
form.addEventListener("submit",(event) => {
  event.preventDefault();
  getFormData();
})

const show_products =document.getElementById("show_products");
show_products.addEventListener("click",()=>{
  redirectToInventoryPage()
})

});
