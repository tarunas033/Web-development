let category = document.getElementById("categories").value;

category.addEventListener("change",() => {

    if(category.value == "shoes"){
        window.location.href ="./shoe.html"
    }

    if(category.value == "trousers"){
        window.location.href ="./trouser.html"
    }

    if(category.value == "t-shirts"){
        window.location.href ="./t-shirt.html"
    }

})

const submit = () => {

    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
   if(category == "shoes"){
        let product1 = {
             image,
             category,
             price,
        }
    
        let data1 = JSON.parse(localStorage.getItem("shoes")) || [];
        data1.push(product1);

        localStorage.setItem("shoes",JSON.stringify(data1));
        document.getElementById("image").value = ""
        document.getElementById("category").value = ""
        document.getElementById("price").value = ""

        }
   else if (category == "trousers"){
        let product2 = {
            image,
            category,
            price,

        }

        let data2 = JSON.parse(localStorage.getItem("trousers")) || [];
        data2.push(product2);

        localStorage.setItem("trousers",JSON.stringify(data2))
        document.getElementById("image").value = ""
        document.getElementById("category").value = ""
        document.getElementById("price").value = ""
    }

    else if(category == "t-shirts"){
        let product3 = {
            image,
            category,
            price,

        }

        let data3 = JSON.parse(localStorage.getItem("t-shirts")) || [];
        data3.push(product3);

        localStorage.setItem("t-shirts",JSON.stringify(data3))
        document.getElementById("image").value = ""
        document.getElementById("category").value = ""
        document.getElementById("price").value = ""
    }

    }



