import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import {
  ReviewItem,
  ReviewName,
  ReviewContent,
  ReviewsTitle,
  ReviewsWrapper,
  NoReviewsMessage,
} from './Reviews.styled';

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await moviesApi.fetchDetailsByMovie(
          movieId,
          '/reviews'
        );

        setReviewsInfo(movieReviews.results);
      } catch (error) {
        console.error('Error while loading movie reviews:', error);

        alert('Something went wrong. Please, reload the application.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
      <ReviewsTitle>Movie Reviews</ReviewsTitle>
      {loading ? (
        <div>Loading...</div>
      ) : reviewsInfo.length ? (
        <>
          <ul>
            {reviewsInfo.map(({ author, id, content }) => (
              <ReviewItem key={id}>
                <ReviewName>{author}</ReviewName>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            ))}
          </ul>
        </>
      ) : (
        <NoReviewsMessage>
          No reviews were found for the movie.
        </NoReviewsMessage>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
