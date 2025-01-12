import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSearchedMovie } from "../../services/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";

export default function MoviesPage() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const handleSubmit = (value) => {
        setSearchedMovies(null);
        searchParams.set("query", value);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        if (!query) return;
        const getData = async () => {
            try {
                const { data } = await fetchSearchedMovie(query.toLowerCase());
                setSearchedMovies(data.results);

                if (data.results.length === 0) {
                    setSearchedMovies([]);
                    toast.error("No movies found by your search query.");
                    return;
                }
            } catch (error) {
                alert(error.message);
            }
        };
        getData();
    }, [query]);

    return (
        <div className={s.moviePage}>
            <SearchBar onSubmit={handleSubmit} />
            {searchedMovies ? (
                <MovieList movies={searchedMovies} />
            ) : (
                <Loader />
            )}
        </div>
    );
}
