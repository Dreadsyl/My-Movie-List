import React, { useState, useEffect } from "react";
import { DisplayMovie } from "./DisplayMovie";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKEY}&language=en-US&page=1&adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setTopRated(data.results);
        } else {
          setTopRated([]);
        }
      });
  }, []);

  return (
    <div className="container-fluid fluid-fix">
      <h1>Top rated movies of all time</h1>
      <div className="row popular-scrollbar">
        {topRated.map((movie) => (
          <DisplayMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
