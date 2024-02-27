import React, { useState, useEffect } from 'react';

const PlayerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/scrape');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="player-table">
      <table>
        <thead className="table-head">
          <tr>
            <th className="table-header">Rk</th>
            <th className="table-header">Player</th>
            <th className="table-header">Team</th>
            <th className="table-header">W</th>
            <th className="table-header">L</th>
            <th className="table-header">W/L%</th>
            <th className="table-header">G</th>
            <th className="table-header">GS</th>
            <th className="table-header">MP</th>
            <th className="table-header">FG</th>
            <th className="table-header">FGA</th>
            <th className="table-header">FG%</th>
            <th className="table-header">3P</th>
            <th className="table-header">3PA</th>
            <th className="table-header">3P%</th>
            <th className="table-header">2P</th>
            <th className="table-header">2PA</th>
            <th className="table-header">2P%</th>
            <th className="table-header">eFG%</th>
            <th className="table-header">FT</th>
            <th className="table-header">FTA</th>
            <th className="table-header">FT%</th>
            <th className="table-header">ORB</th>
            <th className="table-header">DRB</th>
            <th className="table-header">TRB</th>
            <th className="table-header">AST</th>
            <th className="table-header">STL</th>
            <th className="table-header">BLK</th>
            <th className="table-header">TOV</th>
            <th className="table-header">PF</th>
            <th className="table-header">PTS</th>
            <th className="table-header">Prob%</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="table-name">{player.Player}</td>
              <td>{player.Team}</td>
              <td>{player.W}</td>
              <td>{player.L}</td>
              <td>{player["W/L%"]}</td>
              <td>{player.G}</td>
              <td>{player.GS}</td>
              <td>{player.MP}</td>
              <td>{player.FG}</td>
              <td>{player.FGA}</td>
              <td>{player["FG%"]}</td>
              <td>{player["3P"]}</td>
              <td>{player["3PA"]}</td>
              <td>{player["3P%"]}</td>
              <td>{player["2P"]}</td>
              <td>{player["2PA"]}</td>
              <td>{player["2P%"]}</td>
              <td>{player["eFG%"]}</td>
              <td>{player.FT}</td>
              <td>{player.FTA}</td>
              <td>{player["FT%"]}</td>
              <td>{player.ORB}</td>
              <td>{player.DRB}</td>
              <td>{player.TRB}</td>
              <td>{player.AST}</td>
              <td>{player.STL}</td>
              <td>{player.BLK}</td>
              <td>{player.TOV}</td>
              <td>{player.PF}</td>
              <td>{player.PTS}</td>
              <td>{player["Prob%"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
