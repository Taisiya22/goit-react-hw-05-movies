import { Link, Outlet } from "react-router-dom";
const SharedLayots = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
          </header>
          <Outlet/>
    </div>
  );
}

 export default SharedLayots;