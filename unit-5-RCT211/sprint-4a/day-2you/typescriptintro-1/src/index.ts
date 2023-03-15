// create a type name with a string
type Name = string;

// create a type age with a number
type Age = number;

// create a type isFetching with boolean
type IsFetching = boolean;

// create an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// create an array of strings (using array constructor generic type)
const strings: Array<string> = ["Taruna", "Dheeraj", "Books"];

// create a tuple, which keeps a string as the first value, and boolean as the second
const tuple: [string, boolean] = ["hello", true];

// create an enum
enum UserRole {
  User = "user",
  SuperUser = "superUser",
  Admin = "admin",
  SuperAdmin = "superAdmin",
}

// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
function multiply(x: number, y: number): number {
  return x * y;
}

// create a function that takes 2 arguments, x, y both numbers
// it should divide output (x / y)
function divide(x: number, y: number): number {
  return x / y;
}

// create a function that takes a name and prints it without returning anything
function printName(name: Name): void {
  console.log(name);
}
