
var person={
    name:'john',
    myName:function(){

        console.log(person.name)
    }
}

person.myName();



var person2={
name:'nick',
myName:function(){

    console.log(this.name)  //this=person
}
}

person2.myName();

// this refers to the global as well as the owner object




// 'this' is a global object
function myName() {

    console.log(this)
}
myName();

//syntax of normal function
var nikeProducts(n,p) {
    let obj={}
    obj.name=n;
    obj.price=p;

    return obj;
}
    
let p1=nikeProduct('shoes', 3000)
console.log('p1',p1);

//syntax of constructor function

function Player (n,t){

    //this=myPlayer here
    this.name=n;
    this.team=t
}
//this refers to parent object
var myPlayer= new Player('messi','Barcelona')
var myPlayer2= new Player('Ronaldo','Barcelona')
var myPlayer3= new Player('roger','Barcelona')
var myPlayer4= new Player('Virat','Barcelona')
var myPlayer5= new Player('Ricky','Barcelona')

console.log('myplayer:',myPlayer);
console.log('myplayer2:',myPlayer2);
console.log('myplayer3:',myPlayer3);
console.log('myplayer4:',myPlayer4);
console.log('myplayer5:',myPlayer5);


function nikeProduct (n,p,t){

    //this=myPlayer here
    this.name=n
    this.price=p
    this.type=t
}
//this refers to parent object
var myProducts= new nikeProduct('Jordan','9999','shoes');
var myProducts= new nikeProduct('Tshirt','2999','cloth');


console.log('myProducts:',myProducts)
console.log('myProducts2:',myProducts2);



// with using only 'this' function
//this method save our time
var person={
    name:'john',
}

var person2={
    name:'rahul',

}
function myName() {
    console.log(this.name);
}
myName.call(person); // this = person

myName.call(person2); //this = person2
//jo bhi line 67 invoke krega line 65 will run accordingly
 // Here instead of using above method 
//we can use the below method as we can
 //change the value in invoke function



 var person={
    name:'john',
    myAge(m) {
        this.age=m //this=person
    }
}

var person2={
    name:'rahul',

}
function myAge(m) {

    this.age=m
}
myAge.call(person2,21) // this=person
console.log('person2:','person2')



const kitchen = {
    name: 'kitchen',
    purpose: 'cooking',
  
    cookFood(order, x, y) {
      console.log('x,y:', x, y);
      console.log(`Serving ${order} in ${this.name} `);
    },
  };
  
  const bedroom = {
    name: 'bedroom',
    purpose: 'rest',
  };
  
  const lr = {
    name: 'lr',
    purpose: 'hangout',
  };
  kitchen.cookFood.call(bedroom,'maggie');
  kitchen.cookFood('maggie');
  
  kitchen.cookFood.call(lr, 'maggie', 1, 2);
  
  kitchen.cookFood.apply(lr, ['maggie', 1, 2]);
  
  let x = kitchen.cookFood.bind(lr, 'maggie', 1, 2);
  
   