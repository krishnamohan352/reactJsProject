import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../hook/useDebounce";
const apiUrl = import.meta.env.VITE_API_URL;
import "../pagination.css";
import "../movieList.css";

const API_KEY = "bc32e872";

const MovieApp = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const fetchMovies = async (search, pageNumber) => {
    if (!search) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `${apiUrl}?apikey=${API_KEY}&s=${search}&page=${pageNumber}`
      );

      if (res.data.Response === "False") {
        setError(res.data.Error);
        setMovies([]);
      } else {
        setMovies(res.data.Search || []);
        setTotalResults(res.data.totalResults);
      }

      setLoading(false);
    } catch (err) {
      setError("Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (query.trim() === "") {
    //   setMovies([]);
    //   return;
    // }
    fetchMovies(debouncedQuery, page);
  }, [debouncedQuery, page]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie Search App</h2>

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        style={{ padding: "10px", width: "300px" }}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="grid">
        {movies.map((m) => (
          <div className="card" key={m.id}>
            <img src={m.Poster} alt={m.Title}  />
            <h3>{m.title}</h3>
            <p>{m.year}</p>
          </div>
        ))}
      </div>

      {movies.length > 0 && (
        <div style={{ marginTop: "20px" }} className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page * 10 >= totalResults}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieApp;