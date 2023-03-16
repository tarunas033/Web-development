//const isEven = require("is-even");

//console.log(isEven(8));

// const fs=require("fs");

// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)  => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

//console.log("Bye Guys");

//This will give  'Bye Guys' first and the text present in lecture.txt in second line due to its aynchronous behavior

// To solve this problem we will add Sync with fs.readFile   as   'fs.readFileSync'   but with this callback function 
//will not work


const fs=require("fs");

let data

try{

    data = fs.readFileSync("./lecture.txt",{encoding:"utf-8"})

} catch(err){
    
    console.log(err.message);
}
   
    

console.log(data,"Bye Guys");
