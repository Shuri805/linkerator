import React from 'react';

import {
  fetchUrls,
} from '../api';

const SearchBar = ({ setResults}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const urls = await fetchUrls();
    setResults(urls);
  }
  return (
    <div id="search">
        <h3> Look up links here...</h3>
        <form onSubmit={ handleSubmit }>
          <input type="url" placeholder="link search"/>
          <button type="submit">Search</button>
        </form>
      </div>
  );
}

export default SearchBar;
