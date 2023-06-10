import styled from 'styled-components';

export const ReviewListStyled = styled.ul``;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.darkReviewBackground};

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.lightReviewBackground};
  }
`;

export const ReviewerNickname = styled.strong`
  font-weight: bold;
`;

export const ReviewewText = styled.span`
  display: inline-block;
  margin-right: 0.5em;
`;

export const FullReviewLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
`;
