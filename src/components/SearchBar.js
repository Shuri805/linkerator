import React from 'react';

const SearchBar = (props) => {
  return (
    <div id="search">
        <h3> Look up links here...</h3>
        <form>
          <input type="text" placeholder="link search"/>
          <button type="submit">Search</button>
        </form>
      </div>
  );
}

export default SearchBar;
