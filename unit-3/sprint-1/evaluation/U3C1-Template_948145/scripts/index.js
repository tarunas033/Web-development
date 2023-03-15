//store the products array in localstorage as "data"

function product(n, p, i, b){

    this.name = n ;

    this.price = p;

    this.image = i;

    this.brand = b;

}

function storeData(event) {

    event.preventDefault();

    let form=document.getElementById("form");
    
    let data=JSON.parse(localStorage.getItem("data")) || [];

    let name=form.product_name.value;

    let price =form.product_price.value;

    let image=form.product_image.value;

    let brand=form.product_brand.value;

    //console.log( name, price, image, brand);


let p1=new product (name, price , image, brand);

console.log(p1);

data.push(p1);

localStorage.setItem('data',JSON.stringify(data)) ;


}