function append (){
    let data=JSON.parse(localStorage.getItem("students")) || [];

     let container=document.getElementById('container');
      container.innerHTML=null;

    data.forEach(function (el){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText=el.name;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener('click',function (){

        })

        div.append(img, p, btn);
        Container.append(div);

    });
}

append();

function remove(index){
   // console.log(index);
   let data= JSON.parse(localStorage.getItem("students")) || [];

   let newData=data.filter(function (el,i) {
    if(i==index){
        //console.log(index);

    let trash=JSON.parse(localStorage.getItem("trash")) || [];
    trash.push(el);
    localStorage.setItem("trash",JSON.stringify("trash"));
   } else {
    return i!== index;
   } 
    
   });
   localStorage.setItem('students',JSON.stringify(newData));
   append()
   //console.log(newData);
}