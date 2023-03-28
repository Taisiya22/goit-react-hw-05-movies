
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/services/api';
import MoviesList from "components/MoviesList";

const Home = () => { 
  const [movies, setMovies] = useState([]);
  useEffect(
    () => {
      const getMovie = async () => {
        try {
          const response = await getTrendingMovies();
          // console.log(response.results);
         setMovies(response.results); 
        }
        catch (error) { }
      }
      getMovie()
     },[]
  )
    return (
      <main>
        <h2>Trending today</h2>
        <MoviesList movies={movies } />
        </main>
      
    );
}

export default Home;