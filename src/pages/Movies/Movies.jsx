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
          'Error while loading movies for the search query:',
          error
        );

        alert('Something went wrong. Please, reload the application.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const formSubmit = query => {
    if (query === searchQuery) {
      alert('You entered the same search query.');

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
