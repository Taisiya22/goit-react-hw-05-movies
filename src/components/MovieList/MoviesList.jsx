import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './MovieList.module.css';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name }) => (
        <Link
          className={css.link}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <li className={css.item} key={id=nanoid()}>
            {title || name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default MoviesList;
