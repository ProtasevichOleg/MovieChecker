// src/pages/Movies.jsx
import React, { useState } from 'react';
import { fetchQueryMovies } from 'utils/api';
import showMessage from 'utils/swalConfig';
import { Link, useNavigate } from 'react-router-dom';
import {
  PageContainer,
  Title,
  MovieSearchForm,
  MovieList,
  MovieItem,
} from './Pages.styled';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearchSubmit = event => {
    event.preventDefault();

    fetchQueryMovies(search)
      .then(data => {
        setMovies(data);
        navigate(`/movies?query=${search}`);
      })
      .catch(error => {
        showMessage(error.message);
      });
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <PageContainer>
      <Title>Search for a movie</Title>
      <MovieSearchForm onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </MovieSearchForm>
      {movies.length === 0 ? (
        <p>No movies found...</p>
      ) : (
        <MovieList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </PageContainer>
  );
};

export default Movies;
