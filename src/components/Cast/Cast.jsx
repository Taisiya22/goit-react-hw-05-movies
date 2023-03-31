import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieCredits } from '../services/api';
import defaultImg from '../images/defaultImg.png';
import css from './Cast.module.css';

const Cast = () => {
  const [actor, setActor] = useState([]);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getActorName = async movieId => {
      try {
        const responce = await getMovieCredits(movieId);
        setActor(responce.cast);
        // console.log(responce.cast);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
          `Whoops, something went wrong: ${error.message}`
        );
      }
    };
    getActorName(movieId);
  }, [movieId]);
  // console.log(actor)
  return (
    <ul className={css.list}>
      {actor.map(({ name, character, id, profile_path }) => (
        <li key={id}>
          <img
            className={css.imgCard}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : defaultImg
            }
            alt={name}
          />
          <p className={css.titleCard}>{name}</p>
          <p className={css.titleCard}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
