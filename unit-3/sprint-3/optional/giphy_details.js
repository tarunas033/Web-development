let APIKEY = `DxdOsUA6T0YZpSh98BEjjX22olvezItC`;


const details = async() => {

    try{
let id =JSN.parse(localStorage.getItem("details"));

let res = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`)
let result = await res.json();
     console.log(result)
      append(result)
 }
 catch (e) {
    console.log(e)
 }
}
details();

const append = (result) => {

    let details = document.getElementById("details")

    let img = document.createElement("img");
    img.src = result.data.images.downloadsized.url
    let p = document.createElement("p");
    p.innerHTML = result.data.images.original.url
    details.append(p,img)
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