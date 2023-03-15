let amt=JSON.parse(localStorage.getItem("amount"));
let bal=document.getElementById("wallet");
bal.innerText=amt;

// https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=b13b34c2
// api = http://www.omdbapi.com/?i=tt3896198&apikey=b13b34c2
let searchq = async ()=>{
 let searchquery=document.getElementById("search").value;
 const url=`https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=b13b34c2`;
 try{
  let res= await fetch(url);
  res=await res.json();
  let data= await res.Search;
  // console.log(data);
  renderDom(data);
 }catch(error){
  console.log(error);
 }
};

function renderDom(data){
 let cont=document.getElementById("movies");
 cont.innerHTML=null;
 data.forEach((el)=>{
  // console.log(el)
  let div=document.createElement("div");
  div.className="movie_tab";
  let img=document.createElement("img");
  img.src=el.Poster;
  let title=document.createElement("h3");
  title.innerText=el.Title;
  let button=document.createElement("button");
  button.className="book_now";
  button.innerText="Book Now";
  div.append(img,title,button);
  cont.append(div);
  button.addEventListener("click",function(){
   book(el);
  })
  //
 })
};

let book = (el) =>{
 window.location.href="checkout.html";
 let arr=JSON.parse(localStorage.getItem("book"))||[];
 arr.push(el);
 localStorage.setItem("book",JSON.stringify(arr));
}

let id;

let search =()=>{
id=setInterval(()=>{
 if(id){
 searchq();
 }
 clearInterval(id);
},2000)

}