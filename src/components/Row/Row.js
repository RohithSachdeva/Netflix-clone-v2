import axios from "../../api/axios.js";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //Whenever you use a variable that is not found in the useEffect, you need to put it into the dependancy array at the end of the function.

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

//Logic behind mapping the images
// Only map the movie IF
// (isLargeRow && movie.poster_path) Our Netflix originals row on the homescreen has the isLargeRow property attached to it.  So when we have a component whose isLargeRow is True, opt to use the movie.poster_path.  If not, when we have !isLargeRow (isLargeRow is False, our default value) we use the movie.backdrop_path.

//Our img is styled with row_poster by default.  If the conditions of isLargeRow is met, we add the additional styling of row_posterLarge.  I'm guess the precedence is taken from CSS being a cascading language (Our row_posterLarge stylings are found at the bottom of the page).

//The src img contains a baseURL that serves as the beginning for both poster_path and backdrop_path.  If isLargeRow is true, use movie.poster_path if available.. else use the backdrop_path.

// alt={movie.name}; good for SEO purposes.
