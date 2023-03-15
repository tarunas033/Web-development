// POST request 
// DELETE
// PATCH
// SORTING :-Query Params
// FILTER :-Query Params

const api="https://radiant-citadel-74395.herokuapp.com/api/user";
let page = 1;
// Fetching the user from server and show to DOM
let showUser=async()=>{         
    let res= await fetch(`${api}?_page=${page}&_limit=5`);
    res= await res.json();
    renderDom(res)
}
showUser();


// Create a div for a user with all details and return that div

let userCard=({id,name, batch, course, age, mobile, score})=>{
    let div=document.createElement("div")
    div.setAttribute("class","card")
    let n = document.createElement("h3")
    let b = document.createElement("p")
    let c = document.createElement("p")
    let a = document.createElement("p")
    let m = document.createElement("p")
    let s = document.createElement("p")
   let deleteBtn=document.createElement("button")
   let updateBtn=document.createElement("button")

    n.innerText=name;
    b.innerText=`Batch:${batch}`
    c.innerText=`Course:${course}`
    a.innerText=`Age:${age}`
    m.innerText=`Mob:${mobile}`
    s.innerText=`Score:${score}`
  deleteBtn.innerText="Delete";
  updateBtn.innerText="Update";

  deleteBtn.onclick=()=>{
    deleteUser(id)

  }
  updateBtn.onclick=()=>{
    updateScore(id)
  }
  div.append(n,b,c,a,m,s,deleteBtn,updateBtn)
  return div;
}

// Get the container and append all the users there

let renderDom=(data)=>{
    let cont = document.getElementById("container");
    cont.innerHTML=null;
    data.forEach((el)=>{
        let card = userCard(el)
        cont.append(card);
    })
}
let addUser=async(e)=>{
    e.preventDefault();
    let form = document.getElementById("user_form");
    let name=form.name.value;
    let batch=form.batch.value;
    let course=form.course.value;
    let age=+form.age.value;
    let mobile=+form.mobile.value;
    let score=+form.score.value;

    let user={name,batch,course,age,mobile,score}
   let res = await fetch(api,{
   method: "POST",
   body: JSON.stringify(user),
   headers:{
    "Content-Type": "application/json",
   },
   });
  form.name.value=null;
  form.batch.value=null;
  form.course.value=null;
   form.age.value=null;
  form.mobile.value=null;
  form.score.value=null;
}

let deleteUser =async(id)=>{
    await fetch(`${api}/${id}`,{
        method:"DELETE",
    })
    showUser();
}


let updateScore= async(id)=>{
   const newScore = window.prompt("Enter new score");
   let data={score:newScore};
   await fetch(`${api}/${id}`,{
     method:"PATCH",
     body:JSON.stringify(data),
     headers:{
        "Content-Type": "application/json",
     },
   });
   showUser();
}


let sortAsc=async()=>{
  let res= await fetch(`${api}?_sort=age&_order=asc`)
   res=await res.json()
   renderDom(res)
};

let sortDsc=async()=>{
    let res= await fetch(`${api}?_sort=age&_order=desc`)
     res=await res.json()
     renderDom(res)
  };

  let Course=async()=>{
    let selected= document.getElementById("Filter_By_Course").value;
    if(selected==""){
      showUser();
    }else{
      let res=await fetch(`${api}?course=${selected}`)
      res=await res.json()
      renderDom(res)
    }
    
    }

  let prev = () => {
  page--;
  showUser();
};

let next = () => {
  page++;
  showUser();
};