// src/components/Reviews/Reviews.styled.jsx
import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 1em;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.darkReviewBackground};

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.lightReviewBackground};
  }

  strong {
    font-weight: bold;
  }

  span {
    display: inline-block;
    margin-right: 0.5em;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;
