// src/components/Layout.jsx
import { Suspense } from 'react';
import Spinner from 'components/Spinner';
import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
