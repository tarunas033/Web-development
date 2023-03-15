let data=JSON.parse(localStorage.getItem("items")) ||[];

function appendgrocery(){
    console.log(data)
    //  data=JSON.parse(localStorage.getItem("items")) ||[];
    let container=document.getElementById("cart");
    container.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.class="item"

        let name=document.createElement("p");
        name.innerHTML=`Name-${el.name}`;

        let price=document.createElement("p");
        price.innerHTML=`Price-${el.price}`

        let img=document.createElement("img");
        img.src=el.image

        let btn1=document.createElement("button");
        btn1.innerText="Remove";
        btn1.id="remove"
        
        btn1.addEventListener("click",function(){
            
            remove(index)
            
         
        })
        
        let btn2=document.createElement("button");
        btn2.innerText="Checkout";
        btn2.id="checkout"
        
        btn2.addEventListener("click",function(){
            
          window.location.href="checkout.html"
            
         
        })
      

        div.append(img,name,price,btn1,btn2);
        container.append(div);
    })
}
 appendgrocery()




function remove(index){
    let data=JSON.parse(localStorage.getItem("items")) ||[];
    
    let newData=data.filter(function(el,i){
       if(i==index){
        // let trash=JSON.parse(localStorage.getItem("trash")) ||[];
        // trash.push(el);
        // localStorage.setItem("trash",JSON.stringify(trash));
       }else{
        return i!==index;
       }
    });
    localStorage.setItem("items",JSON.stringify(newData));
    appendgrocery(newData)
}
function total(el){
    let data=JSON.parse(localStorage.getItem("items")) ||[];
    let t=document.getElementById("cart_total");
    t.innerHTML=data.price;
}
total();