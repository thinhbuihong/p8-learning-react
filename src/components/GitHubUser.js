import React, { useState, useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import Fetch from "./Fetch";
import RepositoryReadme from "./RepositoryReadme";
import UserDetails from "./UserDetails";
import UserRepositories from "./UserRepositories";
import { debounce } from 'lodash';

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  return (<Fetch
    uri={`https://api.github.com/users/${login}`}
    renderSuccess={UserDetails}
  />)


}
export default function App() {
  const [login, setLogin] = useState("moonhighway");
  const [repo, setRepo] = useState("learning-react")

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  }
  if (!login)
    return (
      <SearchForm value={login} onSearch={handleSearch} />
    );

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch}></SearchForm>
      { login && <GitHubUser login={login}></GitHubUser>}
      {login && (<UserRepositories login={login}
        repo={repo} onSelect={setRepo}></UserRepositories>)}
      {login && repo && (
        <RepositoryReadme login={login} repo={repo} />

      )}
    </>
  )
}

function SearchForm({ value, onSearch }) {
  const [text, setText] = useState(value);
  const change = (e) => setText(e.target.value);
  return (<div>
    <input value={text} placeholder="search"
      onChange={change}></input>

    <button onClick={() => onSearch(text)}>search</button>
  </div>)
}
// function List({ data = [], renderItem, renderEmpty }) {
//   return !data.length ? (renderEmpty) : (
//     <ul>
//       {data.map((item, i) => (<li key={i}>{renderItem(item)}</li>))}
//     </ul>
//   )
// }