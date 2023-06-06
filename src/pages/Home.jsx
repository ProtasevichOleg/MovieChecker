// src/pages/Home.jsx
import { fetchTrendMovies } from '../utils/api';
import { Link } from 'react-router-dom';
import useFetch from 'hooks/useFetch';

const Home = () => {
  const { data: movies, error } = useFetch(fetchTrendMovies, () => []);

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h1>Popular Movies Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
