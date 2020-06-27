import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {
  LinkList,
  SearchBar,
  SearchResults,
} from './components';

import {
  fetchUrls,
} from './api';

//APP COMPONENT
const App = () => {
  // fetchUrls().then(console.log);
  const [results, setResults] = useState([]);

  return (
    <div id="app">
      <SearchBar setResults={ setResults }/>
      <SearchResults results={ results } />
      <LinkList />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
