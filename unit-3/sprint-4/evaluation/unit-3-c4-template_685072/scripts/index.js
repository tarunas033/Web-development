// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import {navbar} from "./components/navbar.js"

// console.log("navbar:",navbar)
// let nav=document.getElementById("navbar")
// nav.innerHTML=navbar();

// function enter(){
// let search=document.getElementById("search")
// let h1=document.getElementById("h1")
// h1.innerText="h11"


// }
// let search=document.getElementById("search")
// search.addEventListener("change",function(){
// enter()
// })
let india=  document.getElementById("in")
india.addEventListener("click",function(){
    news();
    console.log("hii")
})

const container=document.getElementById("results");

 const news =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
news()
// =====================================================
let us=  document.getElementById("us")
us.addEventListener("click",function(){
    news2();
    console.log("hii")
})

 const news2 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
// ========================================================
let china=  document.getElementById("ch")
china.addEventListener("click",function(){
    news3();
    console.log("hii")
})
const news3 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};

// ================================================================
let uk=  document.getElementById("uk")
uk.addEventListener("click",function(){
    news4();
    console.log("hii")
})
const news4 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
// ============================================================
let new_zealand=  document.getElementById("nz")
new_zealand.addEventListener("click",function(){
    news5();
    console.log("hii")
})

const news5 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};



const append=(data) =>{
    container.innerHTML=null;

   
   
    data.forEach((el)=>{  

        const div=document.createElement("div");
        div.class="news"

        const img=document.createElement("img");
        img.src=el.urlToImage;

        const title=document.createElement("h3");
        title.innerText=el.title

        const description=document.createElement("p")
        description.innerText=el.description;


        div.append(img,title,description)
        container.append(div);



        // console.log(title,description);
    });


}


 let search=document.getElementById("search_input")


 search.addEventListener("change",function(){
    // console.log("search:",search.value)
    let arr=[];
    arr.push(search.value)
    localStorage.setItem("searchdata",JSON.stringify(arr))

  window.location.href="search.html"
})