
//  go to search bar and type"anything"
//0. accept search bar value
// 1. get movie data from youtube(fetch())
// 2. we need url
// 3. appendData()

let API_KEY ='AIzaSyBEkHA55xJSjgp1BAZb-xL7TSzThvIZi14';
let container=document.getElementById("search_results");

//  async fuction getData(){

// }
// youtube identifies each video through its vide id

let getData = async () => {
    try{
let query =document.getElementById("query").value;

let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20`)

        // let data =await res.json()
        // console.log(data);
let {items} =await res.json(); //  items=data.item
       

let array_of_videos=items;
console.log("array of videos",array_of_videos)
appendVideos(array_of_videos);

    }catch (error){

    }
};

let appendVideos= (data)=>{
    container.innerHTML=null;
data.forEach(({snippet:{title},id:{videoId}})=>{

    // title
    // thumbnail
    // let title=el.snippet.title
    // let videoId =el.id.videoId
    let div=document.createElement("div")
    let iframe=document.createElement("iframe");
   
    iframe.src=`https://www.youtube.com/embed/${videoId}`
    iframe.allow="fullscreen"
    iframe.width="100%"
    iframe.height="100%"
    let name=document.createElement("h5");
    name.innerText=title;
    div.append(img,iframe,name);
    container.append(div);


    console.log(name,videoId)

})
}
