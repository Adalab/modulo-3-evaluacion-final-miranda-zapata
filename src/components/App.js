import '../styles/App.scss';
import React from 'react';
import getMovieApi from '../services/movieApi';

import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';

// import LocalStorage from '../services/localStorage';
// import PropTypes from 'prop-types';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    getMovieApi().then((cleanData) => {
      setMovieData(cleanData);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const movieFilters = movieData
    .filter((movie) => {
      return movie.name.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((movie) => {
      if (filterYear === 'all') {
        return true;
      } else {
        return filterYear.includes(movie.year);
      }
    });

  const getYears = () => {
    const movieYears = movieData.map((movie) => movie.year);
    /* const soleYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    }); */
    const soleYear = new Set(movieYears);
    const noDuplicatedYears = [...soleYear];
    return noDuplicatedYears.sort();
    // return soleYear;
  };

  const { pathname } = useLocation();
  const pathData = matchPath('/movie/:id', pathname);

  const movieId = pathData !== null ? pathData.params.id : null;
  const foundMovie = movieData.find((item) => item.id === movieId);

  return (
    <>
      <h1>Owen Wilson's 'wow'</h1>
      <div className=''>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYears()}
                />
                <MovieSceneList MovieSceneList={movieFilters} />
              </>
            }
          />
          <Route
            path='/movie/:id'
            element={<MovieSceneDetail MovieSceneItem={foundMovie} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
