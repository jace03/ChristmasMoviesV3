import React from 'react';
import MovieList from './components/Movie/MovieList.tsx';
import AddMovie from './components/Movie/AddMovie.tsx';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Christmas Movies</h1>
      {/* <AddMovie /> */}
      <MovieList />
    </div>
  );
};

export default App;
