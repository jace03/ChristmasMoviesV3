import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";

export const fetchMovies = () => async (dispatch: Dispatch) => {
  const response = await axios.get("http://localhost/backend/christmasMoviesBackEnd/api.php");
  dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const addMovie = (movie: any) => async (dispatch: Dispatch) => {
  await axios.post("http://localhost/backend/christmasMoviesBackEnd/upload.php", movie);
  dispatch({ type: ADD_MOVIE, payload: movie });
};
