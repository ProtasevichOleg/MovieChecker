// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../utils/api';
import { Link } from 'react-router-dom';
import showMessage from '../utils/swalConfig';
import { PageContainer, Title, MovieList, MovieItem } from './Pages.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        showMessage(error.message);
      });
  }, []);

  return (
    <PageContainer>
      <Title>Popular Movies Today</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </MovieItem>
        ))}
      </MovieList>
    </PageContainer>
  );
};

export default Home;
