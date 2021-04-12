import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../api/axios.js";
import requests from "../../api/Requests.js";

function Banner() {
  const [movie, setMovie] = useState([]);
  //useEffect hook to grab random Netflix Movies and assign it to state.  Generates a random number
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
    //div banner-fadeBottom; Adds a gradient effect towards the bottom of the banner img.
  );
}

export default Banner;

//string?. So put that as a base case incase there isn't a string returned from the api.  If it is greater than a certain amount of characters, we want to truncate the description.  If that condition isn't satisfied (We move on with a colon) return the string.  Utilized the function in banner description and had it cut off after 150 characters

//movie?.title || movie?.name .. if movie.title doesn't exist, we give precedence to movie.name etc and so forth.
