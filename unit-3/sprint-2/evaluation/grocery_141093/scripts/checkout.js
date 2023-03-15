function submit() {
    setTimeout(() => {
       alert("Your order is accepted");
    },0);

    setTimeout(() => {
        alert("Your order is being Packed");
     },3000);

     setTimeout(() => {
        alert("Your order is in transit");
     },8000);

     setTimeout(() => {
        alert("Your order is out for delivery");
     },10000);

     setTimeout(() => {
        alert("Order is delivered");
     },12000);
    }

/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
