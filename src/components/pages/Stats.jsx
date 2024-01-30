import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrangeLine from '../OrangeLine.svg';

const Stats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchTerm}`)
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

  // Function to filter suggestions based on user input
  const getSuggestions = (inputValue) => {
    return searchResults.filter(
      player => player.first_name.toLowerCase().startsWith(inputValue.toLowerCase()) ||
                player.last_name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  };

  // Function to handle input change
  const handleChange = (event) => {
    const userInput = event.target.value;
    const filteredSuggestions = getSuggestions(userInput);
    setSearchTerm(userInput);
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  // Function to handle suggestion click
  const handleClick = (event) => {
    setSearchTerm(event.target.innerText);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Function to render suggestions list
  const renderSuggestions = () => {
    if (showSuggestions && searchTerm) {
      if (suggestions.length) {
        return (
          <ul className="suggestions-list">
            {suggestions.map((player, index) => (
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
        <div>
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
        {searchResults.length > 0 ? (
          <ul className="stats-results-list">
            {searchResults.map(player => (
              <li key={player.id} className="stats-result-item">
                <h2 className="stats-result-name">{player.first_name} {player.last_name}</h2>
                <p className="stats-result-team">{player.team.full_name}</p>
                <p className="stats-result-position">{player.position}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="stats-no-results">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Stats;
