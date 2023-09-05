import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import moviesApi from 'services/movies-api';
import { Link, LinkList, AdditionalInfTitle } from './MovieDetails.styled';
import MovieProfile from 'components/MovieProfile';

const MovieDetails = () => {
  const [movieOptions, setMovieOptions] = useState(null);
  const location = useLocation();
  const currentLocation = useRef(location);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieOptions = async () => {
      try {
        const movie = await moviesApi.fetchDetailsByMovie(movieId);

        setMovieOptions(movie);
      } catch (error) {
        console.error('Помилка при завантажені деталей фільму:', error);

        alert('Щось пішло не так. Будь ласка, перезавантажте додаток.');
      }
    };

    fetchMovieOptions();
  }, [movieId]);

  const fromPath = currentLocation.current.state?.from ?? '/movies';

  return (
    <main>
      {movieOptions && (
        <>
          <Link to={fromPath}>Go back</Link>
          <MovieProfile movieOptions={movieOptions} />
          <AdditionalInfTitle>Additional information</AdditionalInfTitle>
          <LinkList>
            <li>
              <Link to="cast">Cast of Actors</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </LinkList>
        </>
      )}

      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
