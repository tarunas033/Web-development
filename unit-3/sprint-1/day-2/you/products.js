
let productApplied = JSON.parse(localStorage.getItem("Products"))
let counter = document.getElementById("counter")
   counter.innerHTML = productApplied.length;
 let count=0;
 display(productApplied)
   function display(productApplied) {
productApplied.forEach(function (el,i){
    let box = document.createElement("div");

    let productName = document.createElement("div");
    productName.innerHTML = el.name;

    
    let productCategory = document.createElement("div");
    productCategory.innerHTML = el.category;

    
    let product_img = document.createElement("img");
    product_img.setAttribute("src",el.image)

    
    let productPrice = document.createElement("div");
    productPrice.innerHTML = el.price;

    let btn = document.createElement("button")
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        event.target.parentNode.remove();
        count--;
        document.querySelector("#counter").innerText = count
        productApplied.splice(i,1)
        console.log(productApplied)
        localStorage.setItem("products",JSON.stringify(productApplied))
    })
     let btn1=document.createElement("button")
     btn1.innerText="Sold";
      if(el.sold){
        btn1.style.backgroundColor="Red";
        btn1.style.color="white";
      } else {
        btn1.style.backgroundColor="Green";
        btn1.style.color="white";
      }
      btn1.addEventListener("click",function(){
        if(el.sold){
        btn1.style.backgroundColor="Green";
        btn1.style.color="white";

        } else {
        btn1.style.backgroundColor="Red";
        btn1.style.color="white";
        }
      })
      
      box.append(productName,productCategory,product_img,productPrice,btn,btn1);
      document.querySelector("#container").append(box);
      count++;
      console.log(count);
      document.querySelector("#container").innerText=count
    })
}










