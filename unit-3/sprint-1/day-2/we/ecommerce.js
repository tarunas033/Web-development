








function nikeProduct(n,p){
    this.name=n;
    this.price=p;
}
// let p1=new NikeProduct('football',1999);
    let arr = [];

function addProduct(e){
    e.preventDefault();

    let form=document.getElementById('product_form');


    let name=form.name.value;
    let price=form.price.value;



    let p1 = new nikeProduct(name,price);
    arr.push(p1);
   console.log('arr:',arr) ;
   
}
