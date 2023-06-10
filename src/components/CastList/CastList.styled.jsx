import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: calc((100% - 150px * 6) / 5);
  row-gap: 48px;
`;

export const Actor = styled.li`
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`;

export const ActorName = styled.p`
  padding: 5px 0;
`;

export const ActorImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;
