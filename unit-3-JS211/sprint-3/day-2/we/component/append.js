import card from "../component/card.js";

let append = (cont,product_data,card) =>{
    cont.innerHTML = null;
    product_data.forEach(({image,price})  =>{
        let p = card(image,price);
        cont.append(p);
    })
}

export default append;