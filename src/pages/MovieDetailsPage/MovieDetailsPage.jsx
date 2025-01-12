import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/movies-api";
import s from "./MovieDetailsPage.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    const location = useLocation();
    const backLink = useRef(location.state ?? "/movies");

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await fetchMovieById(movieId);
                setMovie(data);
            } catch (error) {
                alert(error.message);
            }
        };
        getData();
    }, [movieId]);

    return (
        <div className={s.movieDetailsPage}>
            <Link to={backLink.current} className={s.goBackBtn}>
                <FaArrowLeftLong size={20} />
                Go Back
            </Link>
            {movie ? <MovieCard movie={movie} /> : <Loader />}
        </div>
    );
}
