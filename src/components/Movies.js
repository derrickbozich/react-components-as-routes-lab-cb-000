import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesToRender = movies.map(movie => <div>{movie.title}</div> )
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
  );
};

export default Movies;
