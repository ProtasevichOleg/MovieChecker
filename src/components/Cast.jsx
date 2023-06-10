import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastList from 'components/CastList';
import CenteredMessage from 'components/CenteredMessage';
import SubTitle from 'components/SubTitle';

import { fetchCastMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [state, setState] = useState('idle');

  useEffect(() => {
    let isSubscribed = true;

    const fetchCast = async () => {
      setState('pending');
      try {
        const data = await fetchCastMovie(movieId);
        if (isSubscribed) {
          setCast(data);
          setState('responded');
        }
      } catch (error) {
        showMessage('Cast loading failed. Please refresh the page');
        if (isSubscribed) {
          setState('rejected');
        }
      }
    };

    fetchCast();

    return () => {
      isSubscribed = false;
    };
  }, [movieId]);

  return (
    <>
      <SubTitle title={'Cast'} />

      {state === 'pending' && null}

      {state === 'rejected' && (
        <CenteredMessage
          message={'Cast loading failed. Please refresh the page'}
        />
      )}

      {state === 'responded' && cast.length === 0 && (
        <CenteredMessage message={'No cast found'} />
      )}

      {state === 'responded' && cast.length > 0 && <CastList cast={cast} />}
    </>
  );
};

export default Cast;
