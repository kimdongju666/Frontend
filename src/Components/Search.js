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
        placeholder='검색어를 입력해주세요.'
        className='input-text'
        value={searchText}
        onChange={handleInputChange}></input>
        <button className='search-button' onClick={handleSearch}>검색</button>
    </div>
  );
}

export default Search;