// Layout.styled.jsx

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  /*  */
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.navLink};
  text-decoration: none;
  margin-right: 20px;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.navLinkActive};
  }

  &.active {
    color: ${props => props.theme.colors.navLinkActive};
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors.navLinkActive};
    }
  }
  `;

export const Main = styled.main`
  padding: 20px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
