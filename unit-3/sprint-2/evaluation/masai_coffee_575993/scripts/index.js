// Add the coffee to local storage with key "coffee"
let container=document.getElementById("menu");
async function getData(){
    try{
let res=await fetch(`https://masai-api.herokuapp.com/coffee/menu`)
//console.log(res);
let data=await res.json()
console.log(data)
appendProducts(data)
    }catch(err){
    console.log(err)
}
    }
getData()
let data="";
function appendProducts(data){
    data.forEach(function (el){
        let div=document.createElement("div") ;
        let img=document.createElement("img") ;
        img.src=el.menu.data[0].image;

let p=document.createElement("p");
p.innerText=el.menu.data[0].title;

let img1=document.createElement("img");
img1.src=el.menu.data[1].image;
let p1=document.createElement("p");
p1.innerText=el.menu.data[1].title;

let img2=document.createElement("img");
img2.src=el.menu.data[2].image;
let p2=document.createElement("p");
p2.innerText=el.menu.data[2].title;

let img3=document.createElement("img");
img3.src=el.menu.data[3].image;
let p3=document.createElement("p");
p3.innerText=el.menu.data[3].title;

let img4=document.createElement("img");
img4.src=el.menu.data[4].image;
let p4=document.createElement("p");
p4.innerText=el.menu.data[4].title;

let img5=document.createElement("img");
img5.src=el.menu.data[5].image;
let p5=document.createElement("p");
p5.innerText=el.menu.data[5].title;

let img6=document.createElement("img");
img6.src=el.menu.data[6].image;
let p6=document.createElement("p");
p6.innerText=el.menu.data[6].title;

let img7=document.createElement("img");
img7.src=el.menu.data[7].image;
let p7=document.createElement("p");
p7.innerText=el.menu.data[7].title;

let img8=document.createElement("img");
img8.src=el.menu.data[8].image;
let p8=document.createElement("p");
p8.innerText=el.menu.data[8].title;

let img9=document.createElement("img");
img9.src=el.menu.data[9].image;
let p9=document.createElement("p");
p9.innerText=el.menu.data[9].title;

let img10=document.createElement("img");
img10.src=el.menu.data[10].image;
let p10=document.createElement("p");
p10.innerText=el.menu.data[10].title;

let img11=document.createElement("img");
img11.src=el.menu.data[11].image;
let p11=document.createElement("p");
p11.innerText=el.menu.data[11].title;

let img12=document.createElement("img");
img12.src=el.menu.data[12].image;
let p12=document.createElement("p");
p12.innerText=el.menu.data[12].title;

let img13=document.createElement("img");
img13.src=el.menu.data[13].image;
let p13=document.createElement("p");
p13.innerText=el.menu.data[13].title;

let img14=document.createElement("img");
img14.src=el.menu.data[14].image;
let p14=document.createElement("p");
p.innerText=el.menu.data[14].title;

let img15=document.createElement("img");
img15.src=el.menu.data[15].image;
let p15=document.createElement("p");
p15.innerText=el.menu.data[15].title;

let img16=document.createElement("img");
img16.src=el.menu.data[16].image;
let p16=document.createElement("p");
p16.innerText=el.menu.data[16].title;

let img17=document.createElement("img");
img17.src=el.menu.data[17].image;
let p17=document.createElement("p");
p17.innerText=el.menu.data[17].title;

let img18=document.createElement("img");
img18.src=el.menu.data[18].image;
let p18=document.createElement("p");
p18.innerText=el.menu.data[18].title;

let img19=document.createElement("img");
img19.src=el.menu.data[19].image;
let p19=document.createElement("p");
p19.innerText=el.menu.data[19].title;

let img20=document.createElement("img");
img20.src=el.menu.data[20].image;
let p20=document.createElement("p");
p20.innerText=el.menu.data[19].title;

div.append(img);
        container.append(div)
    })
}


