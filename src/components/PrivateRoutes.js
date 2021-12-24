import React, {useContext} from "react";
import { UserContext } from "../dataContext/UserContext";
import { UserContextProvider } from "../dataContext/UserContext";
import { Navigate } from "react-router-dom";



function PrivateRoute ({ children}) {
    const {token } = useContext(UserContext)
  
    return (
        <UserContextProvider>
    {token ? children : <Navigate to="/auth/login"/>}
    </UserContextProvider>
    )
}

export default PrivateRoute;