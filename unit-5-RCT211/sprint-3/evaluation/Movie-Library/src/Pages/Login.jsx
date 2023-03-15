import React, { useState } from "react";
import {useDispatch}from "react-redux";
import { login } from "../Redux/AuthReducer/action";
// Complete the logic do not remove any data-testid

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const dispatch=useDispatch()

  const handleLogin=()=>{
    let userData={email,password}
    dispatch(login(userData))

  }

  return (
    <div>
      <h2>Log In</h2>
      <input onChange={(e)=>{setEmail(e.target.value)}} value={email} data-testid="user-email" type="email" placeholder="Email" />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}

      />
      <button onClick={handleLogin} data-testid="user-login">Log In</button>
    </div>
  );
};