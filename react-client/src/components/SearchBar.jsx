import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input type='text' onChange={handleSearch}/>
  )
}

// https://developers.themoviedb.org/3/search/search-movies


export default SearchBar;