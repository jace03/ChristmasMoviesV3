import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchMovies, selectAllMovies } from '../../redux/movieSlice';

const AddMovie = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies()); // Fetch movies when the component mounts
  }, [dispatch]);

  const movies = useAppSelector(selectAllMovies);
{movies}
  return (
    <div>
      <h2>Add Movie</h2>
      {/* Your form for adding a movie */}
      <form>
        {/* Add movie form fields */}
      </form>
      <div>
        <h3>Movie List:</h3>
      ({movies})       
      {movies.length > 0 ? (
          movies.map((movie: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; genre: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; release_year: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            <div key={movie.id}>
              <h4>{movie.title}</h4>
              <p>{movie.genre} ({movie.release_year})</p>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
