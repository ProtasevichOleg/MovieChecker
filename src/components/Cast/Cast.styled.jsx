// src/components/Cast/Cast.styled.jsx
import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 1em;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
`;

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
  grid-gap: 50px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.secondary};

  p {
    margin-bottom: 0.5em;
  }
`;

export const ActorImage = styled.img`
  /* max-width: 50%; */
  object-fit: cover;
  border-radius: 5px;
`;
