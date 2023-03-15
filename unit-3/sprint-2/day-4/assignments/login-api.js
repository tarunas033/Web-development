
function getInputValue(){

    let value=document.getElementById(id).value;

    return value;
}

  function user(n, e, p, u, m, d){
    this.name = n;
    this.email = e;
    this.password = p;
    this.username = u;
    this.mobile = m;
    this.description = d;
}

async function Register(){
    const name = getInputValue('name');
    const email = getInputValue('email');
    const password = getInputValue('password');
    const username = getInputValue('username');
    const mobile = getInputValue('mobile');
    const description = getInputValue('description');


let user_data = new User (name,email,password,username,mobile,description)
    console.log('user_data:',user_data);
};

const register_url =`https://masai-api-mocker.herokuapp.com/auth/register`

let res = await fetch(register_url, {
 method: 'POST',

body: JSON.stringify(user_data),

headers: {
    'Content-Type' : 'application/json',
 },
});

let data = await res.json();
console.log('data:',data);
}

async function Login(){
    let login_data ={
        username:document.getElementById('login-Username').value,
        password:document.getElementById('login-password').value,
    };

const login_url = `https://masai-api-mocker.herokuapp.com/auth/login`


let res = await fetch(login_url, {
    method: 'POST',

    body:JSON.stringify(login_data),

    headers: {
        'Content-Type' : 'application/json',
    },
});

let data = await res.json();
let token = data.token;
console.log('data:',data);
getProfile(login_data.username,token)
}

function getProfile(usernmae,token) {

    let api =`https://masai-api-mocker.herokuapp.com/user/${username}`

    let res =  await fetch(api, {

        headers: {
            'Content-Type' : 'application/json',

            Authorization: `Bearer ${token}`,
        },
    });

    let data = await res.json();
    console.log('data:',data);
}





























