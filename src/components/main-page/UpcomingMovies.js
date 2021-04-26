import React, { useState, useEffect } from "react";
import { DisplayMovie } from "./DisplayMovie";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setUpcomingMovies(data.results);
        } else {
          setUpcomingMovies([]);
        }
      });
  }, []);

  return (
    <div className="container-fluid fluid-fix">
      <h1>Upcoming movies in theatres</h1>
      <div className="row popular-scrollbar">
        {upcomingMovies.map((movie) => (
          <DisplayMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
