import { Link, Outlet } from 'react-router-dom';
const MovieDetails = () => {
    return (
      <main>
        <Link to="/">Go to back</Link>

        <img src="" alt="" />
        <div>
          <h2>Name film</h2>
          <p>description</p>
          <h3>Overview</h3>
          <p>description</p>
          <h3>Genres</h3>
          <p>description</p>
        </div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="/movies/:movieId/cast">Cast</Link>
          </li>
          <li>
            <Link to="/movies/:movieId/reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </main>
    );
}
 
export default MovieDetails;