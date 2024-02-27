// Update HomePage component
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

import PredLogo from '../images/OrangePred.svg';
import StatsLogo from '../images/OrangeStats.svg';

const HomePage = () => {
  return (
    <div className=' home-content page-content'>
    <div className='HeaderContainer'>
      <div className="HeaderText">
        <div className="Header-and-Paragraph">
          <h1 className='Header'>Own the Whole Court</h1>
          <p className='HeaderParagraph'>
            The game isn't just in the matches. it's in the data.
          </p>
        </div>
      </div>
    </div>
      <div className='Buttons'>
        <Link to="/Predictions">
          <button className='HomeButtons'>
            <div className="ButtonContent">
              <img src={PredLogo} alt="Prediction Logo" className="ButtonLogo" />
              <div>
                <h1 className='ButtonHeading'>Predict</h1>
                <p className='ButtonParagraph'>
                  Elevate your basketball experience with our advanced AI game predictions
                </p>
              </div>
            </div>
          </button>
        </Link>

        {/* Button to go to Predictions page */}
        <Link to="/Stats">
          <button className='HomeButtons'>
            <div className="ButtonContent">
              <img src={StatsLogo} alt="Stats Logo" className="ButtonLogo" />
              <div>
                <h1 className='ButtonHeading'>Stats</h1>
                <p className='ButtonParagraph'>
                  Dive into detailed game stats and boost your basketball IQ.
                </p>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
