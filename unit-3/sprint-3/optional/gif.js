//https://api.giphy.com/v1/gifs/trending?api_key=K8nf0XA4INMQU23Awf5gZkJVUrA2p2UG&limit=25&rating=g
//https://api.giphy.com/v1/gifs/trending?api_key=DxdOsUA6T0YZpSh98BEjjX22olvezItC&limit=25&rating=g
let APIKEY =`DxdOsUA6T0YZpSh98BEjjX22olvezItC`

const main = async () => {

  try{

    let response = await fetch (
        `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`
    );
    let data = await response.json();
    append(data.data)
        console.log(data.data);

    }
     catch (e) {
        console.log(e)
  }

}
main();

const append = async (data) => {

    data.forEach(e => {
        let gif = document.getElementById('gif');

        let img = document.createElement('img');
        img.src = e.images.downsized.url;
        img.addEventListener("click", () =>{ details_gif(e.id)})
        gif.append(img);
    })
}

const detail_gif = (id) => {
    localStorage.setItem("details",JSON.stringify(id));
    window.location.href ="giphy_details.html"
}
const random = async() => {

    let gif = document.getElementById("gif");
    gif.innerHTML = null;

    try{
    let res = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=g`);
    
    let result = await res.json();
    console.log(result);

    let img = document.createElement("img");
    img.src = result.data.images.downsized.url
    img.addEventListener("click",() => {

    })
    console.log(result.data.images.downsized.url);
    gif.append(img)
    }
    catch (e) {
        console.log(e)
    }

 }

 const categories = async () =>{
    let gif =document.getElementById("gif")
    gif.innerHTML = null;

    let sorting = document.getElementById("sorting")
    sorting.innerHtml = null;

   try {
    let res = await fetch (`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`);

 
    let result = await res.json()

    console.log(result.data)

    let sorting_Z_A = document.createElement("button")
     sorting_Z_A.innerText = "Z-A"
     sorting_Z_A.append(sorting_Z_A)

     let sorting_A_Z = document.createElement("button")
     sorting_A_Z.innerText = "A-Z"
     sorting_A_Z.append(sorting_A_Z);

    sorting_Z_A.onclick =() => {
        sorting_cat()
    }


   result.data.forEach((e) => {
    let name = document.createElement("p")
    name.innerHTML = e[0].name;
    console.log(name)
    let img = document.createElement("img");
    img.src = a.gif.images.downsized.url
    image.addEventListener("click",() => {

    })
   
    gif.append(name,image)
   })
 }
 catch(e){
    console.log(e)
   }
 }
 

 const sorting_cat = () => {

    let data = JSON.parse(localstorage.getItem("categories"))
  
    if (dum == true){

        data = data.reverse();
    }
    
     let gif = document .getElementById("gif")
     gif.innerHTML = null;

     data.forEach((e => {
    let name = document.createElement("p")
    name.innerHTML = e.name;

    let img = document.createElement("img");
    img.src = e.gif.images.downsized.url

    image.addEventListener("click",() => {
        detail_gif(e.gif.id)
     }))
    gif.append(name,image);
 }))
}



