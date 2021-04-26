import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <div className="page-title">
        <h1>Watched movies</h1>
        <span className="movie-counter">
          {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>
      {watched.length > 0 ? (
        <div className="movie-container">
          {watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <h2>Watch some movies and add them to the list!</h2>
      )}
    </div>
  );
};
