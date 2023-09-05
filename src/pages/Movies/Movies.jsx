import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import moviesApi from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setLoading(true);

    const fetchMovies = async () => {
      try {
        const moviesByQuery = await moviesApi.fetchMoviesByQuery(searchQuery);

        setMovies(moviesByQuery);
      } catch (error) {
        console.error(
          'Помилка при завантажені фільмів за пошуковим запитом:',
          error
        );

        alert('Щось пішло не так. Будь ласка, перезавантажте додаток.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const formSubmit = query => {
    if (query === searchQuery) {
      alert('Ви ввели той самий пошуковий запит.');

      return;
    }

    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onFormSubmit={formSubmit} startValue={searchQuery} />
      {loading ? <div>Loading...</div> : <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
