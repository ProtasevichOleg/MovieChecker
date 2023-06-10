import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CenteredMessage from 'components/CenteredMessage';
import ReviewList from 'components/ReviewList';
import SubTitle from 'components/SubTitle';

import { fetchReviewMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [state, setState] = useState('idle');

  useEffect(() => {
    let isSubscribed = true;
    const fetchReviews = async () => {
      setState('pending');
      try {
        const data = await fetchReviewMovie(movieId);
        if (isSubscribed) {
          setReviews(data);
          setState('responded');
        }
      } catch (error) {
        showMessage('Reviews loading failed. Please refresh the page');
        if (isSubscribed) {
          setState('rejected');
        }
      }
    };

    fetchReviews();
    return () => {
      isSubscribed = false;
    };
  }, [movieId]);

  return (
    <>
      <SubTitle title={'Reviews'} />

      {state === 'pending' && null}

      {state === 'rejected' && (
        <CenteredMessage
          message={'Reviews loading failed. Please refresh the page'}
        />
      )}

      {state === 'responded' && reviews.length > 0 && (
        <ReviewList reviews={reviews} />
      )}

      {state === 'responded' && reviews.length === 0 && (
        <CenteredMessage message={'No reviews found'} />
      )}
    </>
  );
};
export default Reviews;
