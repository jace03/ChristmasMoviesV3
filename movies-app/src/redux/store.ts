import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../redux/movieSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Configure the store
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create typed versions of useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
