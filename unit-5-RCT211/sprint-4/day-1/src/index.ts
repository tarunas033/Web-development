
let person: Data = {
    id: 1,
    name: "masai"
}

person.city = "Bangalore";

type company = {name: string, address: string, open: boolean;}

type softwareDev = {f_name: string, company: string, age: number;}

let companies: company[] =[ {
    name: "Masai",
    address: "Bangalore",
    open: true
},
{
    name: "Amazon",
    address: "Bangalore",
    open: true
},
{
    name: "Flipkart",
    address: "Bangalore",
    open: true
}
]

//Record

const address: Record <string, string> = {
    city: "Delhi",
    country: "India",
    state: "Delhi",
    //pin: 28383
}


// Union (OR)

// let arrOfStrOrNum : (number | string)[] = [1, "a"];
let arrOfStrOrNum : Array<number | string> = [1, "a"];


// Intersection (AND)

const masaiStudent: company & softwareDev = {
    name: "Masai",
    address: "Bangalore",
    open: true,
    f_name: "Nitin",
    company: "Masai",
    age: 26
}

type product = {
    id: number;
    p_name: string;
    price: number;
}

type cartitems = {
    id: number;
    store: string;
    products: product[]
}


let cartItems: cartitems[] = [
    {
        id:1,
        products: [{id:1, p_name: "Jeans", price: 1000}],
        store: "Amazon"
    },
    {
        id:1,
        products: [{id:1, p_name: "Jeans", price: 1000}, {id:2, p_name: "Shirt", price: 2000}],
        store: "Amazon"
    }
]


//functions

function sum(a: number, b: number): number{
    return a + b;
}

const printData = ({f_name, company, age}: softwareDev) =>{
    console.log(`${f_name} ${company} ${age}`);
    
}