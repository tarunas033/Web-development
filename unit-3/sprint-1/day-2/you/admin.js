

function myProduct(n,c,i,p,g,s){
       
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
    this.sold=s;

}

let newArr=JSON.parse(localStorage.getItem("Products")) || [];
function addProduct(e){
e.preventDefault();
let form=document.querySelector("#product_form")

let name=form.name.value;

let category=form.category.value;

let image=form.image.value;

let price=form.price.value;

let gender=form.gender.value;

let sold=form.sold.value;


let Product=new myProduct(name, category, image, price, gender, sold);
newArr.push (Product);
console.log('newArr:',newArr);

localStorage.setItem("Products",JSON.stringify(newArr));
}
function OnSold(e){
    document.querySelector("#sold").value = e.target.checked
    
}