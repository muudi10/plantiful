import { useState, useEffect, createContext } from "react";
import registerUSer from '../dataContext/register'
import getPlant from '../dataContext/API'
export const DataContext = createContext();


export const DataContextProvider = (props) => {
    // user registeration
    const [message, setMessage] = useState(false);
    const initialState = {
      fields: {
        username:"",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
    };
    const [fields, setFields] = useState(initialState.fields);
    const [plants, setPlants] = useState({})
    const handleFieldChange = (event) => {
      event.preventDefault();
      setFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };
    const handleSubmit =(e)=>{
        e.preventDefault()
        return registerUSer(fields, setMessage)
      }
useEffect(()=>{
  getPlant(setPlants)
},[])
console.log(plants)

      const value = {
        fields,
        setFields,
        message,
        setMessage,
        handleFieldChange,
        handleSubmit,
        plants
      };
      console.log(fields)

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
