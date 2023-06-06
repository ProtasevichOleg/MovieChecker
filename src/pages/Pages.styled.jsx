import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 1em;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

export const MovieSearchForm = styled.form`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

export const MovieList = styled.ul`
  /* list-style: none;
  padding: 0; */
`;

export const MovieItem = styled.li`
  margin-bottom: 1rem;

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
