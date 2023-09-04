import { useState, useEffect } from 'react';
import moviesApi from 'services/movies-api';
import MoviesList from 'components/MoviesList';
import { PageTitle } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const movies = await moviesApi.fetchTrendingMovies();

        setTrendingMovies(movies);
      };

      getTrendingMovies();
    } catch (error) {
      console.error('Помилка при завантажені трендових фільмів:', error);

      alert('Щось пішло не так. Будь ласка, перезавантажте додаток.');
    }
  }, []);

  return (
    <main>
      <PageTitle>Trending Movies</PageTitle>
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default Home;
