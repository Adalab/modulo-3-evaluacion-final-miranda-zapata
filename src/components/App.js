import '../styles/App.scss';
import '../styles/core/Reset.scss';
import React from 'react';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import PageNotFound from './PageNotFound';
import Header from './Header';
import Footer from './Footer';

import getMovieApi from '../services/movieApi';
import LocalStorage from '../services/localStorage';
// import PropTypes from 'prop-types';

function App() {
  const [movieData, setMovieData] = useState(LocalStorage.get('movies', []));
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    if (movieData.length === 0) {
      getMovieApi().then((cleanData) => {
        setMovieData(cleanData);
      });
    }
  }, []);

  useEffect(() => {
    LocalStorage.set('movies', movieData);
  }, [movieData]);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const movieFilters = movieData
    .sort((a, b) => a.name.localeCompare(b.name))
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

  const preventSubmitName = (ev) => {
    ev.preventDefault();
  };

  const resetInputs = () => {
    setFilterMovie('');
    setFilterYear('all');
  };

  const getYears = () => {
    const movieYears = movieData.map((movie) => movie.year);
    /* const soleYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    }); */
    const soleYear = new Set(movieYears);
    const noDuplicatedYears = [...soleYear];
    return noDuplicatedYears.sort();
    /* return soleYear.sort(); */
  };

  const { pathname } = useLocation();
  const pathData = matchPath('/movie/:id', pathname);
  const movieId = pathData !== null ? pathData.params.id : null;
  const foundMovie = movieData.find((item) => item.id === movieId);

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYears()}
                  filterMovie={filterMovie}
                  filterYear={filterYear}
                  preventSubmitName={preventSubmitName}
                  resetInputs={resetInputs}
                />
                <MovieSceneList
                  MovieSceneList={movieFilters}
                  filterMovie={filterMovie}
                />
              </>
            }
          />
          <Route
            path='/movie/:id'
            element={<MovieSceneDetail MovieSceneItem={foundMovie} />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
