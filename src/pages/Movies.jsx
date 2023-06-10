import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import CenteredMessage from 'components/CenteredMessage/CenteredMessage';
import MovieList from 'components/MovieList/MovieList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import PageTitle from 'components/PageTitle/PageTitle';
import PageContainer from 'components/PageContainer';

import { fetchQueryMovies } from 'utils/api';
import showMessage from 'utils/swalConfig';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState('idle');
  const [searchQuery, setSearchQuery] = useState(null);

  const location = useLocation();

  useEffect(() => {
    let isSubscribed = true;
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
      setState('pending');

      const fetchMovies = async () => {
        try {
          const data = await fetchQueryMovies(query);
          if (isSubscribed) {
            setMovies(data);
            setState('responded');
          }
        } catch (error) {
          showMessage(
            `Search for '${searchQuery}' failed. Please try again...`
          );
          if (isSubscribed) {
            setState('rejected');
          }
        }
      };
      fetchMovies();
    }

    return () => {
      isSubscribed = false;
    };
  }, [searchParams, searchQuery]);

  return (
    <PageContainer>
      <PageTitle title={'Search for a movie'} />
      <MovieSearchForm />

      {state === 'idle' && <CenteredMessage message={'Enter a movie name'} />}

      {state === 'pending' && null}

      {state === 'rejected' && (
        <CenteredMessage
          message={`Search for '${searchQuery}' failed. Please try again...`}
        />
      )}

      {state === 'responded' && movies.length === 0 && (
        <CenteredMessage message={`No movies found for "${searchQuery}"`} />
      )}

      {state === 'responded' && movies.length > 0 && (
        <>
          <MovieList movies={movies} location={location} />
        </>
      )}
    </PageContainer>
  );
};

export default Movies;
