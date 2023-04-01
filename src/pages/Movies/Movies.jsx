import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import MoviesList from 'components/MovieList/MoviesList';
import { getSearchMovie } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import css from './Movie.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [, setError] = useState(null);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovieInput = async search => {
      if (query === '') return;

      try {
        const responce = await getSearchMovie(search);
        setMovies(responce.results);
        console.log(responce.results.length);
        if (responce.results.length === 0) {
          Notiflix.Notify.failure('Nothing was found on your request');
          return;
        }
        if (responce.results.length > 0) {
          Notiflix.Notify
            .success(`We was found ${responce.results.length} movies on your request
`);
        }
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
          `Whoops, something went wrong: ${error.message}`
        );
      }
    };

    getMovieInput(query);
  }, [query]);
  //  console.log(movies)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input className={css.searchFormIinput} type="text" name="query" />
        <button className={css.searchFormBtn} type="submit">
          <ImSearch style={{ marginRight: 8 }} />
        </button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
