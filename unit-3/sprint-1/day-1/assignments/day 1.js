// primtive data types---->strings , number, boolean

// primitive data type is Immutable

let a=10;

let b=a;

b=20;
//console.log("a:",a);

// Non primitive data types--->objects,functions,arrays

// Non primitive data types is mutable

 let x ={name:"masai"}; //object

 let y=x;

 x.name="masai school";

 console.log("x:",x)


let admin=[1,2,3]   //array

admin[0]='masai';

console.log('admin:',admin);


// js engines is a programme help browser to understand javascript

var name='raj';

// hoisting code
var name;

name='raj';

//global scope
var p=10;




//local scope
function test(){
    var a=10;
    // it can't be happen inside function ----->console.log('a:',a);
    console.log('a:',a);

}
//console.log('a:',a);
test();


// block scope

{
    var q=50;

}
console.log('q:',q)









