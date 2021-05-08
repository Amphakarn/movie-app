import React from 'react';

export default function MovieList(props) {
  console.log('props from MovieList = ', props);
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}
