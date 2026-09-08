import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../Data/Movies.js";
import "./Movies.css";

const Movies = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // 7 links
    const categories = ["All", "Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Romance"];

    const filteredMovies = movies.filter(movie => {
        const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory = filter === "All" || movie.genre?.includes(filter);
        return matchSearch && matchCategory;
    });

    return (
        <div className="movies-page">
            {/* Search Bar */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* 7 Links */}
            <div className="category-links">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={filter === cat ? "active" : ""}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Movies Grid */}
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
                        <img src={movie.poster || movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                    </Link>
                ))}
            </div>

            {filteredMovies.length === 0 && <p className="no-result">No movies found</p>}
        </div>
    );
};

export default Movies;