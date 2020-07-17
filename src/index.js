import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import qs from 'qs';
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
  const [list, setList] = useState([]);

  const [params, setParams] = useState(qs.parse(window.location.hash.slice(1)));

  useEffect(()=>{
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(window.location.hash.slice(1)));
    });
  }, []);

  console.log(params)

  const createLink = async(link) => {
    const created = (await axios.post('/api/links', link)).data;
    setLinks([...LinkList, created]);
    // console.log(created);
  }

  const destroyLink = async(id)=>{
    await axios.delete(`/api/links/${id}`);
    setLinks(links.filter(link => link.id !== id));
    //console.log(id);
  };

  const addLinkToList = ({ id, name }) => {
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

  const removeLinkFromList = ({ id }) => {
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
        addLinkToList={ addLinkToList }
        removeLinkFromList={ removeLinkFromList } />
      <LinkList list={ list } />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
