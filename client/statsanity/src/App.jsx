// src/App.js
import React from 'react';
import { Navbar } from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import './components/pages/Pages.css';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

// Import individual components
import Stats from './components/pages/Stats';
import Predictions from './components/pages/Predictions';
import HomePage from './components/pages/HomePage';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

import { createContext, useState } from "react";

import Background from './components/Background.svg';


export const ThemeContext = createContext(null);

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true


const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div className='App' id={theme}>
  <img src={Background} className='background' alt="Title Logo" />

      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
      <Route path ='/' element={<HomePage/>}/>

        <Route path ='/Stats' element={<Stats/>}/>
        <Route path ='/Predictions' element={<Predictions/>}/>
        <Route path ='/Signup' element={<Signup/>}/>
        <Route path ='/Login' element={<Login/>}/>

      </Routes>
  </div>
  </ThemeContext.Provider>
};

export default App;

