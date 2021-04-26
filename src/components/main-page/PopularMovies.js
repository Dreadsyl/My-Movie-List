import React, { useState, useEffect } from "react";
import { DisplayMovie } from "./DisplayMovie";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const PopularMovies = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKEY}&language=en-US&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setPopMovies(data.results);
        } else {
          setPopMovies([]);
        }
      });
  }, []);

  return (
    <div className="container-fluid fluid-fix">
      <h1>Popular movies</h1>
      <div className="row popular-scrollbar">
        {popMovies.map((movie) => (
          <DisplayMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
