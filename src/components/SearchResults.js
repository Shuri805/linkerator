import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div id="results">
        <h3> There are ({ results.length }) results</h3>
      </div>
  );
}
export default SearchResults;
