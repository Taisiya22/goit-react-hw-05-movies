import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './SharedLayots.module.css';
import styled from 'styled-components';
import logo from '../images/logo.png';

const StyledLink = styled(NavLink)`
  font-size: xx-large;
  color: white;
  text-decoration: none;
  color: white;
  &.active {
    color: yellow;
  }
`;

 const SharedLayots = () => {
  return (
    <div>
      <header className={css.navBar}>
        <nav className={css.nav}>
          <StyledLink className={css.navLink} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.navLink} to="/movies">
            Movies
          </StyledLink>
        </nav>
        <img width={70} height={70} src={logo} alt="" />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

 export default SharedLayots;
