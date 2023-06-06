// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchDetailsMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';
import {
  MovieDetailsContainer,
  Title,
  MovieInfoWrapper,
  MovieInfo,
  MovieInfoItem,
  MovieInfoLabel,
  MovieInfoValue,
  MovieOverview,
  MovieLinks,
  MoviePoster,
} from './MovieDetails.styled';
import defaultPoster from '../images/missing-film.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchDetailsMovie(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(error => {
        showMessage(error.message);
        setIsLoading(false);
      });
  }, [movieId]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  if (isLoading) {
    return <p></p>;
  }

  if (!movie) {
    return <p>No details available for this movie.</p>;
  }

  return (
    <MovieDetailsContainer>
      <Title>{movie.title}</Title>
      <MovieInfoWrapper>
        <MovieInfo>
          <MovieInfoItem>
            <MovieInfoLabel>Release Date:</MovieInfoLabel>
            <MovieInfoValue>{movie.release_date}</MovieInfoValue>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoLabel>Runtime:</MovieInfoLabel>
            <MovieInfoValue>{movie.runtime} minutes</MovieInfoValue>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoLabel>Genres:</MovieInfoLabel>
            <MovieInfoValue>
              {movie.genres.map(genre => genre.name).join(', ')}
            </MovieInfoValue>
          </MovieInfoItem>
          <MovieInfoItem>
            <MovieInfoLabel>Tagline:</MovieInfoLabel>
            <MovieInfoValue>{movie.tagline}</MovieInfoValue>
          </MovieInfoItem>
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieInfo>
        <MoviePoster
          height={450}
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : defaultPoster
          }
          alt={movie.title}
        />
      </MovieInfoWrapper>
      <MovieLinks>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </MovieLinks>
      <Outlet />
    </MovieDetailsContainer>
  );
};

export default React.memo(MovieDetails);
