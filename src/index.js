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

import './index.css';

//APP COMPONENT
const App = () => {
  // fetchUrls().then(console.log);
  const [results, setResults] = useState([]);
  const [list, setList] = useState([]);

  const addCardToList = ({ id, name }) => {
    const nextList = [...list];
    const index = nextList.findIndex(link => link.id === id);

    if (index > -1) {
      nextList[index].count += 1;
    } else {
      nextList.push({
        id,
        name,
        count: 1
      });
    }
    setList(nextList);
  }

  const removeCardFromList = ({ id }) => {
    const nextList = [...list];
    const index = nextList.findIndex(link => link.id === id);

    if(index === -1) {
      nextList.splice(index, 1);
    } else {
      nextList[index].count -= 1;
    }
    setList(nextList);
  }

  return (
    <div id="app">
      <SearchBar setResults={ setResults }/>
      <SearchResults
        results={ results }
        addCardToList={ addCardToList }
        removeCardFromList={ removeCardFromList } />
      <LinkList list={ list } />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
