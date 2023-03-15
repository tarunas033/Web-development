
// https://masai-vouchers-api.herokuapp.com/api/vouchers

const add =(e) => {
   //e.preventDefault();

    let arr = [];
   let form =document.getElementById("form");
   let obj={
     name :form.name.value,
     email :form.email.value,
     address : form.address.value,
     wallet : form.amount.value,
   }
       
    
    
    arr.push(obj)

    localStorage.setItem("user",JSON.stringify(arr));
    
}
