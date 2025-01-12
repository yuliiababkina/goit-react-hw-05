import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../../services/movies-api";
import s from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!movieId) return;
        const getData = async () => {
            try {
                const { data } = await fetchMovieReviewsById(movieId);
                setReviews(data.results);
            } catch (error) {
                alert(error.message);
            }
        };
        getData();
    }, [movieId]);

    if (!reviews) {
        return <Loader />;
    }

    return (
        <ul className={s.reviewsList}>
            {reviews.lenght > 0 ? (
                reviews.map((item) => (
                    <li key={item.id} className={s.reviewItem}>
                        <p className={s.reviewAuthor}>Author: {item.author}</p>
                        <p className={s.reviewText}>{item.content}</p>
                    </li>
                ))
            ) : (
                <p>We do not have any reviews for this movie</p>
            )}
        </ul>
    );
}
