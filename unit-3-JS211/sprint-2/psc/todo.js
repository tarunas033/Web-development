class Todo{
    #todo;
    constructor(){
        this.#todo = [];
    }

    get todos(){
        return this.#todo
    }

    set todos(title){
        let t={
            title: title,
            status: false,
            id: Date.now() + title,
        };
        this.#todo.push(t)
    }
    deleteTodo(id){
        this.#todo = this.#todo.filter((el)=> el.id !== id);
    }
    toggleTodo(id){
        this.#todo = this.#todo.map((el)=>
            el.id === id ? {...el, status: !el.status} :el
        )
    }
}

let todo = new Todo();

let addtodo =()=>{
 let task = document.getElementById("todo").value;
 todo.todos = task;
 console.log(todo.todos);
 renderDom(todo.todos)
}

let renderDom =(data)=>{
  let cont = document.getElementById("container")
  cont .innerHTML = null;

  data.forEach(({id, status,title})=>{
     let div = document.createElement("div")
     let h3 = document.createElement("h3")
     h3.innerText = title;

     let p = document.createElement("p")
     p.innerText = status;

     let delete_btn = document.createElement("button")
     delete_btn.innerText = "Delete";
     delete_btn.onclick =()=>{
        todo.deleteTodo(id);
        renderDom(todo.todos)
     }

     let toggle_btn = document.createElement("button")
     toggle_btn.innerText = "Toggle";
     toggle_btn.onclick =()=>{
        todo.toggleTodo(id);
        renderDom(todo.todos)
     }

     div.append(h3, p,delete_btn, toggle_btn)
     cont.append(div)

  })
}