// import defaultImg from '../empty.png';
import { useEffect, useState, Suspense, useRef } from 'react';
import Notiflix from 'notiflix';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import css from './MovieDetails.module.css';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { getMovieById } from 'components/services/api';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: large;
  font-weight: bold;
  color: #212121;
  text-decoration: none;
  &.active {
    color: skyblue;
  }
`;

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';

 const detailInfo = useRef(null)

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const responce = await getMovieById(movieId);
        detailInfo.current = responce;
        setMovie(detailInfo.current);
        // setMovie(responce);
        console.log(detailInfo.current);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
          `Whoops, something went wrong: ${error.message}`
        );
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);
  console.log(movie);

  return (
    <main>
      <p className={css.text}>
        <Link to={backLinkLocation} className={css.link}>
          <AiOutlineArrowLeft /> Go to back
        </Link>
      </p>

      {detailInfo.current ? (
        <>
          <div className={css.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <h4>User Score: {Math.round(movie.vote_average * 10)}%</h4>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>
                {movie?.genres
                  ?.map(gen => {
                    return gen.name;
                  })
                  .join(' ')}
              </p>
            </div>
          </div>
          <h4 className={css.title}>Additional information</h4>
          <ul className={css.listLink}>
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}/cast`}>Cast</StyledLink>
            </li>
            <li key={movie.vote_average}>
              <StyledLink to={`/movies/${movie.id}/reviews`}>
                Reviews
              </StyledLink>
            </li>
          </ul>
        </>
      ) : (
        <p>Not found page</p>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
