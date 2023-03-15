
let img=document.getElementById("img");
//mimicking getting the data
function getData(){
//nature of data ?




return true;
}
// arr.map(function(element,index){

// })
let myPromise=new Promise(function(resolve, reject){

    let data=false ;
    
    //initially we don't have data
    
    setTimeout(function(){
        data=getData()

        if(data) {
            resolve ("sweets")
        } else {
            reject("chappal");
        }
    },3000)
 });

 
//console.log("myPromise:",myPromise);

// if you want to handle success value
myPromise.then(function(res){
    console.log('res:',res);

    img.src="https://i.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp"

});

//if you want to handle reject/error
myPromise.catch(function(err){
console.log('err:',err);
});

myPromise.finally(function(){
    console.log("ran");
})
//1st parameter to promise = callback function :

//resolve = success;
//reject = failed;























