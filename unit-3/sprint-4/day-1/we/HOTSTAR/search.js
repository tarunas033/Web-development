import searchnavbar from "./components/searchnavbar.js";
console.log("navbar:", searchnavbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = searchnavbar();
document.querySelector("#query").addEventListener("input", function () {
  debounce(searchMovies, 1000);
});

import carousel from "./components/carosel.js";
// console.log("carousel :", carousel )

import display from "./scripts/append.js";

async function searchMovies() {

  
  let loader=document.getElementById("loader")
           
  loader.style.display="block";
  
  try {
    let query = document.getElementById("query").value;

    let res = await fetch(
      ` https://www.omdbapi.com/?apikey=4c8b624e&s=${query}&type=movie `
    );

    let data = await res.json();
    let container = document.getElementById("movies");
    let actual_data = data.Search;
    display(actual_data, container);
  } catch (err) {
    console.log("err:", err);
  }
}

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}