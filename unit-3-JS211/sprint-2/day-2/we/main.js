const url = `https://jsonmock.hackerrank.com/api/articles`

// https://jsonmock.hackerrank.com/api/articles

// https://swapi.dev/api/people/?search

// 1. API
// 2. Fetch
// 3. Promise.all
// 4. Debouncing(closures)


// web API :- Apllication Programming Interface

then((res)  => {
  return res.json();

})

.then((res) => {
    console.log(res);

})

.catch((err) =>{
 console.log("err")
 
}




// Async Await
let getData = async () => {
    try {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
    } catch (error) {
        console.log(err)
    }
}

getData();






