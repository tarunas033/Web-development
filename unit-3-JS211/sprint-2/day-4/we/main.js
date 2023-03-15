const url = ` https://jsonmock.hackerrank.com/api/football_matches`;

let page =1;


const getData = async (p) => {
  try {
    let res = await fetch(`${url}?page=${p}`);
    let data = await res.json();
    renderDom(data.data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData(page);

let el = (tag) => {
  return document.createElement(tag);
};

let masterCard = ({ competition, team1, team2, year }) => {
  let div = el("div");
  div.setAttribute("class", "card");

  let comp = el("h3");
  comp.innerText = competition;

  let t1 = el("p");
  t1.innerText = team1;

  let t2 = el("h3");
  t2.innerText = team2;

  let y = el("h3");
  y.innerText = year;
  div.append(comp, t1, t2, y);
  return div;
};

const renderDom = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let card = masterCard(el);
    container.append(card);
  });
};

const previous=()=>{
 if(page ===1){
    return;
 }
 page--;
 getData(page);
};

const next =()=>{
    if(page ===1159){
        return;
     }
     page++;
     getData(page);
};

let search = async() => {
    let team1 = document.getElementById("team1").value;
    let team2 = document.getElementById("team2").value;
    let year = document.getElementById("year").value;

    let u = `${url}?`;

    if(team1){
        u = u +`team1=${team1}`
    }

    if(team2){
        u = u +`&team2=${team2}`
    }
    if(year){
        u = u +`&year=${year}`
    }

    try{
        let res = await fetch(u);
        res =await res.json();
        renderDom(res.data);
    }catch(err){
        console.log(err)
    }
}