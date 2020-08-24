import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // Snippet of code that runs based on a specific condition/variable
  // When a row loads, pull information for each specific row
  useEffect(() => {
    // If [], run once when the row loads, If [condition], run each time condition changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // Gets this 1st -> https://api.themoviedb.org/3 then takes
      // fetchUrl Making the entire request the full Url
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {/* Several row-posters*/}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Container -> posters */}
    </div>
  );
}

export default Row;
