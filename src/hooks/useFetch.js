// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import showMessage from 'utils/swalConfig';

const useFetch = (apiFunc, paramsFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFunc(paramsFunc())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        showMessage('Error while fetching data.');
        setError(error);
      });
  }, [paramsFunc, apiFunc]);

  return { data, error };
};

export default useFetch;
