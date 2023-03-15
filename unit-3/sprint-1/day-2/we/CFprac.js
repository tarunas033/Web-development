// let person={
//     name:"john",
//     age:27,
//    myName:function (){
//     console.log(this);
//     console.log(this.age);
//    }
// }
//  console.log(this.name);
// person.myName()

// agr hm upr this.person ko htake this krenge to pura function show ho jaega
// iske aandr jo this h ye person ko point krega
// global function ka owner (person h)

let person={
    name:"john",
    age:27,
   myName:function (){
    console.log(this) // this = person object
    
   }
}
function myName(){
     console.log(this) // this = global object
}
myName()

// //////////////////////////////////////////////

function Player(n,t) {
    this.name=n,
    this.team=t
}

// this refers to the parent object
var myPlayer = new Player('Messi','Barcelona')
var myPlayer2= new Player ('Ronaldo','Juventus')

console.log('myPlayer:',myPlayer);
console.log('myPlayer2:',myPlayer2);







