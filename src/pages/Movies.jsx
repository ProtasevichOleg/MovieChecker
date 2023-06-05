// src/pages/Movies.jsx
import React, { useState } from 'react';
import { fetchQueryMovies } from 'utils/api';
import showMessage from 'utils/swalConfig';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    fetchQueryMovies(search)
      .then(data => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch(error => {
        showMessage('Error while fetching movie by query.');
        setError(error);
        setIsLoading(false);
      });
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h1>Search for a movie</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 ? (
        <p>No movies found...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
