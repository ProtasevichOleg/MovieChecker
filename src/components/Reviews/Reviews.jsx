// src/components/Reviews/Reviews.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewMovie } from 'utils/api';
import showMessage from 'utils/swalConfig';
import {
  ReviewsContainer,
  Title,
  ReviewList,
  ReviewItem,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewMovie(movieId)
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch(error => {
        showMessage(error.message);
        setIsLoading(false);
      });
  }, [movieId]);

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return (
    <ReviewsContainer>
      <Title>Reviews</Title>
      {isLoading ? (
        <p></p>
      ) : (
        <ReviewList>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <ReviewItem key={review.id}>
                <strong>{review.author}</strong>
                <span>{truncateContent(review.content, 600)}</span>
                {review.content.length > 200 && (
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read full review
                  </a>
                )}
              </ReviewItem>
            ))
          ) : (
            <p>no reviews found 😞</p>
          )}
        </ReviewList>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
