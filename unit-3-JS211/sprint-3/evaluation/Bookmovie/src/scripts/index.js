let amt=JSON.parse(localStorage.getItem("amount"));
let bal=document.getElementById("wallet");
bal.innerText=amt;
let add=()=>{
 let amount=+document.getElementById("amount").value;
 amt=amt+amount;
 localStorage.setItem("amount",JSON.stringify(amt));
 bal.innerHTML=amt;
}