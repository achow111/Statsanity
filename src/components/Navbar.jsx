import React from 'react'
import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

import PredLogo from './PredictionsLogo.svg';
import StatsLogo from './StatsLogo.svg';
import TitleLogo from './TitleLogo.svg';


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
        <NavLink to='/Predictions'  className="nav-link">
            <div className='nav-predictions'>
            Predictions
            <span> <img src={PredLogo} alt="Predictions Logo" /> </span>
            </div>
            </NavLink>
        </li>
        <li>
        <NavLink to ='/Stats'>Stats
        <img src={StatsLogo} alt="Stats Logo" style={{ marginLeft: '0.5rem' }}/>
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
