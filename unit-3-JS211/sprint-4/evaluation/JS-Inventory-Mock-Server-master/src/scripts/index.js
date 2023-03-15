const url =""

document.getElementById("add_product").addEventListener("click",() => {
    post_data();
})
async function post_data(){
    let name = document.getElementById("name").Value;
    let price = document.getElementById("name").Value;
    let description = document.getElementById("description").value;
    let data = document.getElementById("delivery").value;
    let image = document.getElementById("image").value

    let data_obj = {

        name,image,price,description,data,image
    }
    
    let res = await fetch(`${url}`,)
    method: "POST",
    body:JSON.stringify(data_obj),
    headers: {
        "Content-Type": "Application/json"

    }

})