import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY2NzJlZmY2YTVlNDE4NjcyN2EyZDA3ZmFmNzY4NCIsInN1YiI6IjY0ZjMxMWZkNWYyYjhkMDBhYmNhMjkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiQ0g4bmTHxdwn97dRqSfMIbv4ALG5BCKuJOPjN1fOA';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: {
      language: `en-US`,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data.results;
};

const fetchMoviesByQuery = async searchQuery => {
  const response = await axios.get(`${BASE_URL}search/movie`, {
    params: {
      language: `en-US`,
      query: searchQuery,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data.results;
};

const fetchDetailsByMovie = async (movieId, optionDetail = '') => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}${optionDetail}`,
    {
      params: {
        language: 'en-US',
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data;
};

const moviesApi = {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchDetailsByMovie,
};

export default moviesApi;
