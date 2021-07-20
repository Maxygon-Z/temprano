import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Importación framework materialize
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'

import 'jquery/dist/jquery'
ReactDOM.render(
  <React.StrictMode>
          <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
        </link>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
