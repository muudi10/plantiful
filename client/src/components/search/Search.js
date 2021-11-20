import React from 'react'
import { useContext, useState } from 'react'
import {DataContext } from '../../data/context/DataContext'



export default function Search() {

     const {dataSource, setSsearchTerm} = useContext(DataContext)

    const handleInputChange = (event) => setSsearchTerm(event.target.value);
    const handleEnter = (event) => {
      if (event.key === "Enter") {
        return handleCitySearch();
      }
    }; 

    const [searchTerm , setSearchTerm]= useState()
    console.log(dataSource)
    return (
        <div className="search">
         <input type="text" className="search-text"  placeholder="Search"/ >
        </div>
      );
}
