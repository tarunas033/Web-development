let wallet=JSON.parse(localStorage.getItem("user"));

let h3=document.getElementById("wallet_balance");

let sum=0;
h3.innerText=wallet[0].wallet

async function voucher(){
    try{
    let response=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
    let data= await response.json();
    console.log("data",data[0].vouchers);
    append(data[0].vouchers);
     localStorage.setItem("vouchers",JSON.stringify(data[0].vouchers))

    }catch(err){
        console.log("err:",err)
    }
}
voucher()



function append(data){
    let container=document.getElementById("voucher_list");
    
    container.innerHTML=null;
   
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.class="voucher"

        let name=document.createElement("p");
        name.innerHTML=`Name-${el.name}`;

        let price=document.createElement("p");
        price.innerHTML=`Price-${el.price}`

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button");
        btn.innerText="Buy";
        btn.id="buy_voucher"
         btn.addEventListener("click",function(){
            
             add(index)
            window.location.reload()
           
         })
         btn.addEventListener("click",function(){
            if(h3.innerText>sum){
                alert("Hurray! purchase successful")
            }else if(h3.innerText<sum){
                alert("Sorry! insufficient balance")
            }
         })

        div.append(img,name,price,btn);
        container.append(div);
    })
}


function add(index){
    let data=JSON.parse(localStorage.getItem("vouchers")) ||[];
    let newData=data.filter(function(el,i){
        if(i==index){
         let trash=JSON.parse(localStorage.getItem("purchase")) || [];
         trash.push(el);
         localStorage.setItem("purchase",JSON.stringify(trash));
    
       
        }
        if(i!=index){
            return
        }
    })


}

function total(){
    let data=JSON.parse(localStorage.getItem("purchase")) || [];
   
    for(let i=0;i<data.length;i++){
        sum+=data[i].price;
        console.log(sum);
        localStorage.setItem("purchase",JSON.stringify(data));
    }

    h3.innerText=Number(wallet[0].wallet)-Number(sum)
   
   
}
total()

// function alert(){

// let btn=document.getElementById("buy_voucher")

// btn.addEventListener("click",function(){
//     if(h3.innerText>sum){
//         alert("Hurray! purchase successful")
//     }else if(h3.innerText<sum){
//         alert("Sorry! insufficient balance")
//     }
//  })
// }
// alert()