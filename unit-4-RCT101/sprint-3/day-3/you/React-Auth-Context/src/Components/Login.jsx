import React from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { useState, useContext} from 'react';
import { Dashboard } from "./Dashboard";

export default function Login() {
    const { auth, setAuth } = useContext(AuthContext);
    const [data, setData]=useState({});
   let obj={
    email:"",
    password: "",
   };
   const [text, setText]= useState(obj)

   const handleChange=(e)=>{
   setText({...text, [e.target.type]: e.target.value });
   }

  
   const getData=async(text)=>{
    try {
        let res= await fetch(`https://reqres.in/api/login`,{
            method :"POST",
            body: JSON.stringify(text),
            headers:{
                "Content-Type": "application/json",
            },
        });
        res = await res.json();
        // console.log(res.token)
        setAuth({token:res.token,Auth:true})
    } catch (err) {
        console.log(err);
        setData({error:err})
    }
   }

   {auth.Auth?<Dashboard/>:<Login/>}

   const handleSubmit=(e)=>{
    e.preventDefault()
    getData(text);
  }
    return (
        <div>
            <form data-testid="auth_form" onSubmit={handleSubmit} >
                <input
                    type="email"
                    data-testid="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    data-testid="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
                <br />
                <input type="submit" />

            </form>
        </div>
    )
}