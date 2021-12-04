import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DataContextProvider} from './dataContext/DataContext'
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider >
      
        <App />
       </DataContextProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
