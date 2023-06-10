import styled from 'styled-components';

export const StyledMovieForm = styled.form`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  flex: 0.5;
  padding: 0.5em;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.secondary};
  outline: none;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.primaryUnactive};
    cursor: not-allowed;
  }
`;
