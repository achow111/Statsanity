import React, { useState } from 'react';

// Define an array of NBA teams
const nbaTeams = [
  "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls",
  "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors",
  "Houston Rockets", "Indiana Pacers", "LA Clippers", "Los Angeles Lakers", "Memphis Grizzlies",
  "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks",
  "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers",
  "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"
];

const Predictions = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const handleGenerate = () => {
    // Retrieve the selected teams from the dropdowns
    const selectedTeam1 = document.getElementById('team1').value;
    const selectedTeam2 = document.getElementById('team2').value;

    // Update state with the selected teams
    setTeam1(selectedTeam1);
    setTeam2(selectedTeam2);
  };

  return (
    <div className='page-content'>
      <div className='PredContainer'>
        <div className="HeaderText">
          <div className="Header-and-Paragraph">
            <h1 className='Header'>Predict</h1>
            <p className='HeaderParagraph'>
              Predict the future results of a game with great accuracy with our machine learning model
            </p>
          </div>
        </div>
      </div>
      <div className='Buttons'>
        <div className='PredButtons'>
          <div className="ButtonContent">
            <div>
              <h1 className='ButtonHeading'>Choose Your Teams</h1>
              <div className='pred-teams'>
                <div className='team-1'>
                  <div className='pred-single-team'>
                    <select id="team1" name="team1">
                      {nbaTeams.map((team, index) => (
                        <option key={index} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button className='generate-btn generate-button' onClick={handleGenerate}><span className='generate-text'>Generate</span></button>
                <div className='team-2'>
                  <div className='pred-single-team'>
                    <select id="team2" name="team2">
                      {nbaTeams.map((team, index) => (
                        <option key={index} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className='test-results'>
                <p>

                  {team1 && team2 && (
                    <>
                      {team1} vs. {team2}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Predictions;
