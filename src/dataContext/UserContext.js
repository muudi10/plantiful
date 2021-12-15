import { useState, useEffect, createContext } from "react";
import ApiServices from "./ApiServices";
export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const initialState = {
    loginFields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const LocalToken = localStorage.getItem("token")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState(initialState.alert)
  const [loginField, setLoginField] = useState(initialState.loginFields);
  const [token, setToken] = useState(LocalToken)


  const handleLogin = (e) => {
    e.preventDefault()

    setLoading(true)
    setAlert({message: "", isSuccess: false})
        ApiServices.userLogin(loginField, setUser, setIsLoggedIn )

  };
  const handleLoginInputChange = (e) => {
    e.preventDefault()

    setLoginField((prev) => ({
      ...prev,
      // eslint-disable-next-line no-restricted-globals
      [event.target.name]: event.target.value,
    }));
  };

  
  const values = {
    token,
    isLoggedIn,
    user,
    loginField,
    handleLogin,
    handleLoginInputChange,
    alert,
    setIsLoggedIn,
    setUser
    
  };

  return (
    <UserContext.Provider value={values}>  {props.children}   </UserContext.Provider>
  );
};
