import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
    const { id } = useParams();

    const movies = [
        {
            id: 1,
            title: "RRR",
            year: 2022,
            genre: "Action, Drama",
            rating: "8.0",
            director: "S. S. Rajamouli",
            cast: "N. T. Rama Rao Jr., Ram Charan, Alia Bhatt",
            image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
            description:
                "RRR is an action drama film about two legendary revolutionaries and their journey against British rule in India."
        },
        {
            id: 2,
            title: "Baahubali",
            year: 2015,
            genre: "Action, Drama",
            rating: "8.0",
            director: "S. S. Rajamouli",
            cast: "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
            description:
                "Baahubali is an epic action drama about a young man who discovers his royal heritage and learns about his family's history."
        },
        {
            id: 3,
            title: "KGF Chapter 1",
            year: 2018,
            genre: "Action, Drama",
            rating: "8.2",
            director: "Prashanth Neel",
            cast: "Yash, Srinidhi Shetty, Anant Nag",
            image: "https://upload.wikimedia.org/wikipedia/en/0/05/K.G.F_Chapter_1_poster.jpg",
            description:
                "KGF Chapter 1 follows Rocky, a determined man who rises from poverty and enters the dangerous world of the Kolar Gold Fields."
        },
        {
            id: 4,
            title: "Arjun Reddy",
            year: 2017,
            genre: "Romance, Drama",
            rating: "8.1",
            director: "Sandeep Reddy Vanga",
            cast: "Vijay Deverakonda, Shalini Pandey",
            image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Arjun_Reddy.jpg",
            description:
                "Arjun Reddy is a romantic drama about a young surgeon dealing with love, heartbreak and personal struggles."
        },
        {
            id: 5,
            title: "Jersey",
            year: 2019,
            genre: "Sports, Drama",
            rating: "8.5",
            director: "Gowtam Tinnanuri",
            cast: "Nani, Shraddha Srinath, Sathyaraj",
            image: "https://upload.wikimedia.org/wikipedia/en/6/69/Jersey_2019_film_poster.jpg",
            description:
                "Jersey is an emotional sports drama about a former cricketer who decides to return to cricket and prove himself."
        },
        {
            id: 6,
            title: "Eega",
            year: 2012,
            genre: "Fantasy, Action",
            rating: "7.7",
            director: "S. S. Rajamouli",
            cast: "Nani, Samantha Ruth Prabhu, Sudeep",
            image: "https://upload.wikimedia.org/wikipedia/en/7/75/Eega_poster.jpg",
            description:
                "Eega is a fantasy action film about a man who is reincarnated as a fly and takes revenge on the person who killed him."
        }
    ];

    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
        return (
            <div className="details-page">
                <h1>Movie Not Found 😔</h1>
                <Link to="/movies">
                    <button>Back to Movies</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="details-page">

            <div className="details-card">

                <img
                    src={movie.image}
                    alt={movie.title}
                    className="details-poster"
                />

                <div className="details-info">

                    <h1>{movie.title}</h1>

                    <p><b>Year:</b> {movie.year}</p>

                    <p><b>Genre:</b> {movie.genre}</p>

                    <p><b>Rating:</b> ⭐ {movie.rating}</p>

                    <p><b>Director:</b> {movie.director}</p>

                    <p><b>Cast:</b> {movie.cast}</p>

                    <h3>Story</h3>

                    <p className="description">
                        {movie.description}
                    </p>

                    <Link to="/movies">
                        <button className="back-button">
                            ← Back to Movies
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default MovieDetails;