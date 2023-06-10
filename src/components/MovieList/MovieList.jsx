import React from 'react';
import PropTypes from 'prop-types';
import { MovieListStyled, MovieItem, MovieLink } from './MovieList.styled';

const MovieList = ({ movies, location }) => {
  return (
    <MovieListStyled>
      {movies.map(({ id, title }) => (
        <React.Fragment key={id}>
          {title ? (
            <MovieItem>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </MovieItem>
          ) : null}
        </React.Fragment>
      ))}
    </MovieListStyled>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieList;
