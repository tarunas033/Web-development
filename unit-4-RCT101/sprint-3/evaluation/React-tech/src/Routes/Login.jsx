import { useState , useContext} from "react";
import { useNavigate ,Link } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";


function Login() {

const { loginUser} = useContext(AuthContext)
  const [formState ,setFormState] = useState({
    email : " ",
    password : " ",
    })

const redirect = useNavigate()

const HandleChange = (e) => {

  const { type, value } = e.target;

setFormState({...formState , [type]:value})

}

const HandleSubmit = (e) => {
  e.preventDefault()
 fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(formState),
    headers: {
      "Content-Type": "application/json",
    }
 })
   .then(response => response.json())
   .then((response) => {
    loginUser(response.token)
    console.log("inside logincomp",response.token);
    redirect("/dashboard")
   })
}

return (
    <div>
      <form onSubmit={HandleSubmit} data-testid="login-form">
        <div>
          <label>
            Email
            <input value={formState.email} onChange={HandleChange} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            value = {formState.password}
            onChange = {HandleChange}
             data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
