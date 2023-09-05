import PropTypes from 'prop-types';
import {
  ProductionCompanyImg,
  MainWrapper,
  InfoWrapper,
  MovieName,
  UserScore,
  OverviewTitle,
  OverviewInfo,
  GenresTitle,
  GenresInfo,
  CompaniesTitle,
  ProductionCompanyImgWrapper,
} from './MovieProfile.styled';

const MovieProfile = ({ movieOptions }) => {
  const {
    poster_path,
    original_title,
    popularity,
    overview,
    genres,
    production_companies,
  } = movieOptions;

  return (
    <MainWrapper>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w400${poster_path}`
            : `https://via.placeholder.com/400x600?text=No+Image`
        }
        alt={original_title}
      />
      <InfoWrapper>
        <MovieName>{original_title}</MovieName>
        <UserScore>User score: {popularity}%</UserScore>
        {overview && (
          <>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewInfo>{overview}</OverviewInfo>
          </>
        )}
        {genres.length > 0 && (
          <>
            <GenresTitle>Genres</GenresTitle>
            <GenresInfo>{genres.map(({ name }) => name).join(', ')}</GenresInfo>
          </>
        )}
        {production_companies.length > 0 && (
          <>
            <CompaniesTitle>Production Companies</CompaniesTitle>
            <ProductionCompanyImgWrapper>
              {production_companies.map(({ logo_path, name, id }) => (
                <ProductionCompanyImg
                  key={id}
                  src={
                    logo_path
                      ? `https://image.tmdb.org/t/p/w200${logo_path}`
                      : `https://via.placeholder.com/200x200?text=No+Image`
                  }
                  alt={name ?? 'Production Company logo'}
                />
              ))}
            </ProductionCompanyImgWrapper>
          </>
        )}
      </InfoWrapper>
    </MainWrapper>
  );
};

export default MovieProfile;

MovieProfile.propTypes = {
  movieOptions: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    production_companies: PropTypes.array.isRequired,
  }).isRequired,
};
