import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { getTrendingMovies } from 'services/api';
import MoviesList from 'components/MovieList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getTrendingMovies();
        // console.log(response.results);
        setMovies(response.results);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
          `Whoops, something went wrong: ${error.message}`
        );
      }
    };
    getMovie();
  }, []);
  return (
    <main>
      <h2 className={css.title}>Trending today</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
