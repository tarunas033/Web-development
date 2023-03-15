let i = 1;

const getData = async(i) => {

    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${i}`

   try {

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);

    renderDom(data.data);

   } catch (error) {

   console.log("error:",error)

  }
};


getData(i)

const renderDom = (data) => {

    let div = document.getElementById("main_items");

    div.innerHTML = null;

    data.forEach(({image,title,brand,category,price}, i) => {

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
    prices.innerText = `Price:-${price}`;

    let btn = document.createElement("button");
    btn.innerText ="Add to Cart"
    btn.className = "add_to_cart";
    btn.addEventListener("click",() => {
        alert("add to cart")
        AddCart({image,title,brand,category,price},i)
        sum()
    });

card.append(img , name, brands , cat ,prices, btn);
   div.append(card)

    });
}

document.getElementById("previous").addEventListener("click",() =>{
    i==4 ? null : --i;
    getData(i)
})

document.getElementById("next").addEventListener("click",() =>{
    i==4 ? i = 1 : ++i;
    getData(i)
})

let arr = JSON.parse(localStorage.getItem("cart")) || [];

const AddCart = ({image,title,brand,category,price}) => {
    arr.push({image,title,brand,category,price});
     localStorage.setItem("cart",JSON.stringify(arr))
};

let dataa = JSON.parse(localStorage.getItem("cart")) || [];
let cart_count_div = document.getElementById("cart_count");

const sum = () =>{

    dataa.length++;
   cart_count_div.innerText = dataa.length;

}

const count =() => {

    cart_count_div.innerText = dataa.length;
}
count();

















