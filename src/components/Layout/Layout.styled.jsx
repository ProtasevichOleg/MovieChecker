import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.LayoutBackground};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 14px;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.layoutText};

  &:hover {
    color: ${props => props.theme.colors.layoutTextActive};
  }

  &.active {
    color: ${props => props.theme.colors.layoutTextActive};

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors.layoutTextActive};
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: ${props => props.theme.colors.LayoutBackground};
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.layoutText};
`;
