const url="https://realtannu.herokuapp.com/";

document.getElementById("add_product").addEventListener("click",()=>{
 Post_data();
});
async function Post_data(){
 let name= document.getElementById("name").value;
 let price= document.getElementById("price").value;
 let description= document.getElementById("description").value;
 let date= document.getElementById("delivery").value;
 let image= document.getElementById("image").value;


 
 let data_obj={
  name,price,description,image,date,
 };
 let res=await fetch(url,{
  method:"POST",
  body:JSON.stringify(data_obj),
  headers:{
   "Content-Type":"Application/json"
  }
 })
 document.getElementById("name").value="";
 document.getElementById("price").value="";
 document.getElementById("description").value="";
 document.getElementById("image").value="";
 document.getElementById("delivery").value="";
 getData();
};

getData();

async function getData(){
 let res=await fetch(url)
 res=await res.json();
 renderDom(res);

}

function renderDom(data){
 let cont=document.getElementById("container");
 cont.innerHTML=null;

 data.forEach(({name,price,description,date,image,id})=>{
  let div=document.createElement("div");
  div.className="item";
  let img=document.createElement("img");
  img.src=image;
  let h2= document.createElement("h2");
  h2.innerText=name;
  let prc=document.createElement("h3");
  prc.innerText=price;
  prc.className="product_price";
  let desc= document.createElement("h4");
  desc.innerText=description;
  let dat=document.createElement("date");
  dat.innerText=date;
  dat.className="product_delivery";
  let delete_btn=document.createElement("button");
  delete_btn.innerText="Remove";
  delete_btn.className="remove_item";
  delete_btn.addEventListener("click",()=>{
   delete_card(id);
  });
  let update_btn=document.createElement("button");
  update_btn.innerText="Update Price";
  update_btn.className="update_price";
  update_btn.addEventListener("click",()=>{
   update_price(id);
  });

  div.append(img,h2,prc,dat,desc,delete_btn,update_btn);
  cont.append(div);

 });

}

async function delete_card(id){
 let res= await fetch(`${url}/${id}`,{
  method:"DELETE"
 })
 getData();
}

async function update_price(id){
 const new_price=window.prompt("Enter new price");

 let obj={price:new_price};

 let res= await fetch(`${url}/${id}`,{
  method:"PATCH",
  body:JSON.stringify(obj),
  headers:{
   "Content-Type":"Application/json",
  }
 })
 getData();
}

document.getElementById("sort-low-to-high").addEventListener("click", async ()=>{
let res= await fetch(`${url}?_sort=price&_order=asc`)
let data=await res.json();
renderDom(data);
})

document.getElementById("sort-high-to-low").addEventListener("click", async ()=>{
 let res= await fetch(`${url}?_sort=price&_order=desc`)
 let data=await res.json();
 renderDom(data);
 })

 document.getElementById("greater-than").addEventListener("click", async ()=>{
  let res= await fetch(`${url}?price_gte=4001`)
  let data=await res.json();
  renderDom(data);
  })

  document.getElementById("less-than").addEventListener("click", async ()=>{
   let res= await fetch(`${url}?price_lte=4000`)
   let data=await res.json();
   renderDom(data);
   })