function append(data) {
    let container = document.getElementById("items");
    container.innerHTML = null;
  
    data.forEach(function (el, i) {
      let div = document.createElement("div");
  
      let name = document.createElement("h1");
      name.innerHTML = `Name-${el.name}`;
  
      let price = document.createElement("h2");
      price.innerHTML = `Price-${el.price}`;
  
      let img = document.createElement("img");
      img.src = el.image;
      let btn = document.createElement("button");
      btn.innerHTML = "add_to_cart";
      btn.addEventListener("click", function () {
        alert("Added in cart");
        Addcart(el, i);
        sum();
      });
      div.append(img, name, price, btn);
      container.append(div);
    });
  }
  
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  
  const Addcart = (el) => {
    arr.push(el);
    localStorage.setItem("cart", JSON.stringify(arr));
  };
  
  let data = JSON.parse(localStorage.getItem("cart")) || [];
  
  const sum = () => {
    let cart_count_div = document.getElementById("cart_count");
  
    data.length++;
    cart_count_div.innerText = data.length;
  };
  
  
  const count = () => {
    let cart_count_div = document.getElementById("cart_count");
    cart_count_div.innerText = data.length;
  };
  
  export { append, count };