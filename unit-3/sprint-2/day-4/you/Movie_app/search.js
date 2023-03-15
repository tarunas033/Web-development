let id;


async function searchMovies(){
    let query=document.getElementById("query").value;

    let response= await fetch(`http://www.omdbapi.com/?apikey=7d7563e6&s=${query}`);
    
    let data= await response.json();
    console.log(data.Search);
    appendMovies(data.Search);
}

function Constructor(title,poster,year){
    this.title=title;
    this.poster=poster;
    this.year=year;
}

let arr=JSON.parse(localStorage.getItem("details")) || [];


  function appendMovies(data){
    let data_div=document.getElementById("movies");
    // let loader=document.getElementById("loader");
    // loader.src="https://miro.medium.com/max/1050/1*CsJ05WEGfunYMLGfsT2sXA.gif"
    data_div.innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement("div");

        let name=document.createElement("p");
        name.innerHTML=`Name -${el.Title}`;

        let year=document.createElement("p");
        year.innerHTML=`Year - ${el.Year}`;

        let img=document.createElement("img");
        img.src=el.Poster;
        img.id="Poster";
        img.addEventListener("click",function(el){
            alert(year.innerHTML && name.innerHTML)
            // let obj=new Constructor(el.Title,el.Poster,el.Year);
            // arr.push(obj);
            // localStorage.setItem("details",JSON.stringify(arr));
        })

        div.append(img,name,year);
        data_div.append(div);
    })


  };





  async function search(){
    try{
        let query=document.getElementById("query").value;

        let response= await fetch(`http://www.omdbapi.com/?apikey=7d7563e6&s=${query}`);
        let data= await response.json();
        console.log(data.Search);
        appendMovies(data.Search);
    }
    catch(err){

    }
  }

  function debouncing (func,delay){

    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
        func()
    },delay)
  }