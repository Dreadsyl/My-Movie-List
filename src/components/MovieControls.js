import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="movie-controls d-grid gap-2 col-12 mx-auto">
      {type === "watchlist" && (
        <>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="bi bi-eye-fill"></i> Move to watched movies list
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="bi bi-x-circle-fill"></i> Remove movie from the list
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="bi bi-eye-slash-fill"></i> Move movie to watchlist
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="bi bi-x-circle-fill"></i> Remove movie from the list
          </button>
        </>
      )}
    </div>
  );
};
