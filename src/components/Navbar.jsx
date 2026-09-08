import { Link } from "react-router-dom";
import "./Navbar.css"; // if you have

const Navbar = () => {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            padding: "15px",
            background: "#0a1931"
        }}>
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/movies">Movies</Link>
        </nav>
    );
};

export default Navbar;