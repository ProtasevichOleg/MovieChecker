// src/components/Cast/Cast.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCastMovie(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => {
        showMessage('Error while fetching movie cast.');
        setError(error);
      });
  }, [movieId]);

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
