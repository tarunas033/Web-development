let submit = () => {
    let name = document.getElementById("name").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;

    let product = {
        name,
        brand,
        price,
    };
    // array of objects

    //step 1:- Get the previous data from LS

    let data = JSON.parse(localStorage.getItem("products")) || [];

    //step 2:-Push the new data to the data array

    data.push(product);

     //step 3:- Set the data array to LS

     localStorage.setItem("products",JSON.stringify(data));

     


}
