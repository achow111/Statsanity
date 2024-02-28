import React, { useState, useEffect } from 'react';
import PlayerTable from '../RankTable';
import Nikola from '../images/nikola.png';
import Shai from '../images/shai.png';
import Giannis from '../images/giannis.png';


const Stats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line
  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line
  const [suggestions, setSuggestions] = useState([]);
  // eslint-disable-next-line
  const [showSuggestions, setShowSuggestions] = useState(false);
  // eslint-disable-next-line
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

  };


  useEffect(() => {
    handleSubmit(new Event('submit'));
  }, [searchTerm]);

  const getSuggestions = (inputValue) => {
    const names = inputValue.toLowerCase().split(' ');
    const firstName = names[0];
    const lastName = names.slice(1).join(' ');

    const suggestionsByFullName = searchResults.filter(
      (player) =>
        `${player.first_name} ${player.last_name}`.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (suggestionsByFullName.length === 0) {
      const suggestionsByFirstLast = searchResults.filter(
        (player) =>
          (player.first_name.toLowerCase().startsWith(firstName) &&
            player.last_name.toLowerCase().startsWith(lastName)) ||
          (player.last_name.toLowerCase().startsWith(firstName) &&
            player.first_name.toLowerCase().startsWith(lastName))
      );

      return suggestionsByFirstLast;
    }

    return suggestionsByFullName;
  };
  const handleChange = (event) => {
    const userInput = event.target.value;
    const filteredSuggestions = getSuggestions(userInput);
    setSearchTerm(userInput);
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };


  return (
    <div className='page-content'>
      <div className='main-heading'>
        <div className='Header'>
          Statistics
        </div>
        <h1 className='HeaderParagraph'>
          Your reference for basketball stats,
          player profiles, team rosters, game scores
        </h1>
          <div className='search-suggestions'>
            <form className='stats-form' onSubmit={handleSubmit} role="search">
              <input type="search" placeholder="Search player/team" autoFocus required className="stats-input" value={searchTerm} onChange={handleChange} />
              <button type="submit" className="stats-button">
                Go
              </button>
            </form>
          </div>
        <div className='stats-table'>
          <div className='SubHeader'>
            NBA MVP Tracking 23/24
          </div>
          <div className='sub-container'>
          <h1 className='SubHeaderParagraph'>
            The NBA MVP Award Tracker ranks candidates based on a model built using previous voting results.
            Players must have played in at least 70% of the league-wide average for team games to qualify.
            Players who are not currently on pace to play in 65 games are in italics. Players who cannot reach 65 games played are excluded.
            This data is retrieved from <a target="_blank" rel="noopener noreferrer" href="https://www.basketball-reference.com/friv/mvp.html">Basketball Reference</a>
          </h1>
          </div> 
          <div className='stat-image-container'>
          <img src={Nikola} alt="Prediction Logo" className="stat-image" />
          <img src={Shai} alt="Prediction Logo" className="stat-image" />
          <img src={Giannis} alt="Prediction Logo" className="stat-image" />
          </div>
          <PlayerTable />
        </div>
      </div>
    </div>
  );
};

export default Stats;
