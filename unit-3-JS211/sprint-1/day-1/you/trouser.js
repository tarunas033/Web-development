const product1 = ({image,category,price},id) => {
    let div = document.createElement("div");
 
    let prod1_image = document.createElement("img");
    prod1_image.src = image;
 
    let prod1_category = document.createElement("h3");
    prod1_category.innerHTML = category;
 
    let prod1_price = document.createElement("p");
    prod1_price.innerHTML = price;
 
    let remove_btn = document.createElement("button");
    remove_btn.innerHTML = "Remove";
 
    remove_btn.onclick = () => {
     remove_btn(id);
    }
    div.append(prod1_image,prod1_category,prod1_price,remove_btn)
    return div ;
 
 };
 
 const display = () => {
 
     let data2 = JSON.parse(localStorage.getItem("trousers")) || [];
 
     let container = document.getElementById("container");
     container.innerHTML = null;
 
     data2.forEach((el,index) => {
         container.append(product1(el,index))
     });
 
 }
 display(data);
 
 let remove = (id) => {
     //step:-1  get the data from LS
    let data2 = JSON.parse(localStorage.getItem("trousers")) || [];
 
    //step:-2 splice the data from LS
    data2.splice(id,1)
 
    //step:-3 update the data
    localStorage.setItem("trousers",JSON.stringify(data));
 
    //step:-4 renderdom again
      display()
 }
 