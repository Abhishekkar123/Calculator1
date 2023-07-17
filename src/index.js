import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Prac from './prac/Prac';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Weather/> */}
   {/* <Abc/> */}
  <Prac/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn mosre: https://bit.ly/CRA-vitals
reportWebVitals();
