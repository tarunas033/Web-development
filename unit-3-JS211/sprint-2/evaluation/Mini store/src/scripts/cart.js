let data = JSON.parse(localStorage.getItem("cart")) || [];

const count = () => {
    let cart_count_div = document.getElementById("cart_count")
    cart_count_div.innerText = data.length;
}
count();

const renderDom = (data) => {
    let div = document.getElementById("items");

    div.innerHTML = null;

    data.forEach(({image,title,brand,category,price},i) => {

    let card = document.createElement("div");
    card.className = "item"

    let img = document.createElement("img");
    img.src = image;

    let name = document.createElement("h3");
    name.innerText = title;

    let brands = document.createElement("p");
    brands.innerText = brand;

    let cat = document.createElement("p");
    cat.innerText = category;

    let prices = document.createElement("h3")
    prices.innerText = `Price:-${price}`

    let btn = document.createElement("button");
     btn.innerText = "Remove"
     btn.className = "remove";
     btn.addEventListener("click",()=>{
        deleteD(i)
     })

     card.append(img , name, brands , cat ,prices, btn);
     div.append(card)

    })
} 
renderDom(data)

const deleteD = (i) => {
   data.splice(i,1);
   localStorage.setItem("cart",JSON.stringify(data))
   renderDom(data);
   count();

}
   
    document.getElementById("checkoutBtn").addEventListener("click",() => {

    let name = document.getElementById("name").value;
    
    let address = document.getElementById("address").value;

    name==""? alert("Fill above details") :alert (`hi ${name} , your order is successful!`)

})










