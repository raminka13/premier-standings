import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasons } from '../redux/seasons/seasonsSlice';
import './Seasons.css';

const Seasons = () => {
  const dispatch = useDispatch();
  const seasonsList = useSelector((state) => state.seasons);
  const [yearInput, setYearInput] = useState('');
  const seasonsListFilter = seasonsList.filter((season) => season.year <= yearInput);

  useEffect(() => {
    if (!seasonsList.data) {
      dispatch(getSeasons());
    }
  }, []);

  return (
    <div className="seasons-container">
      <div className="seasons-title">
        <h2>
          Premier League Standings
        </h2>
      </div>
      <form>
        <input
          id="year-input"
          type="number"
          name="year"
          maxLength={4}
          min={2001}
          max={2022}
          value={yearInput}
          placeholder="2001-2022"
          onInput={(e) => setYearInput(e.target.value)}
        />
        {/* <Link to="standings" value={yearInput} state={yearInput} className="season-year">
          🔎
        </Link> */}
      </form>
      <ul className="seasons-list">
        {seasonsListFilter.map((season) => (
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
