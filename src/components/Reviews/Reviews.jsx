// src/components/Reviews/Reviews.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviewMovie(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        showMessage('Error while fetching movie reviews.');
        setError(error);
      });
  }, [movieId]);

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
