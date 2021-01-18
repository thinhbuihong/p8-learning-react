import React, { useState, useEffect } from "react";
import useMountedRef from "./useMountedRef";
export function useFetch(uri) {
  const mounted = useMountedRef();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;
    setLoading(true);
    fetch(uri)
      .then(data => {
        if (!mounted.current) throw new Error("component is not mounted");
        return data;
      })
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [uri]);
  return {
    loading,
    data,
    error
  };
}