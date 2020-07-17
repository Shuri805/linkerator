import React from 'react';
import './SearchResults.css';

import Card from './Card';


const SearchResults = ({
  results,
  addLinktoList,
  removeLinkFromList
 }) => {
  return (
    <div id="results">
        <h3> There are ({ results.length }) results</h3>
        <div className="CardList">

        { results.map(result => (
          <Card key={ result.id }{ ...result }/>
        ))
      }
      </div>
    </div>
  );
}

export default SearchResults;
