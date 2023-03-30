import { useEffect, useState } from 'react';

import MoviesList from 'components/MovieList/MoviesList';
import { getSearchMovie } from 'components/services/api';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovieInput = async search => {
      try {
        const responce = await getSearchMovie(search);
        setMovies(responce.results);
      } catch (error) {}
    };
    getMovieInput(query);
  }, [query]);
  //  console.log(movies)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
