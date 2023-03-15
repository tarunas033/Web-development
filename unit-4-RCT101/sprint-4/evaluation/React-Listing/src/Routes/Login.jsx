import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'
import { useState , useContext } from 'react'

function Login() {
  const [ btnDis , setBtnDis ] = useState(false)  

  const { Login } = useContext(AuthContext)
  const reDirect = useNavigate()
  const [ formState , setFormState  ] = useState({
    email:'',
    password:''
  });

//eve.holt@reqres.in  cityslicka

const HandleChange = ( e ) =>{

  const { type , value } = e.target;
  setFormState({...formState,[type]:value})
  
}

const HandleSubmit = (e) =>{
  setBtnDis(true)
  e.preventDefault()
  fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify(formState),
    headers:{
        'Content-Type': 'application/json'
    }
})
.then((res)=>{ return res.json()})
.then((res)=>{  
  // console.log('iam in login' , res.token);
   Login(res.token)
   reDirect('/dashboard')
})
.catch((err)=>{
  // Error(err)
  console.log(err);
})
}

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input onChange={HandleChange} value={formState.email} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
            value={formState.password}
            onChange={HandleChange} 
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button  disabled={btnDis} onClick={HandleSubmit} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>

        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;