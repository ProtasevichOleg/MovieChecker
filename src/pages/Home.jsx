import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CenteredMessage from 'components/CenteredMessage';
import MovieList from 'components/MovieList';
import PageContainer from 'components/PageContainer';
import PageTitle from 'components/PageTitle';

import { fetchTrendMovies } from '../utils/api';
import showMessage from '../utils/swalConfig';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    let isSubscribed = true;
    setState('pending');
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendMovies();
        if (isSubscribed) {
          setMovies(data);
          setState('responded');
        }
      } catch (error) {
        showMessage('Popular movies loading failed. Please refresh the page');
        if (isSubscribed) {
          setState('rejected');
        }
      }
    };

    fetchMovies();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <PageContainer>
      <PageTitle title={'Popular Movies Today'} />
      {state === 'responded' && (
        // <MovieList movies={movies} />
        <MovieList movies={movies} location={location} />
      )}
      {state === 'rejected' && (
        <CenteredMessage
          message={'Popular movies loading failed. Please refresh the page'}
        />
      )}
    </PageContainer>
  );
};

export default Home;
