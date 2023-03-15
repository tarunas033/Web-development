//single Threaded

//synchronous

//setTimeout:-One Time

//setInterval:-Repeatedly

let images = [
    "https://images.unsplash.com/photo-1664735628867-093d27a9e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1665049626056-846cc257fcce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2ZW5nZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2ZW5nZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
];

// let index = 0;

// let slideShow = () => {

//     let container = document.getElementById("container");
   

//     if(index == images.length){
//         index=0;
//     }
// setInterval(() => {
//     container.innerHTML = null ;
//     let image =document.createElement("img");
//     image.src = images[index];
//     container.append(image);
//     index++;
// }, 3000);
       
// }
// slideShow();

//clearInterval
//clearTimeout
// what is the difference between arguments and parameters
// console.log("Hello");

// setTimeout(() => {
// console.log("Hey");
// },1000)

//console.log("Hii")

function slideShow(){

    let container = document.getElementById("container");

    container.innerHTML = null;
    
    let index = 0;
    
    let img = document.createElement("img");
    
      img.src= images[0];
    
      container.append(img);
    
     index = index + 1 ;
    
     setInterval(function (){
      if(index===4){
        index = 0;
      } 
      img.src= images[index];
       index = index + 1;
    
       container.append(img);
    },2000);
    
    }
    slideShow();






