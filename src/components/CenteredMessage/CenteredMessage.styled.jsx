import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;
  font-size: 72px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  opacity: 15%;
  user-select: none;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
`;
