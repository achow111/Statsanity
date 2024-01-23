// src/App.js
import React from 'react';
import { Navbar } from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom';


// Import individual components
import Stats from './components/pages/Stats';
import Predictions from './components/pages/Predictions';
import HomePage from './components/pages/HomePage';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';


const App = () => {
  return <div className='App'>
    <Navbar/>
    <Routes>
    <Route path ='/' element={<HomePage/>}/>

      <Route path ='/Stats' element={<Stats/>}/>
      <Route path ='/Predictions' element={<Predictions/>}/>
      <Route path ='/Signup' element={<Signup/>}/>
      <Route path ='/Login' element={<Login/>}/>

    </Routes>
  </div>
};

export default App;

