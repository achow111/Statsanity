import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  return (
    <div className='page-content'>
      <div className='main-heading'>
      <h1 className='main-text'>
        Your reference for basketball stats,
        player profiles, team rosters, game scores
      </h1>
      <div className="stats-search-container">
        <div className='search-suggestions'>
          <form className='stats-form' onSubmit={handleSubmit} role="search">
            <input type="search" placeholder="Search player/team" autoFocus required className="stats-input" value={searchTerm} onChange={handleChange} />
            <button type="submit" className="stats-button">
              Go
            </button>
          </form>
        </div>
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
