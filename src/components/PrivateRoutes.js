import React, {useContext, useEffect} from "react";
import { UserContext } from "../dataContext/UserContext";
import { UserContextProvider } from "../dataContext/UserContext";
import { Routes, Route } from "react-router-dom";

/*
            setInterval was used in order to refresh the page constantly
        in order to have the "logout" button show immediately in place of
        "login", as soon as user logs out.
        */

function PrivateRoutes () {
    const {isLoggedIn, user, setUser } = useContext(UserContext)
  
    return (
        <UserContextProvider>
            <Routes>
<Route >


</Route>

</Routes>
        </UserContextProvider>
    )
}

export default PrivateRoutes;