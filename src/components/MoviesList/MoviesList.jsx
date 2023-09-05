import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaFilm } from 'react-icons/fa';
import { List, ListItem, Link } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ title, id }) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <FaFilm />
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
