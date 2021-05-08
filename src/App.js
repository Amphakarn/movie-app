import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4d208493`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log('responseJson = ', responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteMovies = [...favourites, movie];
    setFavourites(newFavouriteMovies);
    saveToLocalStorage(newFavouriteMovies);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteMovies = favourites.filter(
      (favourite) => favourite != movie
    );
    setFavourites(newFavouriteMovies);
    saveToLocalStorage(newFavouriteMovies);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-app-favourites', JSON.stringify(items));
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('movie-app-favourites')
    );
    setFavourites(movieFavourites);
  }, []);

  return (
    <>
      <div className="d-flex align-items-center mx-4 my-3">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="container-fluid d-flex movie-app">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="d-flex align-items-center mx-4 my-3">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="container-fluid d-flex movie-app">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </>
  );
}
