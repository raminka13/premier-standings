import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasons } from '../redux/seasons/seasonsSlice';
import './Seasons.css';

const Seasons = () => {
  const dispatch = useDispatch();
  const seasonsList = useSelector((state) => state.seasons);

  useEffect(() => {
    if (!seasonsList.data) {
      dispatch(getSeasons());
    }
  }, [dispatch, seasonsList]);

  return (
    <div className="seasons-container">
      <div className="seasons-title">
        <h2>
          Premier League Standings
        </h2>
      </div>
      <ul className="seasons-list">
        {seasonsList.map((season) => (
          <li key={season.year} className="season-button">
            <Link to="standings" value={season.year} state={season.year} className="season-year">
              {season.year}
            </Link>
            <span className="season-display">
              {season.displayName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
