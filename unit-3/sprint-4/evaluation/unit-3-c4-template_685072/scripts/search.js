// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let query=JSON.parse(localStorage.getItem("searchdata"))
// let data=document.getElementById("search_input").value

const container=document.getElementById("results");

const news =async () =>{
    try{
   const res=await fetch(`https://masai-api.herokuapp.com/news?q=${query}`)

   const data= await res.json();

   const actual_data=data.articles;
          append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
news()



const append=(data) =>{
    container.innerHTML=null;

   
   
    data.forEach((el,index)=>{  
        let dimg=index.urlToImage
        const div=document.createElement("div");
        div.class="news"

        const img=document.createElement("img");
        img.src=el.urlToImage;

        const title=document.createElement("h3");
        title.innerText=el.title

        const description=document.createElement("p")
        description.innerText=el.description;


        // =====================================
        let newsdata={
           dimg

        }
        div.onclick=()=>{
            storeClicked(data)
        };

        div.append(img,title,description)
        container.append(div);

      


        // console.log(title,description);
    });


}


function storeClicked(data){
    // store data in localStorage 

    localStorage.setItem("news",JSON.stringify(data))

    window.location.href="news.html";
}