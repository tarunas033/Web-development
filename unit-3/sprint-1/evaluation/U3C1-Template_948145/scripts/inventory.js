
function appendData() {

    let data=JSON.parse(localStorage.getItem("data")) || [];

    let container =document.getElementById("products_data");
        container.innerHTML = null;
        data.forEach(function (el,index){
          let div =document.createElement('div');
        
          let img= document.createElement('img');
             img.src=el.image;

          let p1=document.createElement('p');
          p1.innerText=el.name;

          let p2=document.createElement('p');
          p2.innerText=el.price;

          let p3=document.createElement('p');
          p3.innerText=el.brand;

          let btn=document.createElement('button');
          btn.innerText="Remove Product";

          btn.addEventListener('click',function(){
            remove(index);
          })
          div.append(img, p1, p2, p3, btn)
        container.append(div);
        })

}
appendData();

 function remove(index) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let newData = data.filter(function (el, i) {
        if (i == index) {
            console.log(index);

        } else {
            return i != index;
        }
    });
    localStorage.setItem("data", JSON.stringify(newData));
    appendData();
}
