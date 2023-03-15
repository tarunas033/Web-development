function Student(n, c ,u ,i,b ){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`Ft-Web${b}` ;


}
function storeData(e){
    e.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;


    let s1=new Student(name, course, unit, image, batch);
    //console.log(s1);

    let data=JSON.parse(localStorage.getItem("students")) || [];

    data.push(s1);

    localStorage.setItem("students", JSON.stringify(data));
     console.log(s1);
}


function calculate(){
    let data =JSON.parse(localStorage.getItem("students")) || [];

    let obj={};

    for(let i=0; i<data.length; i++){
        if(obj[data[i].batch]==undefined)  {
            obj[data[i].batch] = 1;

        }
     }
     console.log(obj);
       
}

    function calculate()   {
    let data=JSON.parse(localStorage.getItem("students")) || [];

    let obj={};

    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch])  {
          obj[data[i].batch] =0;  
        }
         else {
          obj[data[i].batch]++;
        }
    }
    // for(let i=0; i<data.length; i++){
    //     obj[data[i].batch]++ ;
    }
    // console.log(obj);
    let count=document.getElementById('count');
    count.innerHTML = null;

    let div=document.createElement('div');
    for(let key in obj){
        let p=document.createElement('span');
        p.innerText=`${key}-${obj[key]} |`;
        div.append(p);
    }
    count.append(div);
    calculate();

