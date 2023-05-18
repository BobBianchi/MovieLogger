import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { MOVIES } from "../shared/MOVIES";
import { mapImageURL } from "../utils/mapImageURL";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await fetch(baseUrl + "movies");
    if (!response.ok) {
        return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
});

export const selectAllMovies = () => {
    return MOVIES;
};

export const selectRandomMovie = () => {
    return MOVIES[Math.floor(MOVIES.length * Math.random())];
};

export const selectMovieById = (id) => {
    return MOVIES.find((movie) => movie.id === id);
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.moviesArray = mapImageURL(action.payload);
        },
        [fetchMovies.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        },
    },
});

export const moviesReducer = moviesSlice.reducer;
