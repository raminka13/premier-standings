import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasons } from '../redux/seasons/seasonsSlice';
import { getStandingsYear } from '../redux/standings/standingsSlice';

const Seasons = () => {
  const dispatch = useDispatch();
  const seasonsList = useSelector((state) => state.seasons);
  const standingsList = useSelector((state) => state.standings);
  const [year, setYear] = useState('');

  useEffect(() => {
    if (!seasonsList.data) {
      dispatch(getSeasons());
    }
    if (!standingsList.data) {
      dispatch(getStandingsYear(year));
    }
  }, []);

  const changeSeason = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="seasons-container">
      <h2>Premier League Standings</h2>
      <ul>
        {seasonsList.map((season) => (
          <li key={season.year} className="season-button">
            <button type="button" onClick={changeSeason} value={season.year}>
              <Link to="standings">
                {season.year}
              </Link>
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
