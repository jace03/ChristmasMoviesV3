import React from 'react';
import MovieList from './components/MovieList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Christmas Movies</h1>
      <MovieList />
    </div>
  );
};

export default App;
