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

  useEffect(() => {
    getMovieApi().then((cleanData) => {
      setMovieData(cleanData);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const movieFilters = movieData.filter((movie) => {
    return movie.name.toLowerCase().includes(filterMovie.toLowerCase());
  });

  return (
    <>
      <h1>Owen Wilson's 'wow'</h1>
      <Filters handleFilterMovie={handleFilterMovie} />
      <MovieSceneList MovieSceneList={movieFilters} />
    </>
  );
}

export default App;
