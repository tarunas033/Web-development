import { useContext } from "react";
import { AuthContext} from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}) {

    const {authState} = useContext(AuthContext)

    if ( authState.isAuth === false ) {
        return <Navigate to = "/login"/>
    } 
    else {
        return children
    }
 
}

export default PrivateRoute;
