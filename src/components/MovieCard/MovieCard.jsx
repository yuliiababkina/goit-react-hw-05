import clsx from "clsx";
import s from "./MovieCard.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function MovieCard({ movie }) {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    const defaultImagePath = "https://image.tmdb.org/t/p/w500";
    const defaultImg =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

    return (
        <>
            <div className={s.mainContent}>
                <div className={s.movieImage}>
                    <img
                        src={
                            movie.backdrop_path
                                ? `${defaultImagePath}${movie.backdrop_path}`
                                : defaultImg
                        }
                        alt={movie.title}
                    />
                </div>

                <div className={s.movieDetails}>
                    <h2 className={s.movieTitle}>
                        {`${movie.title} (${new Date(
                            movie.release_date
                        ).getFullYear()})`}
                    </h2>
                    <p className={s.movieText}>
                        User Score: {Math.floor(movie.vote_average * 10)}%
                    </p>
                    <h3 className={s.movieSubtitle}>Overview</h3>
                    <p className={s.movieText}>{movie.overview}</p>
                    <h3 className={s.movieSubtitle}>Genres</h3>
                    {movie.genres && (
                        <ul className={s.movieGenresList}>
                            {movie.genres.map((item, index) => (
                                <li key={index} className={s.movieGenresItem}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <hr />
            <div className={s.additionalContent}>
                <h4 className={s.movieAdditionalInfo}>
                    Additional information
                </h4>
                <nav className={s.movieDetailsNavigation}>
                    <ul className={s.movieDetailsList}>
                        <li>
                            <NavLink to="cast" className={buildLinkClass}>
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews" className={buildLinkClass}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <hr />

                <Outlet />
            </div>
        </>
    );
}
