import { useState, useEffect, createContext } from "react";
import getData from './API' 
export const DataContext = createContext();

export const DataContextProvider = (props) =>{
const [dataSource, SetDataSource] = useState([])
const [searchTerm, setSearchTerm] = useState()
const handleInputChange = (event) => setSsearchTerm(event.target.value);
const handleEnter = (event) => {
  if (event.key === "Enter") {
  }
}; 



useEffect(() =>{
  getData(SetDataSource, searchTerm, setSearchTerm)
},[])

const values={dataSource, handleInputChange}
return (
  <DataContext.Provider value={values} > {props.children}</DataContext.Provider>
)

}


