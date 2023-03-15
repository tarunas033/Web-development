function display(data, container) {
    loader.style.display= "none"; 
    container.innerHTML = null;
  
    if (data == undefined) {
      return false;
    }
  
    data.forEach(({ Title, Year, Poster, imdbID }) => {
      let div = document.createElement("div");
  
      let p = document.createElement("p");
      p.innerText = Title;
  
      let Date = document.createElement("p");
      Date.innerText = Year;
  
      let img = document.createElement("img");
      img.src = Poster;
  
      let rating = document.createElement("p");
      rating.innerText = imdbID;
  
      div.append(img, p, Date, rating);
  
      container.append(div);
    });
  }
  
  export default display;