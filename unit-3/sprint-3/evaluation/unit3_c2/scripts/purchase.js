let wallet=JSON.parse(localStorage.getItem("user"));
  let h3=document.getElementById("wallet_balance");
  let sum=0;

function display(){
  
    let data=JSON.parse(localStorage.getItem("purchase")) ||[];
    let purchased_vouchers=document.getElementById("purchased_vouchers");
    data.forEach(function(el){
        let div=document.createElement("div");

        let name=document.createElement("p");
        name.innerText=el.name;

        let price=document.createElement("p");
        price.innerText=el.price;

        let img=document.createElement("img");
        img.src=el.image;
    
        div.append(img,name,price);
        purchased_vouchers.append(div);

    })
    
}  
display()

function total(){
    let data=JSON.parse(localStorage.getItem("purchase")) || [];
   
    for(let i=0;i<data.length;i++){
        sum+=data[i].price;
        console.log(sum);
       
    }

    h3.innerText=Number(wallet[0].wallet)-Number(sum)
   
   
}
total()