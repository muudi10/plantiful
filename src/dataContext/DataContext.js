import { useState, useEffect, createContext } from "react";
import registerUSer from '../dataContext/register'
import { useParams } from "react-router-dom";
import getPlantByName from './plantbyname'
import   ApiServices from './ApiServices';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
    // user registeration
    const plantiful = "plantiful"
    const [path, setPath] = useState()
    const [message, setMessage] = useState(false);
    const initialState = {
      fields: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      loginFields: {
        email: "",
        password: "",
      },
      alert: {
        message: "",
        isSuccess: false,
      },

    };
      const [fields, setFields] = useState(initialState.fields);
  
 
    const [plants, setPlants] = useState([])
    const [plantByName, setPlantByName] = useState([]);
    const [searchTerm, setSearchTerm] = useState()
    
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

      const handleEnter = (event) => {
        if (event.key === "Enter") {
          // return handlePlantSearch();
        }
      };
      const handleInputChange = (event) => setSearchTerm(event.target.value);
 
  // const handlePlantSearch = () => {
  //   getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  //   setSearchText("");
  // };
 const { latinname } = useParams();

useEffect(()=>{
  // ApiServices.getAllPlants(setPlants)
  getPlantByName(setPlantByName, path)
},[])


      const value = {
        fields,

        setFields,

        message,
        setMessage,
        handleFieldChange,
        handleSubmit,
        plants,
        setPlants,
        plantByName,
        setPlantByName,
        searchTerm,
        setSearchTerm,
        setPath,
        handleEnter,
        getPlantByName,
        plantiful,
        handleInputChange,
        ApiServices,
        // loginField, 
        // setLoginField,

        alert
        // handlePlantSearch
      };
   

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
