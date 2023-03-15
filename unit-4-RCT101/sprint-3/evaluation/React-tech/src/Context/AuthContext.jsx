import { useState,createContext } from "react";


export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [authState, setAuthState] = useState({
        isAuth: false,
        token:null
})

const loginUser = (tok) => {
    setAuthState({
        ...authState ,
        isAuth: true,
        token: tok
    })
}
const logoutUser = () => {
    setAuthState({
       ...authState,
        isAuth: false,
        token: null
    })
}

return <AuthContext.Provider value ={{ authState, loginUser ,logoutUser}}>
    {
        children
    }
    </AuthContext.Provider>
}
export default AuthContextProvider;
