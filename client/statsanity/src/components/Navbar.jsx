import React from 'react'
import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

import TitleLogo from './images/TitleLogo.svg';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to='/' className='title'>
      <img src={TitleLogo} alt="Title Logo" style={{ marginRight: '0.5rem' }} />
      Statsanity
      </Link>
      <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
      <li>
        <NavLink to='/'  className="nav-link">
            <div className='nav-predictions'>
            Home
            
            </div>
            </NavLink>
        </li>
        <li>
        <NavLink to='/Predictions'  className="nav-link">
            <div className='nav-predictions'>
            Predictions
            
            </div>
            </NavLink>
        </li>
        <li>
        <NavLink to ='/Stats'>Stats
        </NavLink>
        </li>
        <li>
          <NavLink to='/Signup'>Sign up</NavLink>
        </li>
        <li>
          <NavLink to='/Login'>Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
};
