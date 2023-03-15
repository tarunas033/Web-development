// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

async function  grocery(){

    try{

    let response =await fetch(`https://grocery-mock-api.herokuapp.com/items`)
    let data = await response.json();
    console.log(data.data);
    appendgrocery(data.data);
    localStorage.setItem("grocery",JSON.stringify(data.data))

} catch(err){
       console.log("err:",err)
  }
}
grocery()




function appendgrocery(data){
    let container=document.getElementById("items");
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.class="item"

        let name=document.createElement("p");
        name.innerHTML=`Name-${el.name}`;

        let price=document.createElement("p");
        price.innerHTML=`Price-${el.price}`

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button");
        btn.innerText="Add To Cart";
        btn.setAttribute("class","add_to_cart")
        btn.addEventListener("click",function(){
            
            add(index)
            count()
           
        })

        div.append(img,name,price,btn);
        container.append(div);
    })
}



function add(index){
    let data=JSON.parse(localStorage.getItem("grocery")) ||[];
    let newData=data.filter(function(el,i){
        if(i==index){
         let trash=JSON.parse(localStorage.getItem("items")) ||[];
         trash.push(el);
         localStorage.setItem("items",JSON.stringify(trash));
    
       
        }
        if(i!=index){
            return
        }
    })


}
let b;
function count(){
    let trash=JSON.parse(localStorage.getItem("items")) ||[];
     btn=document.getElementById("add_to_cart");
    let p=document.getElementById("item_count");
           
    p.innerText=`Items In Cart- ${trash.length}`
   
}