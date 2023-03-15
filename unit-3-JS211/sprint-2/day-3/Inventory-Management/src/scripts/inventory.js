
function redirectToIndexPage() {

  window.location.href = `./index.html`

}


let data = JSON.parse(localStorage.getItem("data")) || [];

function append(data) {

  let container = document.getElementById("products_data");
   container.innerHTML = null

   data.forEach((el,index) => {

    let div = document.createElement("div");


    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("h1");
     name.innerHTML = el.name;

    let brand = document.createElement("h2");
    brand.innerHTML = el.brand;

    let price = document.createElement("h3");
    price.innerHTML = el.price;

    let remove_btn = document.createElement("button");
    remove_btn.innerHTML = "remove product";
    remove_btn.addEventListener = ("click",() => {
        remove(index);
    });
    div.append(image , name , brand , price , remove_btn);
    container.append(div)
  })
}
// append(data);

function remove(index) {

  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(index,1);
  localStorage.setItem("products_data",JSON.stringify(data));
  append(data);

}

window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  // onload invoke append function

  append(data);
  const Add_products = document.getElementById("add_product");
  Add_products.addEventListener("click",() =>{
    redirectToIndexPage()
  })
});
