// import defaultImg from '../components/images/defaultImg.png';
import { useEffect, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { getMovieById } from 'components/services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';


  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const responce = await getMovieById(movieId);
        setMovie(responce);
        // console.log(responce);
      } catch (error) {}
    };
    getMovieDetails(movieId);
  }, [movieId]);
  console.log(movie);

  return (
    <main>
      <Link to={backLinkLocation}>Go to back</Link>

      <div>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <p>User Score:{movie.runtime}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie?.genres
            ?.map(gen => {
              return gen.name;
            })
            .join(' ')}
        </p>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
