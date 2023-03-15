function Listing(name, category, image, price, sold) {
   this.name = name;
   this.category = category;
   this.imageUrl = image;
   this.price = price;
   this.sold = sold || false;

}

 function getFormData(event) {

 event.preventDefault();
 let form = document.getElementById("form");
 let name = form.name.value;
 let category = form.category.value;
 let image = form.image.value;
 let price = form.price.value;

   addListing(name, category, image, price)

 }

function addListing(input, category, image, price, sold) {

let productArr = JSON.parse(localStorage.getItem("Products")) || [];
productArr.push(new Listing(input, category, image, price, sold));
localStorage.setItem("Products",JSON.stringify(productArr))


}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  let form = document.getElementById("form");
  form.addEventListener("submit",(event) => {
    getFormData(event)
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
