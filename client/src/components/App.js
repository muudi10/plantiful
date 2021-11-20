import {DataContextProvider} from '../data/context/DataContext'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Main from './main/Main'
function App() {
   
  
  
  return (

   < DataContextProvider >
    <Main />  
   </DataContextProvider>
     
  
 
  );
}

export default App;
