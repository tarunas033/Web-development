let counter = 0;

function start(){

    let images = JSON.parse(localStorage.getItem('images'))

    let container =document.getElementById('container')

    let img = document.createElement('img')

    
    //   img.src =images[counter] ;

    //   container.append(img);

    //   counter++;

setInterval(function(){
    if(counter===3) {
        counter=0;
    }

    img.src = images[counter];

    container.append(img);

    counter++;
},3000);

}
