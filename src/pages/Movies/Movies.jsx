import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import moviesApi from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

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

      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList movies={movies} />
      </Suspense>
    </main>
  );
};

export default Movies;
