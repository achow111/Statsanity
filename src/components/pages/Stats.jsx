import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrangeLine from '../OrangeLine.svg';

const Stats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sanitizedSearchTerm = searchTerm.replace(/\s/g, ''); // Remove spaces from the search term
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${sanitizedSearchTerm}`)
      .then(response => {
        setSearchResults(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
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

  const handleClick = (event) => {
    const selectedName = event.target.innerText;
    const selectedPlayerData = searchResults.find(
      (player) =>
        `${player.first_name} ${player.last_name}`.toLowerCase() === selectedName.toLowerCase()
    );

    setSelectedPlayer(selectedPlayerData);
    setSearchTerm(selectedName);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const compareNames = (a, b) => {
    // a and b are objects of the form {first_name, last_name, ...}
    // compare the last names first
    if (a.last_name < b.last_name) return -1;
    if (a.last_name > b.last_name) return 1;
    // if the last names are equal, compare the first names
    if (a.first_name < b.first_name) return -1;
    if (a.first_name > b.first_name) return 1;
    // if both names are equal, return 0
    return 0;
  };  

  const renderSuggestions = () => {
    if (showSuggestions && searchTerm) {
      if (suggestions.length) {
        const sortedSuggestions = suggestions.slice().sort(compareNames);
        return (
          <ul className="suggestions-list">
            {sortedSuggestions.map((player, index) => (
              <li key={index} onClick={handleClick} className="suggestion-item">
                {player.first_name} {player.last_name}
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <div className="no-suggestions">
            <p>No suggestions</p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className='page-content'>
      <h1 className="Main Heading">
        Your reference for basketball stats,
        player profiles, team rosters, game scores
      </h1> 
      <img className='line' src={OrangeLine} alt="Orange Line" />
      <div className="stats-search-container">
        <div className='search-suggestions'>
          <form className='stats-form' onSubmit={handleSubmit} role="search">
            <input type="search" placeholder="Search player/team" autoFocus required className="stats-input" value={searchTerm} onChange={handleChange} />
            <button type="submit" className="stats-button">
              Go
            </button>
          </form>
          {renderSuggestions()}
        </div>
      </div>
      <div className="stats-results-container">
      {selectedPlayer ? (
        <div className='stat-player-info'>
        <h2>{selectedPlayer.first_name} {selectedPlayer.last_name}</h2>
          <p>
            {selectedPlayer.team.full_name}
            {selectedPlayer.height_feet !== null && selectedPlayer.height_inches !== null ? ` • ${selectedPlayer.height_feet}'${selectedPlayer.height_inches}''` : ''}
            {selectedPlayer.position ? ` • Position: ${selectedPlayer.position}` : ''}
          </p>
      </div>
      ) : (
        <p className="stats-no-results"></p>
      )}
    </div>

    </div>
  );
};

export default Stats;
