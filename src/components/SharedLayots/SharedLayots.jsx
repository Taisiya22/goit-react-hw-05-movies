import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './SharedLayots.module.css';
import logo from 'images/logo.png';

export const SharedLayots = () => {
  return (
    <div>
      <header className={css.navBar}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
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
