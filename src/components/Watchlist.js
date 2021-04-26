import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="page-title">
        <h1>My Watchlist</h1>
        <span className="movie-counter">
          {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>
      {watchlist.length > 0 ? (
        <div className="movie-container">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2>Your watchlist is empty, add some movies!</h2>
      )}
    </div>
  );
};
