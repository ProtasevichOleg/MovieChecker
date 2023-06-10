import styled from 'styled-components';

export const SecondaryNavigationStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;

  a {
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};

    &.active {
      position: relative;
      color: ${props => props.theme.colors.layoutText};
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;
