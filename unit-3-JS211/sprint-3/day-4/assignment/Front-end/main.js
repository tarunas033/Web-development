const url = "http://localhost:3000/api/todo";

let cont = document.getElementById("container");
let page = 1;
let getData = async () => {
  let res = await fetch(`${url}?_page=${page}&_limit=10`);
  res = await res.json();
  console.log(res);
  renderDom(res);
};

getData();

let card = (t, s, id) => {
  let div = document.createElement("div");
  div.setAttribute("id", id);
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let togglebtn = document.createElement("button");
  let deletebtn = document.createElement("button");
  let inpt = document.createElement("input");
  inpt.setAttribute("id", "tick");
  inpt.type = "checkbox";
  h3.innerText = t;
  p.innerText = s;
  togglebtn.innerText = "Toggle";
  togglebtn.onclick = () => {
    toggleTodo(id);
  };
  deletebtn.innerText = "Delete";
  deletebtn.onclick = () => {
    deleteTodo(id);
  };
  inpt.addEventListener("click", () => {
    completetodo(id);
  });

  div.append(h3, p, togglebtn, deletebtn, inpt);
  return div;
};

let renderDom = (data) => {
  cont.innerHTML = null;
  data.forEach(({ title, status, id }) => {
    let todo = card(title, status, id);
    cont.append(todo);
  });
};

let addTodo = async () => {
  let t = document.getElementById("todo").value;
  let todo = {
    title: t,
    id: Date.now() + t,
    status: false,
  };

  let res = await fetch(url, {
    method: "POST", //what to do
    body: JSON.stringify(todo), //what to post
    headers: {
      "Content-type": "application/json",
    },
  });
  getData();
};

let toggleTodo = async (id) => {
  let todo = await fetch(`${url}/${id}`); //GET
  todo = await todo.json();
  let data = { status: !todo.status };
  let res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getData();
};

let deleteTodo = async (id) => {
  let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  getData();
};

let completetodo = async (id) => {
  let ticklist = document.getElementById("tick").value;
  let res = await fetch(`${url}/${id}`);
  let datalist = await res.json();
  console.log(datalist);

  let tickArr = [];
  //   let tickArr =JSON.parse(localStorage.getItem("tickup"))||[]
  tickArr.push(datalist);
  //   localStorage.setItem("tickup",JSON.stringify(tickArr))
  console.log(tickArr);
  const divlist = document.getElementById(id);
  divlist.style.backgroundColor = "green";
  alert("task completed");
};

// /posts?_sort=views&_order=asc

let sort = async () => {
  let res = await fetch(`${url}?_sort=title&_order=asc`);
  res = await res.json();
  renderDom(res);
};

let sortHtoL = async () => {
  let res = await fetch(`${url}?_sort=title&_order=desc`);
  res = await res.json();
  renderDom(res);
};

let filter = async () => {
  let res = await fetch(`${url}?status=true`);
  res = await res.json();
  renderDom(res);
};

let prev = () => {
  page--;
  getData();
};

let next = () => {
  page++;
  getData();
};