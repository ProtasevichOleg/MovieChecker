// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../utils/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h1>Popular Movies Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
