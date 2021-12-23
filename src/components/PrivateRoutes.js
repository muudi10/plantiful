import React from "react";
import { userContext } from "../dataContext/UserContext";
import { Routes, Route } from "react-router-dom";

const {isLoggedIn, user } = useContext(UserContext)

function PrivateRoutes () {
    return (
        <UserContextProvider>
<Route 


        </UserContextProvider>
    )
}