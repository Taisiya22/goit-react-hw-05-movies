import { Routes, Route } from 'react-router-dom';
import { SharedLayots } from './SharedLayots';
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import { lazy } from 'react';

// const MyComponent = lazy(() => import('path/to/MyComponent'));
// const SharedLayots = lazy(() => import('./SharedLayots'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayots />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
