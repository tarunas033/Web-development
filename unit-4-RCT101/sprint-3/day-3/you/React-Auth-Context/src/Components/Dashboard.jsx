import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const{auth}=useContext(AuthContext)
    return (
        <div >
            <h3 data-testid = "token" >Token: {auth.token}</h3>
            <button data-testid = "logout">LOGOUT</button>
        </div>
    )
}