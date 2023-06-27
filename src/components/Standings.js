import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStandingsYear } from '../redux/standings/standingsSlice';
import './Standings.css';

function Standings() {
  const dispatch = useDispatch();
  const location = useLocation();
  const year = location.state;
  const standingsList = useSelector((state) => state.standings.standings);
  const name = useSelector((state) => state.standings.name);
  const seasonDisplay = useSelector((state) => state.standings.seasonDisplay);
  const season = useSelector((state) => state.standings.season);

  useEffect(() => {
    if (year) {
      dispatch(getStandingsYear(year));
    }
  }, [dispatch, year]);

  return (
    <div className="standings-container">
      <div className="standings-header">
        <div className="standings-header-img">
          <img
            src="https://a.espncdn.com/i/leaguelogos/soccer/500-dark/23.png"
            alt="Premier League"
          />
        </div>
        <div className="standings-header-title">
          <h1>{season}</h1>
        </div>
        <div className="standings-header-info">
          <h4>{name}</h4>
          <h3>{seasonDisplay}</h3>
        </div>
      </div>
      <table>
        <thead>
          <tr id="head">
            <th>Pos</th>
            <th> </th>
            <th>Name</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standingsList.map((stand) => (
            <tr key={stand.team.id}>
              <td className="data">{stand.stats[10].value}</td>
              <td className="data">
                <img src={stand.team.logos[0].href} alt={stand.team.name} />
              </td>
              <td className="data-name">{stand.team.name}</td>
              <td className="data">{stand.stats[0].value}</td>
              <td className="data">{stand.stats[7].value}</td>
              <td className="data">{stand.stats[6].value}</td>
              <td className="data">{stand.stats[1].value}</td>
              <td className="data points">{stand.stats[3].value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
