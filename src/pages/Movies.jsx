import { Link } from "react-router-dom";
const Movies = () => {
    return (
      <main>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
        <ul>
          <li>
            <Link to="/movies/:movieId">film</Link>
          </li>
        </ul>
      </main>
    );
}

export default Movies;