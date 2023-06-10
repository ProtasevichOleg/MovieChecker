import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListStyled = styled.ul`
  font-size: 14px;
`;

export const MovieItem = styled.li`
  /* &:not(:last-child) {
    margin-bottom: 1rem;
  } */
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.darkReviewBackground};

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.lightReviewBackground};
  }
`;

export const MovieLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
