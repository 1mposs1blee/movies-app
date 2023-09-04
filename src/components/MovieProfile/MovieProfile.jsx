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
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://via.placeholder.com/300x300?text=No+Image`
        }
        alt={original_title ?? 'Image'}
      />
      <InfoWrapper>
        <MovieName>{original_title}</MovieName>
        <UserScore>User score: {popularity}%</UserScore>
        {overview ? (
          <>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewInfo>{overview}</OverviewInfo>
          </>
        ) : null}
        {genres.length ? (
          <>
            <GenresTitle>Genres</GenresTitle>
            <GenresInfo>{genres.map(({ name }) => name).join(', ')}</GenresInfo>
          </>
        ) : null}
        {production_companies.length ? (
          <>
            <CompaniesTitle>Production Companies</CompaniesTitle>
            <ProductionCompanyImgWrapper>
              {production_companies.map(({ logo_path, name, id }) => (
                <ProductionCompanyImg
                  key={id}
                  src={
                    logo_path
                      ? `https://image.tmdb.org/t/p/w500${logo_path}`
                      : `https://via.placeholder.com/200x200?text=No+Image`
                  }
                  alt={name ?? 'Image'}
                />
              ))}
            </ProductionCompanyImgWrapper>
          </>
        ) : null}
      </InfoWrapper>
    </MainWrapper>
  );
};

export default MovieProfile;

MovieProfile.propTypes = {
  movieOptions: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    production_companies: PropTypes.array.isRequired,
  }).isRequired,
};
