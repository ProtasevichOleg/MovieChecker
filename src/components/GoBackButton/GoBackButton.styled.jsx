import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackButtonStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.layoutText};
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary};
  }
`;
