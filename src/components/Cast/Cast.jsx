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
  NoCastMessage,
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
        console.error('Error while loading the list of movie actors:', error);

        alert('Something went wrong. Please, reload the application.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <CastWrapper>
      <CastTitle>Cast</CastTitle>
      {loading ? (
        <div>Loading...</div>
      ) : castInfo.length ? (
        <>
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
        <NoCastMessage>
          No list of actors was found for the movie.
        </NoCastMessage>
      )}
    </CastWrapper>
  );
};

export default Cast;
