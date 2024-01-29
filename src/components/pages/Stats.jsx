import React from 'react';
import OrangeLine from '../OrangeLine.svg';

const Stats = () => {
  
  return (
    <div className='page-content'>
      <h1 className="Main Heading">
        Your reference for basketball stats,
        player profiles, team rosters, game scores
      </h1> 
      <img className='line' src={OrangeLine} alt="Orange Line" />
      <div className="stats-search-container">
        <div>
          <form className='stats-form' onSubmit={(event) => { event.preventDefault(); }}  role="search">
            <input type="search" placeholder="Search player/team" autoFocus required className="stats-input" />
            <button type="submit" className="stats-button">
            Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stats;

