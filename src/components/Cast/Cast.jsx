import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import {
  CastList,
  CastListItem,
  ItemImage,
  InfoWrapper,
  Name,
  Character,
  Popularity,
  CastWrapper,
  CastTitle,
} from './Cast.styled';

const Cast = () => {
  const [loading, setLoading] = useState(true);
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieCast = await moviesApi.fetchDetailsByMovie(
          movieId,
          '/credits'
        );

        setCastInfo(movieCast.cast);
      } catch (error) {
        console.error('Помилка при завантажені списка акторів фільму:', error);

        alert('Щось пішло не так. Будь ласка, перезавантажте додаток.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <CastWrapper>
      {loading ? null : castInfo.length ? (
        <>
          <CastTitle>Cast</CastTitle>
          <CastList>
            {castInfo.map(
              ({ character, id, profile_path, original_name, popularity }) => (
                <CastListItem key={id}>
                  <ItemImage
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : `https://via.placeholder.com/200x300?text=No+Image`
                    }
                    alt={original_name ?? 'Image'}
                  />
                  <InfoWrapper>
                    <Name>{original_name}</Name>
                    <Character>Character: {character || 'Unknown'}</Character>
                    <Popularity>
                      Popularity: {popularity || 'Unknown'}
                    </Popularity>
                  </InfoWrapper>
                </CastListItem>
              )
            )}
          </CastList>
        </>
      ) : (
        'Не було знайдено списка акторів за фільмом.'
      )}
    </CastWrapper>
  );
};

export default Cast;
