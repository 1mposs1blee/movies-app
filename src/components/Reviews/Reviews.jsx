import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from 'services/movies-api';
import {
  ReviewItem,
  ReviewName,
  ReviewContent,
  ReviewsTitle,
  ReviewsWrapper,
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
        console.error('Помилка при завантажені відгуків фільму:', error);

        alert('Щось пішло не так. Будь ласка, перезавантажте додаток.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
      {loading ? null : reviewsInfo.length ? (
        <>
          <ReviewsTitle>Movie Reviews</ReviewsTitle>
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
        'Не було знайдено відгуків за фільмом.'
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
