function MyArray() {
  // Write your code here

  this.length = 0;
  Object.defineProperty(this,"length" ,{
    value:0,
    enumerable:false,
    writable:true,
  })
}

MyArray.prototype.push = function (el) {
  this[this.length] = el;
  this.length++;
  return this.length;
}

MyArray.prototype.pop = function () {
// Do not change this
  this.length --;
  var popEle = this[this.length];
  delete this[this.length];
  return popEle;

}
var arr = new MyArray ();
arr.push("Beckham");
arr.push("Marcelo");
arr.push("pepe");
arr.pop();

console.log(arr);

MyArray.prototype.map = function (callback) {

  const resultArray = new MyArray();

for (let index=0; index < this.length; index++){
  resultArray.push (callback(this[index], index , this)) ;

  }
  return resultArray;

};

let arr1 = [1 ,2, 3];
let num = arr1.map(function(value){
  return value = 2;
});
console.log(num) ;


MyArray.prototype.filter= function (callback) {

  const filterArr = new MyArray();

for (let index=0; index < this.length; index++){
  if(!!callback(this[index], index , this)){
     filterArr.push(this[index]);
  }
}
  return filterArr;
};

let name = ["Dhoni" ,"Surya", "Rohit"];
let filterName = name.filter(function(name) {
  return name != "Surya";
})

  console.log(filterName);

export default MyArray;
