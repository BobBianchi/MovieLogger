import { MOVIES } from "../shared/MOVIES";

export const selectAllMovies = () => {
    return MOVIES;
};

export const selectRandomMovie = () => {
    return MOVIES[Math.floor(MOVIES.length * Math.random())];
};
