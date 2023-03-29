import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "./services/api";
const Cast = () => {
  const [actor, setActor] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getActorName = async movieId => {
      const responce = await getMovieCredits(movieId);
      setActor(responce.cast);
// console.log(responce.cast);
    };
    getActorName(movieId);
  }, [movieId])
  // console.log(actor)
    return (
      <ul>
        {actor.map(({ name, character, id, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
}
 
export default Cast;