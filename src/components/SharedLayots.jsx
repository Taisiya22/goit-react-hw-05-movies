import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
export const SharedLayots = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

//  export default SharedLayots;