// src/components/MovieDetails/MovieDetails.styled.jsx
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 1em;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  gap: 10%;
`;

export const MovieInfo = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin-right: 1em;
`;

export const MovieInfoItem = styled.div`
  margin-bottom: 0.5em;
`;

export const MovieInfoLabel = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

export const MovieInfoValue = styled.span`
  /*  */
`;

export const MovieOverview = styled.li`
  margin-top: 20px;
`;

export const MovieLinks = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const MoviePoster = styled.img`
  /* max-width: 300px; */
`;
