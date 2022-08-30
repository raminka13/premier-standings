import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStandingsYear } from '../redux/standings/standingsSlice';
import './Standings.css';

function Standings() {
  const dispatch = useDispatch();
  const location = useLocation();
  const year = location.state;
  const standingsList = useSelector((state) => state.standings);

  useEffect(() => {
    if (standingsList) {
      dispatch(getStandingsYear(year));
    }
  }, []);

  return (
    <div className="standings-container">
      <h2>{year}</h2>
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
              <td className="data">{stand.stats[8].value}</td>
              <td className="data"><img src={stand.team.logos[0].href} alt={stand.team.name} /></td>
              <td className="data-name">{stand.team.name}</td>
              <td className="data">{stand.stats[3].value}</td>
              <td className="data">{stand.stats[0].value}</td>
              <td className="data">{stand.stats[2].value}</td>
              <td className="data">{stand.stats[1].value}</td>
              <td className="data points">{stand.stats[6].value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
