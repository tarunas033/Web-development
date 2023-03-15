// https://jsonplaceholder.typicode.com/comments
const url = `https://jsonplaceholder.typicode.com/comments`;

let data = [];

let getData = async () => {
  let res = await fetch(url);
  res = await res.json();
  return res;
};

let main = async () => {
  data = await getData();
  renderDom(1);
  showButton(1);
  console.log(data);
};
main();

let renderDom = (page) => {
  let cont = document.getElementById("container");
  cont.innerHTML = null;

  let start = 20 * (page - 1);
  let end = start + 20;
  let per_page_data = data.slice(start, end);

  per_page_data.forEach(({ id, name }) => {
    let p = document.createElement("p");
    p.innerText = `${id} ${name}`;
    cont.append(p);
  });
};

let showButton = (page) => {
  let btn = document.getElementById("buttons");
  btn.innerHTML = null;

  let start = 1;
  if (page > 4) {
    // page 5
    start = page - 2; //2
  }

  for (let i = start; i <= start + 9; i++) {
    if (i == 26) {
      return;
    } else {
      let b = document.createElement("button");
      b.innerText = i;
      b.setAttribute("id", "change");
      b.onclick = () => {
        renderDom(i);
        showButton(i);
      };
      btn.append(b);
    }
  }
};