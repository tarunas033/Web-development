Ques1 - what is the difference between Props and State ?

Ans --> State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. 
Props on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props

ques2 - Explain the useState API ?

Ans -->


ques3 - Explain the how map, filter, reduce work .

 Ans -->  The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

    var new_array = arr.map(function callback(element, index, array) {
     }[, thisArg])

In the callback, only the array element is required. Usually some action is performed on the value and then a new value is returned.

Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]


Filter

The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

Syntax

var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])

The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise. In the callback, only the element is required.

Examples
In the following example, odd numbers are "filtered" out, leaving only even numbers.

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]
In the next example, filter() is used to get all the students whose grades are greater than or equal to 90.

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]


Reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

Syntax
arr.reduce(callback[, initialValue])

The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

accumulator - the returned value of the previous iteration
currentValue - the current item in the array
index - the index of the current item
array - the original array on which reduce was called
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.


Examples
The following example adds every number together in an array of numbers.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10