// set timeoout

function test(){

    document.body.append("Hello, I am here");
    
}
console.log(1);
console.log(2);
console.log(3);
console.log(4);


setTimeout(test,5000);


//set interval

function test(){

    document.body.append("Hello, I am here");


  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);

    
}
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


//setInterval(test,3000);
clearInterval(id);























setTimeout( function(){

}, 1000)
// the second argument is the time in ms after which,
// the function in the first argument gets executed 


setInterval( function(){
    
}, 1000)
// the second argument is the time period in ms which,
// the function in the first argument gets executed repeatedly


timeoutVar =setTimeout( function(){
    
}, 1000)

intVar =setInterval( function(){
    
}, 1000)

clearTimeout(timeoutVar)
// Clear the timout. or stops the setTimeout from executing
clearInterval(intVar)
// Clear the interval. or stops the setInterval from executing


