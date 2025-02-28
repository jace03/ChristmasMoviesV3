import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css"; // Import CSS file

type Movie = {
    id: string;
    title: string;
    release_year: string;
    genre: string;
    image_url: string | null;
};

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get("http://localhost/backend/christmasMoviesBackEnd/api.php")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setMovies(response.data);
                } else {
                    console.error("Invalid data format:", response.data);
                }
            })
            .catch(error => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div className="movie-container">
            <h1 className="movie-title">Christmas Movies</h1>
            <div className="movie-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <div className="movie-image">
                                {movie.image_url ? (
                                    <img src={movie.image_url} alt={movie.title} />
                                ) : (
                                    <div className="placeholder">No Image</div>
                                )}
                            </div>
                            <div className="movie-info">
                                <h2>{movie.title}</h2>
                                <p><strong>Year:</strong> {movie.release_year}</p>
                                <p><strong>Genre:</strong> {movie.genre}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="loading-text">Loading movies...</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;
