let amt=JSON.parse(localStorage.getItem("amount"));
let wallet=document.getElementById("wallet");
wallet.innerHTML=amt;
let book=JSON.parse(localStorage.getItem("book"))||[];
function renderDom(data){
 let cont=document.getElementById("movie");
 cont.innerHTML=null;
 data.forEach((el)=>{
  // console.log(el)
  let div=document.createElement("div");
  let img=document.createElement("img");
  img.src=el.Poster;
  let title=document.createElement("h3");
  title.innerText=el.Title;
  div.append(title,img);
  cont.append(div);
 })
};

renderDom(book);

let confirm = () =>{

 let status=document.getElementById("booking_status");

 let seat=+document.getElementById("number_of_seats").value;

 seat=seat*100;

 if(seat>amt){

  status.innerText="Insufficient Balance!"

 }
 if(seat<amt){

  status.innerText="Booking Successful!";

  amt=amt-seat;

  localStorage.setItem("amount",JSON.stringify(amt));
  
  wallet.innerHTML=amt;
 }
}