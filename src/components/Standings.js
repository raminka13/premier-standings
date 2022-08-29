import React from 'react';
import { useSelector } from 'react-redux';

function Standings() {
  const standingsList = useSelector((state) => state.standings);

  return (
    <div>
      <table>
        <thead>
          <tr id="head">
            <th>Position</th>
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
              <td className="data">{stand.team.name}</td>
              <td className="data">{stand.stats[3].value}</td>
              <td className="data">{stand.stats[0].value}</td>
              <td className="data">{stand.stats[2].value}</td>
              <td className="data">{stand.stats[1].value}</td>
              <td className="data">{stand.stats[6].value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
