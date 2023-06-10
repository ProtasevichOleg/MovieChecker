import { memo, useState, useEffect, useRef } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';

import CenteredMessage from 'components/CenteredMessage';
import GoBackButton from 'components/GoBackButton';
import MovieInfoList from 'components/MovieInfoList';
import PageContainer from 'components/PageContainer';
import PageTitle from 'components/PageTitle';
import SecondaryNavigation from 'components/SecondaryNavigation';
import { fetchDetailsMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [state, setState] = useState('idle');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    let isSubscribed = true;
    const fetchMovieDetails = async () => {
      setState('pending');
      try {
        const data = await fetchDetailsMovie(movieId);
        if (isSubscribed) {
          setMovie(data);
          setState('responded');
        }
      } catch (error) {
        showMessage('Something went wrong, look for another movie');
        if (isSubscribed) {
          setState('rejected');
        }
      }
    };

    fetchMovieDetails();
    return () => {
      isSubscribed = false;
    };
  }, [movieId]);

  return (
    <PageContainer>
      <GoBackButton prevLocation={backLinkLocationRef.current} />
      {state === 'pending' && null}
      {state === 'rejected' && (
        <CenteredMessage
          message={'Something went wrong, look for another movie'}
        />
      )}
      {state === 'responded' && movie && (
        <>
          <PageTitle title={movie.title} />
          <MovieInfoList movie={movie} />
          <SecondaryNavigation>
            <NavLink to={`cast`}>Cast</NavLink>
            <NavLink to={`reviews`}>Reviews</NavLink>
          </SecondaryNavigation>
          <Outlet />
        </>
      )}
    </PageContainer>
  );
};

export default memo(MovieDetails);
