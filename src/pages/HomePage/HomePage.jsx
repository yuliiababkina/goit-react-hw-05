import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
    const [trendMovies, setTrendMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTrandingMovies();
                setTrendMovies(data);
            } catch (error) {
                alert(error.message);
            }
        };
        getData();
    }, []);

    return (
        <div className={s.homePage}>
            <h1 className={s.homeTitle}>Trending today</h1>
            {trendMovies.length > 0 ? (
                <MovieList movies={trendMovies} />
            ) : (
                <Loader />
            )}
        </div>
    );
}
