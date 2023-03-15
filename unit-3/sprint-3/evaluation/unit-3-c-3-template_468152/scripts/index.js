// Store the wallet amount to your local storage with key "amount"
function addData(){
    
    let display=document.getElementById("wallet");
let input=document.getElementById("amount").value;
let btn=document.getElementById("add_to_wallet");
let data=JSON.parse(localStorage.getItem("amount")) || [] ;
let obj={
    input
}

data.push(obj);
display.innerText=input;

   localStorage.setItem("amount",JSON.stringify(data));
}