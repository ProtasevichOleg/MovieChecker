import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  display: flex;
  gap: 10%;
  color: ${props => props.theme.colors.secondary};
`;

export const MovieInfoStyled = styled.ul``;

export const MovieInfoItem = styled.li`
  margin-bottom: 0.5em;
`;

export const MovieInfoLabel = styled.span`
  display: inline-block;
  width: 150px;
  font-weight: bold;
`;

export const MovieInfoValue = styled.span`
  font-style: italic;
`;

export const MovieOverview = styled.li`
  margin-top: 20px;
`;

export const MoviePoster = styled.img`
  width: 300px;
`;
