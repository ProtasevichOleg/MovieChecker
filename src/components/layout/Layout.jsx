// src/components/Layout.jsx

import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from 'components/Spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Spinner />}> 
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
