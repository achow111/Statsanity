import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

import TitleLogo from './images/TitleLogo.svg';
import LogoutLogo from './images/logout.svg';

import axios from 'axios';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  const navigate = useNavigate();

  // Function to check if JWT token exists
  const checkJWT = () => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token exists
    } else {
      setIsLoggedIn(false); // Set isLoggedIn to false if token does not exist
    }
  };

  // Function to simulate logout
  const logout = async () => {
    try {
      await axios.get('/logout'); // Make logout request
      localStorage.removeItem('token'); // Remove token from local storage
      setIsLoggedIn(false); // Update isLoggedIn state
      navigate('/'); // Redirect to home page after logout
      window.location.reload(); // Reload window to reflect logout state
    } catch (error) {
      console.log(error);
    }
  };

  // Check JWT token on component mount
  useEffect(() => {
    checkJWT();
  }, []);

  return (
    <nav>
      <Link to='/' className='title'>
        <img src={TitleLogo} alt="Title Logo" style={{ marginRight: '0.5rem' }} />
        Statsanity
      </Link>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${menuOpen ? 'open' : ''} ${isLoggedIn ? 'profile-logout' : ''}`}>
        <li>
          <NavLink to='/' className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/Predictions' className="nav-link">
            Predictions
          </NavLink>
        </li>
        <li>
          <NavLink to='/Stats'>Stats</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to='/Profile'>Profile</NavLink>
            </li>
            <li>
              <button className='nav-button' onClick={logout}>
                <img src={LogoutLogo} alt="Logout Logo" className="nav-logo" />
                <span className="logout-text"></span>
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/Signup'>Sign up</NavLink>
            </li>
            <li>
              <NavLink to='/Login'>Log in</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
