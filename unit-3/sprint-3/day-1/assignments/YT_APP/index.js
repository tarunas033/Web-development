// const API_KEY=`AIzaSyDPKTpKcXOjp2gJbeKFb3QYPmraC39SOpA`;
const API_KEY=`AIzaSyBEkHA55xJSjgp1BAZb-xL7TSzThvIZi14`

const container=document.getElementById("container");

const h2=document.getElementById("h2");

// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=${query}&type=video&key=${API_KEY} HTTP/1.1`
// https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=20
// https://youtube.googleapis.com/youtube/v3/i18nLanguages?part=part&key=[YOUR_API_KEY]

const pVideos =async () =>{
   // 1. acept query 
   // 2. getting url ready
   // https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20
   try{
   const query=document.getElementById("query").value;

  const res=await fetch( `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20&chart=mostPopular&regionCode=in`)

  const data= await res.json();

  const actual_data=data.items;
  h2.innerText="Popular videos"
        appendVideos(actual_data);
      
      
  console.log("data:",actual_data);

   }catch(err){
       console.log("err:",err)
   }

};

let recVideos=[
    {
       name:"Top Notch Gabru",
       cname:"RehanRecords",
       
       src:"https://www.youtube.com/embed/OaEpjCWHY38", 
    },
    {
        name:"Ap Dhillon • Top 5 Songs Playlist ",
        cname:"ramanshubajaj",
        src:"https://www.youtube.com/embed/YQmQONGejjo", 
     },
     {
        name:"Diljit Dosanjh: Born To Shine (Official Music Video) G.O.A.T",
        cname:"Diljit Dosanjh",
        src:"https://www.youtube-nocookie.com/embed/dCmp56tSSmA" ,
     },
     {
        name:"SCHEDULE (OFFICIAL VIDEO) | TEGI PANNU | MANNI SANDHU | LATEST PUNJABI SONGS 2021 ",
        cname:"Collab Creations ",
        src:"https://www.youtube-nocookie.com/embed/EN70saLXByM", 
     },
     {
        name:"Dabya Ni Karde (Full Song) | Ndee Kundu | Bintu Pabra | KP Kundu | New Haryanvi Songs Haryanavi 2021",
        cname:"Nav Haryana",
        src:"https://www.youtube-nocookie.com/embed/3oOGF8P1BJo", 
     },
     {
        name:"Jhanjar (Full Video) Karan Aujla | Desi Crew | Latest Punjabi Songs 2020",
        cname:"Rehan Record",
        src:"https://www.youtube.com/embed/ZnGMxARIxoY", 
     },
     {
        name:"Gangsta - Karan Aujla Ft. YG | Rupan Bal | Yeah Proof (Official Music Video) ",
        cname:"Rehan Record",
        src:"https://www.youtube.com/embed/doVZWonpAF0", 
     },
     {
        name:"It's Okay God (FULL VIDEO) Karan Aujla I Rupan Bal I Proof I Latest Punjabi Songs 2020 ",
        cname:"Rehan Record",
        src:"https://www.youtube.com/embed/SjOcMfiPgUo", 
     },
     {
        name:"DESI (Lyrical) देसी हा जी देसी हा भाई | Khasa Aala Chahar | KD | New Haryanvi Songs Haryanavi 2021 ",
        cname:"Nav Haryanvi",
        src:"https://www.youtube.com/embed/8Xmz6LQXvlM", 
     },
     {
        name:"Ghana Kasoota |@Raftaar | Surbhi Jyoti | @Rashmeet Kaur | Avvy Sra | Latest Hit Dance Song 2021",
        cname:"Sony Music India",
        src:"https://www.youtube.com/embed/u0Y3EHuMktE", 
     },
     {
        name:"TU SHAYAR BANAAGI (Official Video) | Parry Sidhu | MixSingh | Isha Sharma | New Punjabi Songs 2021 ",
        cname:"MixSingh",
        src:"https://www.youtube.com/embed/z2AkDCrlm3E", 
     },
     {
        name:"YKWIM (FULL VIDEO) KARAN AUJLA I KR$NA I RUPAN BAL I LATEST PUNJABI SONG 2022 ",
        cname:"Rehan Record",
        src:"https://www.youtube.com/embed/rHMZleMG628", 
     }, {
        name:"FACTS (Full Video) Karan Aujla | Deep Jandu | Latest Punjabi Songs 2019",
        cname:"Karan Aujla",
        src:"https://www.youtube.com/embed/6GskI4tLX00", 
     },
 
 ];
 

 
 localStorage.setItem("recVideos",JSON.stringify(recVideos));
 
  let recdata = JSON.parse(localStorage.getItem("recVideos"));
 console.log("recdata:",recdata)
 
 
 
 function recvideos(recdata){
 let container=document.getElementById("container") || document.getElementById("moviess")
 container.innerHTML=null;

 
 
 
 recdata.forEach(function (el){
     let div=document.createElement("div");
 
     let p1=document.createElement("p");
     p1.innerText=el.name
     let p2=document.createElement("p");
     p2.innerText=el.cname
     let iframe=document.createElement("iframe");
     iframe.src=el.src
    //  iframe.height="100px"
      iframe.width="110%"
      iframe.allow="fullscreen";
    
     div.append(iframe,p1,p2);
     container.append(div);
 
 });
 
 }
//  recvideos(recdata);
// ==============================================================================================================================
// ================================================================================================================================
 const searchVideos =async () =>{
    // 1. acept query 
    // 2. getting url ready
    // https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20
    try{
    const query=document.getElementById("query").value;

   const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&part=snippet&maxResults=20`)

   const data= await res.json();

   const actual_data=data.items;
   h2.innerText="Search Results:-"
         appendVideos(actual_data);
       
       
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};


const appendVideos=(data) =>{
    container.innerHTML=null;
   //  h2.innerText="Search Results:-"
    // nature of data? == object 
    // const container=document.getElementById("container");
    data.forEach(({snippet,id})=>{  
        // snippet:{title,channelTitle}
        // de structuring 

        // ========================
        // data we need
        // 1. thumbnail
        // 2.videoId
        // 3.title
        // 4.channel name
        const title=snippet.title
        const videoId=id.videoId
        const thumbnail=snippet.thumbnails.high.url
        const channel_name=snippet.channelTitle

        const div=document.createElement("div");

        const img=document.createElement("img");
        img.src=thumbnail;
        

        const title_html=document.createElement("h4");
        title_html.innerText=title

        const channel_html=document.createElement("h5")
        channel_html.innerText=channel_name;

        div.append(img,title_html,channel_html)
        container.append(div);

// =====================================================================================
let data={
   videoId,
   snippet,
};

div.onclick=()=>{
   // console.log(`clicked`)
   // console.log(title)
       // transfer data from index.js to video.js
   storeClickedvideo(data)
};

        console.log("title:",title,"videoId",videoId,"thumbnail:",thumbnail,"channel_name:",channel_name);
    });


}


const home=() =>{
    const yimg=document.getElementById("yimg");
    yimg.addEventListener("click",()=>{
        window.location.href="index.html";
        console.log("hii")
    })
}
 home()
 const mic=() =>{
    const micimg=document.getElementById("micimg");
    micimg.addEventListener("click",()=>{
        alert("Hii,Folk's How May I help You")
    })
 }
 mic()


//  ======================================================
function storeClickedvideo(data){
   // store data in localStorage 

   localStorage.setItem("clicked_item",JSON.stringify(data))

   window.location.href="video.html";
}