import React from 'react';

export default function MovieList(props) {
  console.log('props from MovieList = ', props);
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </>
  );
}
