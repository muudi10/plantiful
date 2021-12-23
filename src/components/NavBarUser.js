import React, {useContext, useEffect} from "react";
import { UserContext } from "../dataContext/UserContext";
import { UserContextProvider } from "../dataContext/UserContext";
import { Routes, Route } from "react-router-dom";

const NavBarUser = () => {
    const {isLoggedIn, user, setUser } = useContext(UserContext)
    useEffect(() => {
        
        setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
            }, 5000)
    }, [setUser]);
    const logout = () => {
        return localStorage.removeItem("user");
    }
    return (
        <div>
                   <UserContextProvider>
            <Routes>
<Route >


</Route>

</Routes>
        </UserContextProvider>
            
        </div>
    )
}

export default NavBarUser
