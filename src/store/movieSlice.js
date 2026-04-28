import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ search, page }, { rejectWithValue }) => {
    try {
      if (!search?.trim()) {
        return rejectWithValue("Empty search");
      }

      const res = await axios.get(
        `${apiUrl}?apikey=${API_KEY}&s=${search}&page=${page}`
      );

      if (res.data.Response === "False") {
        return rejectWithValue(res.data.Error);
      }

      return {
        movies: res.data.Search || [],
        totalResults: Number(res.data.totalResults) || 0,
      };
    } catch (err) {
      return rejectWithValue("Something went wrong!");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    totalResults: 0,
    loading: false,
    error: "",
    page: 1,
    query: "",
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
        state.movies = [];
      });
  },
});

export const { setQuery, setPage } = movieSlice.actions;
export default movieSlice.reducer;