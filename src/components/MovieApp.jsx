import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMovies, setQuery, setPage } from "../store/movieSlice";
import useDebounce from "../hook/useDebounce";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../pagination.css";
import "../movieList.css";
const apiUrl = import.meta.env.VITE_API_URL;

const MovieApp = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const dispatch = useDispatch();
  const { movies, loading, error, page, totalResults, query } =
    useSelector((state) => state.movies);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) return;

    dispatch(fetchMovies({ search: debouncedQuery, page }));
  }, [debouncedQuery, page]);

  return (
    <div style={{ padding: "20px" }}>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Movie Search App</h2>
         {user && (
          <p >Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
        )}
        <button style={{
          width: "100px",
          height: "30px"
        }}
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        style={{ padding: "10px", width: "300px" }}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="grid">
        {movies.map((m) => (
          <div className="card" key={m.imdbID}>
            <img src={m.Poster} alt={m.Title} />
            <h3>{m.Title}</h3>
            <p>{m.Year}</p>
          </div>
        ))}
      </div>

      {movies.length > 0 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => dispatch(setPage(page - 1))}
          >
            Prev
          </button>

          <span>Page {page}</span>

          <button
            disabled={page * 10 >= totalResults}
            onClick={() => dispatch(setPage(page + 1))}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieApp;