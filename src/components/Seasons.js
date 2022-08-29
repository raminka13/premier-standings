import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasons } from '../redux/seasons/seasonsSlice';

const Seasons = () => {
  const dispatch = useDispatch();
  const seasonsList = useSelector((state) => state.seasons);

  useEffect(() => {
    if (!seasonsList.data) {
      dispatch(getSeasons());
    }
  }, []);

  console.log(seasonsList);
  return (
    <div className="seasons-container">
      <h2>Premier League Standings</h2>
      <ul>
        {seasonsList.map((season) => (
          <li key={season.year} className="season-button">
            <Link to="standings">
              {season.year}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seasons;
