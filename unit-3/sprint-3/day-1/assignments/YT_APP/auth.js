class User {
  constructor() {}

  #checkUsername(username) {
    let value = username.includes("#") ? false : true;

    return value;
  }

  #checkPassword(password) {
    let value = password.length > 8 ? true : false;

    return value;
  }

  async Signup(n, e, u, p, m, d) {
    let isvalided = this.#checkUsername(u) && this.#checkPassword(p);

    if (isvalided) {
      this.name = n;
      this.email = e;
      this.password = p;
      this.username = u;
      this.mobile = m;
      this.description = d;

      let actual_data = JSON.stringify(this);

      try {
        let res = await fetch(
          `https://masai-api-mocker.herokuapp.com/auth/register`,
          {
            method: "POST",

            body: actual_data,

            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let data = await res.json();
        console.log("data:", data);
    //     // if(data.message == "Registration Success"){
    //     //   let res1 = document.getElementById("register-form")
    //     //   res1.style.display="none";
 
    //       let res2 = document.getElementById("login-form")
    //        res2.style.display ="block";
    //  }
      } catch (error) {
        console.log("err:", err);
      }
    }
  }
  async Login(u, p) {
    
    this.username = u;
    this.password = p;
   
    let actual_data = JSON.stringify(this);
    
    try {
      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",{
          method: "POST",

          body: actual_data,

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await res.json();
       console.log("data:", data);
      let token = data.token;
      this.getProfile(this.username, token);
    //   if(data.token){
    //     alert("Login Successfully")
    //     location.href = "./search.html"
 
    // }
    } catch (error) {
      console.log("error:", error);
    }
  }

  async getProfile(username,token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    let data = await res.json();
    console.log("data:", data);
  }
}

let u1 = new User();

function Register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const mobile = document.getElementById("mobile").value;
  const description = document.getElementById("description").value;

  u1.Signup(name, email, username, password, mobile, description);

}

function Login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  u1.Login(username, password);

}