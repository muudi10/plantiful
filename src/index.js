import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import { UserContextProvider } from "./dataContext/UserContext";
import { DataContextProvider } from "./dataContext/DataContext";


ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider > 
       <UserContextProvider > 
         <App />
      </UserContextProvider>
    </DataContextProvider>
     
       
  
  </React.StrictMode>,
  document.getElementById('root')
);
