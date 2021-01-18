import React from 'react'
import faker from 'faker';
import Fetch from './components/Fetch';
import { useIterator } from './hook/useIterator';
import Menu from './components/RepoMenu'
import A from './components/GitHubUser';
// import A from './components/UserDetails';
// import A from './Virtualizaed';

export default function App() {
  return (
    <A ></A>
  );
}

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));


