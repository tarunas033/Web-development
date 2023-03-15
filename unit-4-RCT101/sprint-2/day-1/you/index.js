import { array } from "prop-types";

  function MyArray () {
    this.length = 0;
}
  MyArray.prototype.push = function(elem){
    this[this.length] = elem
    this.length++
    return this.length
}
  MyArray.prototype.pop = function(){
    var popElem = this[this.length]
    delete this[this.length]
    return popElem

}
  MyArray.prototype.map = function(cb){
    var result = new MyArray ()
    for(index in this){
        if(this.hasOwnProperty(index)){
            result.push(cb(this[index],  index,  this))
        }
    }
  return result

}
  var arr = new MyArray()

  array.push(100)
  array.push(200)
  arr.push(300)
  arr.pop()


  var res = arr.map (function(val){

   console.log(val)
   return val*val

})
   console.log(res);
