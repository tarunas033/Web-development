// Post request 
//DELETE
//PATCH

//SORTING :- Query params
//FILTER :-  Query params

// user ={
//     name : String,
//     batch : String,
//     course : String,
//     age : Number,
//     mobile : Number,
//     score : Number
// }

const api ="http://localhost:3000/user";

// fetching the user from server and go to the dom
let showUser = async () => {
    let res = await fetch(api);
    res = await res.json();
    renderDom(res);

}

//cccreate a div for a user with all details and return that div
   let userCard = () => {
    let div = document.createElement("div")
   }

//Get the container and append all the users there
 let renderDom = () => {
    data.forEach((e) => {

    })

 }
let addUser = async(e) => {
    e.preventDefault();

    let form = document.getElementById("user_form")
    let name = form.name.value;
    let batch = form.batch.value;
    let course = form.course.value;
    let age = +form.age.value;
    let mobile = +form.mobile.value;
    let score = +form.score.value;

    let user = { name, batch,course , age, mobile, score };

    // console.log(user);
    await fetch(api, {
        method : "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type" : "application/json" ,

        },

    });
    form.name.value = null ;
    form.batch.value = null ;
    form.course.value = null ;
    form.age.value = null ;
    form.mobile.value = null;
    form.score.value = null ;

}