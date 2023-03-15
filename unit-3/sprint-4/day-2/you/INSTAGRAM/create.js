//c03d9a73c0311b016e7553e434e1a207
//https://api.imgbb.com/1/upload
import { navbar } from './components/navbar.js';

console.log('navbar:',navbar);

let navbar_div = document.getElementById('navbar')

navbar_div.innerHTML = navbar ();

let inp = document.getElementById('image');

inp.addEventListener('change',function (){
handleImage(event);

  });

let create_btn =document.getElementById('create_btn');

create_btn.addEventListener('click',function (){
     addPost ();
  })
let image_url;
// New Things to learn
const addPost = async () => {

let caption =document.getElementById('caption').value;

let id = document.getElementById('id').value;

let send_this_data = {

caption ,
id ,
image_url,

};

let res = await fetch (` http://localhost:3000/posts`, {

method :'POST',

body: JSON.stringify(send_this_data) ,

headers : {

  'Content-Type' : 'application/json',
},

 });

 let data = await res.json();
 
 console.log('data:',data);
};

const handleImage = async  (event) => {


    try {

        let image = docment.getElementById('image');
    
        let actual_image = image.files[0];
        // console.log('actual_image:',actual_image);
        let form = new FormData()
         
        form.append('image',actual_image);

        let res = await fetch( `https://api.imgbb.com/1/upload?key=c03d9a73c0311b016e7553e434e1a207`,{
    
        method : 'POST',
        body:form,

    });

    let data = await res.json();
   
    let image_url = data.data.display_url;

    } catch (error) {
        console.log('error:',error)
    }
   


};