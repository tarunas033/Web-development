//  1. what is promise
// 2. what are the status of promise 
// 3. How to create a promise
// 4. How to handle a promise 
// 5. mimic the TatKal Ticket booking

 //anything which takes time ,which might be fulfilled

// rejected or can be pending is a promise

 //fetch/api :-

 //1. Resolve
 //2. rejected
 //3. Pending -->


//  let p = new Promise((resolve,reject) => {
//    resolve("resolved");

//  })   //promise fullfilled

 
//  let p1 = new Promise((reject,resolve) => {
//     // resolve("resolved");
//     resolve("resolved")
    
//   }) //promise rejected

//   // .then & .catch .finally

//   p.then((res) =>{
//     console.log(res); //Resolved
//   })
//   .catch((err) => {
//     console.log(err); //Rejected
//   })
//   .finally(() => {
//     console.log("Hello from finally block");
//   }) // Both cases

//@param number (delay in ms)


sleep(3000)
.then((res) => console.log(res))
.catch((err) => console.log(err))

//1.Create the function sleep
//2.Reject the promise if a param is
// Not a number
//3.Resolve the Promise after delay sec

function sleep(delay){
  return new Promise((res,rej) => {
        if(typeof delay !== "number") {
            rej("Rejected");
        } else {
            setTimeout(() => {
                res("resolved")
            },delay)
        }
      })   
}



// mimic the tatkal Booking system

let seat = 100;

let waiting = 101; //waiting 1

setInterval(() =>{
    waiting--;
},3000)

let submit = () => {

    let name =document.getElementById("name").ariaValueMax;
    waiting++;

    let p = new Promise((res,rej) => {
        setInterval(()=>{
          if(waiting <= seat) {
            res("confirmed");
          }

        },1000)
    })
 p.then((res) => {
    alert(`${name}, Your Ticket is ${res}!`);
 })
}


