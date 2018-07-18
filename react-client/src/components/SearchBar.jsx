import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className='search-bar-container'>
      <input placeholder='Enter the name of the movie you are looking for...' type='text' onKeyUp={handleSearch} className='search-input'/>
    </div>
  )
}

export default SearchBar;