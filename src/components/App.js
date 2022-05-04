import '../styles/App.scss';
import { useState, useEffect } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';
import getMovieApi from '../services/movieApi';
import MovieSceneList from './MovieSceneList';
// import LocalStorage from '../services/localStorage';
// import PropTypes from 'prop-types';

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovieApi().then((cleanData) => {
      setMovieData(cleanData);
    });
  }, []);

  return (
    <>
      <h1>Owen Wilson's 'wow'</h1>
      <MovieSceneList MovieSceneList={movieData} />
    </>
  );
}

export default App;
