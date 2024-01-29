// src/App.js
import React from 'react';
import { Navbar } from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';
import './components/pages/Pages.css';


// Import individual components
import Stats from './components/pages/Stats';
import Predictions from './components/pages/Predictions';
import HomePage from './components/pages/HomePage';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div className='App' id={theme}>
      <Navbar/>
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

