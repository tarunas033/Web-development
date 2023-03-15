function getInputData(event){
  
event.preventDefault();

let form = document.getElementById("mobile_form");
let name = document.getElementById("mobile_name").value;
let brand = document.getElementById("mobile_brand").value;
let price =  document.getElementById("mobile_price").value;
let image =  document.getElementById("mobile_image").value;

 addData(name,brand,price,image);
}

function addData(name, brand, price, image) {

 this.mobile_name = name
 this.mobile_brand = brand
 this.mobile_price = price
 this.mobile_image = image
 let obj={
  name,
  brand,
  price,
  image,
 }

 let dataArr = JSON.parse(localStorage.getItem("mobile_data")) || [];
 dataArr.push(obj);
 console.log(dataArr);
  localStorage.setItem("mobile_data",JSON.stringify(dataArr));
  document.getElementById("mobile_name").value ="";
  document.getElementById("mobile_brand").value ="";
  document.getElementById("mobile_price").value ="";
  document.getElementById("mobile_image").value ="";
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}