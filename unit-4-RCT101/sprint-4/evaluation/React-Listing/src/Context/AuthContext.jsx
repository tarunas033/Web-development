import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();
function AuthContextProvider({children}) {
    const [authState, setauthState] = useState({
    isAuth: false,
    token: null,
  });

  const Logout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };
  const Login = (tok) => {
    setauthState({
      ...authState,
      isAuth: true,
      token:tok,
    });
  };
 

  return (
    <AuthContext.Provider value={{ authState,Login,Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;