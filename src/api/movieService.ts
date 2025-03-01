import api from "./axiosInstance";

export interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string;
  image_url?: string; // Optional, since it can be NULL
}

export const fetchMovies = async () => {
  try {
    const response = await api.get("api.php");
    console.log("Movies API Response:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Add a new movie
export const addMovie = async (movieData: {
  title: string;
  release_year: number;
  genre: string;
  image_url?: string | null;
}) => {
  try {
    const response = await api.post("add_movie.php", movieData);
    console.log("Add Movie Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};
