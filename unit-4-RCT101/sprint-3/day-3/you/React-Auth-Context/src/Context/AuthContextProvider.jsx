import React, {useState,createContext} from 'react'

export const AuthContext=createContext()

export default function AuthContextProvider({children}) {
  let obj={
    Auth:false,
    token:"",
    error:null,
    loading:false,
  }
 
  const [auth, setAuth]= useState(obj)
  return (
    <div>
      <AuthContext.Provider value={{auth,setAuth}}>
             {children}
      </AuthContext.Provider>
    </div>
  )
}