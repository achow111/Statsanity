// Update HomePage component
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

import Tatum from '../Tournament.png';
import PredLogo from '../OrangePred.svg';
import StatsLogo from '../OrangeStats.svg';

const HomePage = () => {
  return (
    <div className='page-content'>
    <div className='HeaderContainer'>
      <div className="HeaderText">
        <div>
          <h1 className='Header'>Own the Whole Court</h1>
          <p className='HeaderParagraph'>
            Dive into the stats, unveil trends, and stay ahead of the competition.
            The game isn't just on the court—it's in the data.
          </p>
        </div>
        <img src={Tatum} alt="Prediction Logo" className="HomePagePhoto" />
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
                  Elevate your basketball experience with our advanced game predictions
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
                  Dive into detailed game stats
                  - your playbook for decoding sports intricacies, making informed decisions, and boosting your basketball IQ.
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
