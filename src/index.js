import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import { UserContextProvider } from "./dataContext/UserContext";


ReactDOM.render(
  <React.StrictMode>
      <UserContextProvider > 
         <App />
      </UserContextProvider>
       
  
  </React.StrictMode>,
  document.getElementById('root')
);
