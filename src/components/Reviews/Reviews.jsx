import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewievs } from '../services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const responce = await getMovieRewievs(movieId);
        console.log(responce.results);
        setReviews(responce.results);
      } catch (error) {}
    };

    getReviews(movieId);
  }, [movieId]);
  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h4> Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <p>we don't have any reviews for this movie</p>;
};

export default Reviews;
