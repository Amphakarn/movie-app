import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import Test from './components/Test';

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
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="d-flex align-items-center mx-4 my-3">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="container-fluid d-flex movie-app">
        <MovieList
          movies={movies}
          handleAddFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="d-flex align-items-center mx-4 my-3">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="container-fluid d-flex movie-app">
        <MovieList
          movies={favourites}
          handleAddFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
    </>
  );
}
