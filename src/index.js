import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
  LinkList,
  SearchBar,
  SearchResults,
} from './components';

//APP COMPONENT
const App = () => {
  return (
    <div id="app">
      <SearchBar />
      <SearchResults />
      <LinkList />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
