import '../styles/App.scss';
import { useState, useEffect } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';
import getMovieApi from '../services/movieApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
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

  return (
    <>
      <h1>Owen Wilson's 'wow'</h1>
      <Filters
        handleFilterMovie={handleFilterMovie}
        handleFilterYear={handleFilterYear}
        years={getYears()}
      />
      <MovieSceneList MovieSceneList={movieFilters} />
    </>
  );
}

export default App;
