import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.elements.search.value.trim();

        if (inputValue === "") {
            toast.error("Please, type your search query.");
            return;
        }
        onSubmit(inputValue.toLowerCase());
        e.target.reset();
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                autoComplete="off"
                className={s.input}
            />
            <button type="submit" className={s.btn}>
                Search
            </button>
        </form>
    );
}
