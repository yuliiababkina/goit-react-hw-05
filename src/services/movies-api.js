import axios from "axios";

const TMDB_API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjFmZDk4NjJlYjEwNmM0N2IzYWNjNjA5NDBjZjNkYSIsIm5iZiI6MTczNjQ1NzU0MC44NDE5OTk4LCJzdWIiOiI2NzgwM2Q0NDM4ODFjNzk0MTliYjUwMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.F4GS48dLneSQasj5I2f7FjZrfQ9ERuFuwg80ShY58Bs";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_API_TOKEN}`;
axios.defaults.headers.common["accept"] = "application/json";

export const fetchTrandingMovies = async () => {
    const { data } = await axios.get("trending/movie/day");
    return data.results;
};

export const fetchMovieById = async (id) => {
    const data = await axios.get(`/movie/${id}`);
    return data;
};

export const fetchMovieReviewsById = async (id) => {
    const data = await axios.get(`/movie/${id}/reviews`);
    return data;
};

export const fetchMovieCastBById = async (id) => {
    const data = await axios.get(`movie/${id}/credits`);
    return data;
};

export const fetchSearchedMovie = async (query) => {
    const data = await axios.get("/search/movie", { params: { query } });
    return data;
};
