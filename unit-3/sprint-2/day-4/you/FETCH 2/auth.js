function User(name,email,password,username,mobile,description){
    this.name=name;
    this.email=email;
    this.password=password;
    this.username=username;
    this.mobile=mobile;
    this.description=description;
};



function getinputVlaue(id){
    return document.getElementById(id).value
}
async function register(){
    let input=getinputVlaue("Name");
    let email=getinputVlaue("Email");
    let password=getinputVlaue("Password");
    let username=getinputVlaue("Username");
    let mobile=getinputVlaue("Mobile");
    let description=getinputVlaue("description")

    let user=new User(Name,Email,Password,Username,Mobile,Description)
    user=JSON.stringify(user);
    let register_api=`https://masai-api-mocker.herokuapp.com/auth/register`;
    let response=await fetch(register_api,{
        method:"POST",
        body:user,
        headers:{
            "Content-Type":"application/json",
        }
    })

    let data=await response.json();
    console.log(data)
}

async function login (){
    let login_data={
        username:document.getElementById("login_username").value,
        password:document.getElementById("login_password").value,
    };
    login_data=JSON.stringify(login_data);
    let login_api=`https://masai-api-mocker.herokuapp.com/auth/login`

    let response=await fetch(login_api,{
    method:"POST",
    body:login_data,
    headers:{
        "content-Type":"application/json"
    }
    });
    let data=await response.json();
    console.log(data);
    let username=document.getElementById("login-username").value;
    getprofile(username,data.token)

}


// compare register and login values
 async function getprofile(username,token){
    let api=`https://masai-api-mocker.herokuapp.com/user/${username}`

    let response=await fetch(api,{
        headers:{
            "content-Type":"application/json",
            Authorization:`Bearer ${token}`,
        }
        });
        let data=await response.json();
        console.log(data);
}