

import navbar from "./components/navbar.js";

console.log('navbar:',navbar);

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar()

import carousel from "./components/carosel.js";
console.log("carousel :", carousel )

import display from "./scripts/append.js";

let movie1={
    Title: "Ek Tha Tiger",
    Year: 2012,
    Poster: "https://i0.wp.com/www.heyuguys.com/images/2012/06/Ek-Tha-Tiger-Poster.jpg",
    imdbID:5.5,
}

let movie2={
    Title: "Wanted",
    Year: 2009,
    Poster: "https://rukminim1.flixcart.com/image/416/416/juk4gi80/poster/u/p/z/large-newposter9678-wanted-salman-khan-poster-poster-large-print-original-imafea9zpxjsq5qh.jpeg?q=70",
    imdbID:5.5,
}

let movie3={
    Title: "Money Heist",
    Year: 2012,
    Poster: "https://wallpaperaccess.com/full/2703652.png",
    imdbID:8.2,
}

let movie4={
    Title: "Dangal",
    Year: 2016,
    Poster: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/12/13/528438-1549218318553374013670725092079776923524291n-1.jpg",
    imdbID:8.3,
}

let movie5={
    Title: "Uri",
    Year: 2019,
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXi52mVKNTn_SFnaQ-ZfPB3H9nwEK10z1kAg1zMeCoQ&s",
    imdbID:8.2,
}

let movie6={
    Title: "Shershaah",
    Year: 2021,
    Poster: "https://assets.thehansindia.com/h-upload/2021/07/18/1089413-sher.webp",
    imdbID:8.4,
}

let movie7={
    Title: "Kesari",
    Year: 2019,
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHkIpY2-FoKL_GBKAqc7neNEQDxFb73WmnAW4F7ml&s",
    imdbID:7.4,
}

let movie8={
    name: "Tiger Zinda hai ",
    Year: 2017,
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZ3B2EYw92QY8jh97PZZMiO7RMr9Ng6J4qG3xKSlR&s",
    imdbID:5.9,
}

let movie9={
    Title: "Mission Mangal",
    Year: 2019,
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6Ahnz4ItktIHgMk-2fdx9L2sCPrF6Ojq-fINCY9H&s",
    imdbID:6.5,
}

let movieData = [];
movieData.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9)

localStorage.setItem("movies",JSON.stringify(movieData))

let data = JSON.parse(localStorage.getItem("movies")) ;

  


let dataPromise = new Promise(function(resolve,reject){

    setTimeout(function(){

    let movies = data

    if(data != null){
        resolve(movies)
    } else{
        reject(`ERR: Server not found/:`);
    }

    },3000)
});

dataPromise.then(function (res){
    let conatiner = document.getElementById("movies")
    display(res,conatiner);
})
   .catch(function(err){
     console.log("err:",err)
  })



// function sortLH(){
    
//     images.sort(function(a,b){
//         return (a.imbd_rating-b.imbd_rating)
//     })
//      display(images);
// }

// function sortHL(){
    
//     images.sort(function(a,b){
//         return (b.imbd_rating-a.imbd_rating)
//     })
//      display(images);
// }