import { createContext, useState } from "react";
import   ApiServices from './ApiServices';
export const UserRegistration = createContext();
export const UserRegContextProvider = (props) => {
    const initialState = {
        fields: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
      };
      const [message, setMessage] = useState(false);
      const [fields, setFields] = useState(initialState.fields);
      const handleFieldChange = (event) => {
        event.preventDefault();
        setFields((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };
      const handleSubmit =(e)=>{
        e.preventDefault()
         ApiServices.userRegister(fields, setMessage)
        }
        const value = {
            message,
            fields,
            handleFieldChange,
            handleSubmit
        }
    return (
        <UserRegistration.Provider value={value}>
        {props.children}
        </UserRegistration.Provider>
    )
}