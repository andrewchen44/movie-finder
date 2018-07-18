import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {
  const movies = props.movies.filter((movie, index) => {
    return props.movies.indexOf(movie) >= index;
  })
  const empty = movies.length === 0 ? <div> No movies found, please try a different search.</div> : null;
  return (
    <div className='movie-list-container'>
      <h4> Search Results </h4>
        {empty}
        {movies.map((movie) => {
          return (
            <div key={movie}>
              <MovieListItem movie={movie} />
            </div>)
        })}
    </div>
  )
}

export default MovieList;