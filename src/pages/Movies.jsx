import { useNavigate } from "react-router-dom";
import movies from "../Data/Movies.js";
import "./Movies.css";

function Movies() {
    const navigate = useNavigate();
    return (
        <div className="movies-page">
            <div className="movies-grid">
                {movies.map((m) => (
                    <div key={m.id} className="movie-card">
                        <img src={m.poster} alt={m.title} />
                        <h3>{m.title}</h3>
                        <p>{m.year} • {m.genre.split(",")[0]}</p>
                        <p className="rating">⭐ {m.rating}</p>
                        <button onClick={() => navigate(`/movie/${m.id}`)}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Movies;