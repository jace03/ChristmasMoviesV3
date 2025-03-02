// AddMovie.tsx
import React, { useEffect } from 'react';
import { fetchMovies, selectAllMovies } from '../../redux/movieSlice';
import { useAppDispatch, useAppSelector} from '../../redux/store';


const AddMovie = () => {
    const dispatch = useAppDispatch();  

    useEffect(() => {
        dispatch(fetchMovies());  // Dispatch the async action
        }, [dispatch]);

    const movies = useAppSelector(selectAllMovies);
        console.log({movies})
  return (
    <div>
      {/* Your form and content */}
      <h2>Add Movie</h2>
    </div>
  );
};

export default AddMovie;
