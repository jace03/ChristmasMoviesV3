// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import moviesReducer from '../redux/reducers/movieReducer'; // Adjust the path to your movieSlice

// Create the Redux store
const store = configureStore({
  reducer: {
    movies: moviesReducer,  // Movies reducer
  },
});

// Type the RootState (the state of the whole app)
export type RootState = ReturnType<typeof store.getState>;

// Type the AppDispatch (dispatch function used in components)
export type AppDispatch = typeof store.dispatch;

// Create custom hooks for typed dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();  // Dispatch with correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;