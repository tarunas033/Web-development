const search = async () => {
    try {
      let query = document.getElementById("query").value;
      let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
      let data = await res.json();
  
      let actual_data = data.results;
      display(actual_data);
  
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  function display(results) {
    document.querySelector("#container").innerHTML = null;
    if (results == undefined) {
      return false;
    }
  
    results.forEach(function (el) {
      let div = document.createElement("div");
      div.addEventListener("click" ,function(){
        console.log(el);
        localStorage.setItem("movie-data",JSON.stringify(el))
        location.href = "./picture.html"
       }) 
  
      let img = document.createElement("img");
      img.src = el.url;
  
      let name = document.createElement("h2");
      name.innerText = `Name: ${el.name}`;
  
      //     let rating=document.createElement("p");
      //     rating.innerText= `Year: ${el.Year}`
  
      div.append(img, name);
  
      document.getElementById("container").append(div);
    });
  }
  
  let id;
  
  let debounce = (func, time) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      func();
    }, time);
  };