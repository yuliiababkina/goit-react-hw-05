import { useEffect, useState } from "react";
import { fetchMovieCastBById } from "../../services/movies-api";
import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        if (!movieId) return;
        const getData = async () => {
            try {
                const { data } = await fetchMovieCastBById(movieId);
                setCast(data.cast);
            } catch (error) {
                alert(error.message);
            }
        };
        getData();
    }, [movieId]);

    const defaultImagePath = "https://image.tmdb.org/t/p/w500";
    const defaultImg =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

    if (!cast) {
        return <Loader />;
    }

    return (
        <ul className={s.castList}>
            {cast.map((item) => (
                <li key={item.id} className={s.castItem}>
                    <div className={s.castImage}>
                        <img
                            src={
                                item.profile_path
                                    ? `${defaultImagePath}${item.profile_path}`
                                    : defaultImg
                            }
                            alt={item.name}
                        />
                    </div>
                    <p className={s.castName}>{item.name}</p>
                    <p className={s.castCharacter}>
                        Character: {item.character}
                    </p>
                </li>
            ))}
        </ul>
    );
}
