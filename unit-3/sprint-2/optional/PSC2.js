function slideshow() {

    const arr = [
        'https://images.unsplash.com/photo-1662755852952-bf8ea1023c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'>
        'https://images.unsplash.com/photo-1662752296095-82ebd797ae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'>
        'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

    ];

  let i=0;
  let div = document.getElementById('slider');
  let img = document.createElement('img');
  img.src = arr[0]

div.append(img);
i = i + 1;


setInterval(function(){
    if(i===3) {
        i=0;
    }
    img.src = arr[i];
    i=i + 1;
    div.append(img)


    },2000);

}
slideshow ();

const movies = [
    {
        name:"Cuttputli",
        imdb:7.5,
        release_date:2022,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/9120/1329120-v-9e795ba36f30", 
     },
     {
         name:"Chichore",
         imdb:"8.5",
         release_date:"2019",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v", 
      },
      {
         name:"Super-30",
         imdb:"9.0",
         release_date:"2022",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v", 
      },
      {
         name:"Missin-Mangal",
         imdb:"7.5",
         release_date:"2021",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v", 
      },
      {
         name:"Housefull-4",
         imdb:"6.5",
         release_date:"2019",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v", 
      },
      {
         name:"Baghi-3",
         imdb:"5.5",
         release_date:"2021",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/6536/846536-v", 
      },
      {
         name:"M.S-Dhoni",
         imdb:"7.5",
         release_date:"2016",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v", 
      },
      {
         name:"Sipderman",
         imdb:"8.0",
         release_date:"2002",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2350/1282350-v-15ffecf89380", 
      },
      {
         name:"83",
         imdb:"9.0",
         release_date:"2022",
         img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/608/1160608-v-8680160dd6b2", 
      },
  
];

localStorage.setItem('movie',JSON.stringify(movies));

let data = JSON.parse(localStorage.getItem('movies'));

function appendMovies() {
    // let data_div =document.getElementById('basic');

    // data_div.innerHTML = null;

    // data_div.id ='movies';

data.forEach(function(el){
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = `Name: ${el.name}`;

    let rating = document.createElement("p");
    rating.innerHTML = `Rating: ${el.rating}`;

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img;

    div.append(img, name, rating);

    data_div.append(div);
})
}

let mypromise = new Promise(function (resolve,reject){

    setTimeout(function(){
        let data = movies;
        if(data != null) {
            resolve(data);
        } else {
            reject("issue from server")
        }
    },2000)
})

async function  main() {

    try {
        let response = await mypromise
        appendMovies(response)
    }
    catch(error) {
        console.log("error",error)
    }
}
main();

function sortLH() {
    let data = JSON.parse(localStorage.getItem("movies"));

    let sort = data.sort((a,b) => a.rating - b.rating);
    
    appendMovies(sort);
}
function sortLH() {
    let data = JSON.parse(localStorage.getItem("movies"));

    let sort = data.sort((a,b) => b.rating - a.rating);
    
    appendMovies(sort);
}










