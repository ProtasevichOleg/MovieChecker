import PropTypes from 'prop-types';
import {
  ReviewListStyled,
  ReviewItem,
  ReviewerNickname,
  ReviewewText,
  FullReviewLink,
} from './ReviewList.styled';
import { MAX_REVIEW_LENGTH } from 'utils/constants';

const ReviewList = ({ reviews }) => {
  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return (
    <ReviewListStyled>
      {reviews.map(({ id, author, content, url }) => (
        <ReviewItem key={id}>
          <ReviewerNickname>{author}</ReviewerNickname>
          <ReviewewText>
            {truncateContent(content, MAX_REVIEW_LENGTH)}
          </ReviewewText>
          {content.length > MAX_REVIEW_LENGTH && (
            <FullReviewLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read full review
            </FullReviewLink>
          )}
        </ReviewItem>
      ))}
    </ReviewListStyled>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewList;
