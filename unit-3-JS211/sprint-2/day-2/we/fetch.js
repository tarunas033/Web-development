 let api = `https://jsonmock.hackerrank.com/api/articles`

let arroffetch = []

for (let i = 1; i <= 5; i++) {

    let f = fetch(`${api}?page=${i}`).then((res) => {
        return res.json()
    });
    arroffetch.push(f)
}

const fun = async () => {
    let result = []
    
    try {
        let res = await Promise.all(arroffetch)
        for (let data of res) {
            result.push(...data.data)
        }
        append(result)
    } catch (err) {
        console.log(err)
    }
}
fun()


const append = (data) => {
    const container = document.getElementById('container');
    container.innerHTML = null
    data.forEach((el) => {
        const div = document.createElement('div')

        const title = document.createElement('h3');
        title.innerText = `Tiltle: ${el.title}`

        const author = document.createElement('p');
        author.innerText = `Author: ${el.author}`;

        const comments = document.createElement('h3');
        comments.innerText = `Comments: ${el.num_comments}`

        div.append(title, author, comments)
        container.append(div)
    })
}

let sort = async () => {

    let result = []

 try {  
    let res = await Promise.all(arroffetch)
    for (let data of res) {
        result.push(...data.data)
    }
    result.sort((a, b) => {
        a.num_comments - b.num_comments
    })
    append(result)}catch(err){
        console.log(err)
    }
}

const sort = async() => {
  let result = [];
  try {
    let res = await Promise.all(arroffetch);
    for (let data of res) {
      // for of loop
      result.push(...data.data);
    }
    console.log(result)
     result.sort((a, b) => a.num_comments - b.num_comments);
     append(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  
 
};