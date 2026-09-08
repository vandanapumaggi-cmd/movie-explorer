import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; // if error, change to ../assets/images/hero.png
import "./Home.css";

const Home = () => {
    return (
        <div className="home-bg" style={{ backgroundImage: `url(${heroImg})` }}>
            <div className="home-overlay">

                {/* Navbar centered */}
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <span>|</span>
                    <Link to="/movies">Movies</Link>
                </nav>

                {/* Center content */}
                <div className="center-content">
                    <h1>Welcome to Movie Explorer</h1>
                    <p>Explore thousands of movies</p>
                    <Link to="/movies" className="explore-btn">Explore Movies</Link>
                </div>

            </div>
        </div>
    );
};

export default Home;