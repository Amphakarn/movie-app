import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=thai&apikey=4d208493';
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log('responseJson = ', responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
