// Write all the Javascript here
let form=document.querySelector("form");
let tbody=document.querySelector("tbody");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj={
        name:form.name.value,
        category:form.category.value,
        brand:form.brand.value,
        price:form.price.value,
        delivery:form.deliveredBy.value,
    
    }
    console.log(obj);
display(obj);
})
    function display(data){
        let tr=document.createElement("tr");

        let productname=document.createElement("td");
        productname.innerText=data.name;
        if(productname.innerText==""){
            alert("Fill all input fields")
            display();
        }

        let category=document.createElement("td");
        category.innerText=data.category;
        if(category.innerText==""){
            alert("Fill all input fields")
            display();
        }


        let brand=document.createElement("td");
        brand.innerText=data.brand;
        if(brand.innerText==""){
            alert("Fill all input fields")
            display();
        }


        let price=document.createElement("td");
        price.innerText=data.price;
        if(price.innerText==""){
            alert("Fill all input fields")
            display();
        }


        let delivery=document.createElement("td");
        delivery.innerText=data.delivery;
        if(delivery.innerText==""){
            alert("Fill all input fields")
            display();
        }

        let segment1=document.createElement("td");
        segment1.innerText=segment(data.price);
        if(segment1.innerText==""){
            alert("Fill all input fields")
        }

        let dlt=document.createElement("td");
        dlt.addEventListener("click",function (e){
            e.target.parentNode.remove();
         })
        dlt.innerText="Delete";
        tr.append(productname,category,brand,price,delivery,segment1,dlt);
        tbody.append(tr);
}
function segment(Total_price){
    if(Total_price>1000){
        return "Expensive";

    }else{
        return "Not-Expensive";

    }

}