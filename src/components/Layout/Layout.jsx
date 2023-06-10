import { Suspense } from 'react';
import Spinner from 'components/Spinner';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Nav,
  NavLinkStyled,
  Main,
  Footer,
  Copyright,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
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
      <Footer>
        <Copyright>© Developed by Oleh Protasevych 2023</Copyright>
      </Footer>
    </Container>
  );
};
export default Layout;
