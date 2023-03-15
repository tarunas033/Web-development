let data = JSON.parse(localStorage.getItem("mobile_data")) || [];

function append(data) {

  let mobile_list_div = document.getElementById("mobile_list")
  
  data.forEach((el,index) => {


    let div = document.createElement("div");

    let name = document.createElement("h1");
     name.innerHTML = el.name;

    let brand = document.createElement("h2");
    brand.innerHTML = el.brand;

    let price = document.createElement("p");
    price.innerHTML = el.price;

    let image = document.createElement("img");
    image.src = el.image;

    let remove_btn = document.createElement("button");
    remove_btn.innerHTML = "Remove";
    remove_btn.onclick = () => {
        remove(index);
    }
    div.append(name,brand,price,image,remove_btn);
    mobile_list_div.append(div)
  })
}
append(data);

function remove(index) {
  // logic to remove the mobiles data on selected index
  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  data.splice(index,1);
  localStorage.setItem("mobile_data",JSON.stringify(data));
  append(data);
    
    
}

function sortLowToHigh() {

    let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
    data.sort((a,b) =>  a.price - b.price);
    append(data);
    // sort the list of mobiles in ascendning order of price
}

function sortHighToLow() {
  // // sort the list of mobiles in descending order of the price
  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
    data.sort((a,b) =>  b.price - a.price);
    append(data);
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
