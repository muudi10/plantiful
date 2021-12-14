import { useState, useEffect, createContext } from "react";
import registerUSer from '../dataContext/register'
import { useParams } from "react-router-dom";
import getPlant from '../dataContext/API'
import getPlantByName from './plantbyname'
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
    };
    const [fields, setFields] = useState(initialState.fields);
<<<<<<< HEAD
    const [plants, setPlants] = useState([])
=======
    const [plants, setPlants] = useState({})
    const [plantByName, setPlantByName] = useState([]);
>>>>>>> 8c8b4a41f4f1097164a3b32dae003a772bacb929
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
        return registerUSer(fields, setMessage)
      }

      const handleEnter = (event) => {
        if (event.key === "Enter") {
          // return handlePlantSearch();
        }
      };
       console.log(searchTerm)
      const handleInputChange = (event) => setSearchTerm(event.target.value);
 
  // const handlePlantSearch = () => {
  //   getForecast(searchText, setSelectedDate, setForecasts, setLocation);
  //   setSearchText("");
  // };
 const { latinname } = useParams();

useEffect(()=>{
  getPlant(setPlants)
  getPlantByName(setPlantByName, path)
},[])
console.log(plants)
console.log(path)

      const value = {
        fields,
        setFields,
        message,
        setMessage,
        handleFieldChange,
        handleSubmit,
        plants,
        plantByName,
        setPlantByName,
        searchTerm,
        setSearchTerm,
        setPath,
        handleEnter,
        getPlantByName,
        plantiful,
        handleInputChange,
        // handlePlantSearch
      };
      console.log(fields)

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
