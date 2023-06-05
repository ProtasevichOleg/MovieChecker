// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchDetailsMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDetailsMovie(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(error => {
        showMessage('Error while fetching movie details.');
        setError(error);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return movie ? (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </div>
  ) : (
    <p>No details available for this movie.</p>
  );
};

export default MovieDetails;
