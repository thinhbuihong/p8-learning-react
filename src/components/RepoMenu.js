import React, { useEffect } from "react";
import { useIterator } from "../hook/useIterator";
// import RepositoryReadme from "./RepositoryReadme";
export default function RepoMenu({
  repositories,
  repo,
  onSelect = f => f
}) {
  // console.log(repositorieso)
  const [{ name }, previous, next] = useIterator(
    repositories,
    repo ? repositories.findIndex(r => r.name = repo) : null
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      {/* <RepositoryReadme login={login} repo={name}></RepositoryReadme> */}

    </>
  );
}