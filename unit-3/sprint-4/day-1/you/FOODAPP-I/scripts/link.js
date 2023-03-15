function appendFood(data,container){
    container.innerHTML = null;
    
        data.forEach(({img,name})  => {
    
    let div = document.createElement('div')
    
    let p = document.createElement('p')
    p.innerText = name;
    
    let image = document.createElement('img')
    image.src = img;
    
    div.append(image, p, );
       container.append(div);
        })
    }
    export {appendFood}