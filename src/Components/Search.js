import React, { useState } from 'react'

function Search({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className='content-search'>
        <input type='text'
        id='content-search'
        placeholder='Please enter a search term'
        className='input-text'
        value={searchText}
        onChange={handleInputChange}></input>
        <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;