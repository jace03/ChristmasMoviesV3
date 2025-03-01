import { ADD_MOVIE, FETCH_MOVIES } from "../actions/buttonActions";

const initialState: any[] = [];

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default movieReducer;
