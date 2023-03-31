import axios from 'axios';

const API_KEY = 'bac05ff424f5bb3299d7f1868da01dae';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getTrendingMovies() {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data;
}

async function getSearchMovie(search) {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1`
  );
  return res.data;
}

async function getMovieById(id) {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
}

async function getMovieCredits(id) {
  const res = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
}

async function getMovieRewievs(id) {
  const res = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
}

export {
  getTrendingMovies,
  getSearchMovie,
  getMovieById,
  getMovieCredits,
  getMovieRewievs,
};
