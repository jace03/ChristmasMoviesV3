import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/backend/christmasMoviesBackEnd/',
});

export const fetchMovies = async () => {
  const response = await api.get('api.php');
  return response.data;
};

export const addMovie = async (movieData: { title: string; release_year: number; genre: string; image_url?: string | null; }) => {
  const response = await api.post('api.php', movieData);
  return response.data;
};
