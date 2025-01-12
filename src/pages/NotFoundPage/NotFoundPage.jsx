import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <div className={s.container}>
            <div className={s.face}>
                <div className={s.band}>
                    <div className={s.red}></div>
                    <div className={s.white}></div>
                    <div className={s.blue}></div>
                </div>
                <div className={s.eyes}></div>
                <div className={s.dimples}></div>
                <div className={s.mouth}></div>
            </div>

            <h1 className={s.txt}>Oops! Something went wrong!</h1>
            <Link to="/" className={s.btn}>
                Return to Home
            </Link>
        </div>
    );
}
