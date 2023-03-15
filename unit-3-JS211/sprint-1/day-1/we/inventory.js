let data = JSON.parse(localStorage.getItem("products")) || [];

let product = ({name,brand,price}, id) => {

let div = document.createElement("div");
let product_name = document.createElement("h3");
let product_brand = document.createElement("p");
let product_price = document.createElement("p");
let remove_btn = document.createElement("button");
remove_btn.innerText = "Remove";
remove_btn.onclick = () => {
    remove(id);
}


product_name.innerText = name;
product_brand.innerText = brand;
product_price.innerText = price;

div.append(product_name,product_brand,product_price,remove_btn);

return div;

};

let renderDom = () => {

  
    let container = document.getElementById("container");
    container.innerHTML = null ;

    data.forEach((el,index)=>{
      container.append(product(el,index)) ;
    });

}

renderDom(data);


// Remove functionality

let remove = (id) => {

// step:-1 Get the data from LS
let data = JSON.parse(localStorage.getItem("products")) || [];

// step:-2 Slice the data as per the index
data.splice(id,1);

// step:-3 Slice the data as per the index
localStorage.setItem("products",JSON.stringify(data));

// step:-4
renderDom(data);

}
/*
----->  Sorting 
1. Get the data from LS
2. Sort the data
3. append/display the data

*/
let sortLth = () =>{
let data = JSON.parse(localStorage.getItem("products")) || [];
data.sort((a,b) =>  a.price - b.price);
renderDom(data);

};




/*
----->  Filterting 
1. Get the filter value from user
2. Get the data from LS
3. Filter the data
4. append the data
5. set the data

*/

let filter = () =>{
  let data = JSON.parse(localStorage.getItem("products")) || [];
  let value = document.getElementById("filter").value;
  data = data.filter((el) => el.brand ==value);
  renderDom(data);
  
  };
  







