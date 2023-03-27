import { Link } from "react-router-dom";
const Home = () => { 
    return (
      <main>
        <h2>Trending today</h2>
        <ul>
          <li>
            <Link to="/movies/:movieId">Film</Link>
          </li>
        </ul>
      </main>
    );
}

export default Home;