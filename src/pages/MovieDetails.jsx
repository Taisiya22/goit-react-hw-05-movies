import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'components/services/api';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const {movieId} = useParams();
  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const responce = await getMovieById(movieId);
        setMovie(responce);
        console.log(responce);
      } catch (error) {}
      
    };
    getMovieDetails(movieId);
  }, [movieId]);
  // const { genres } = movie;
  // const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <main>
      <Link to="/">Go to back</Link>

      <img src="" alt="" />
      <div>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
        <p>User Score:{movie.runtime}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p></p>
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