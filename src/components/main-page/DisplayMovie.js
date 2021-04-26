import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../../context/GlobalState";

import { NoPoster } from "../../images-and-elements/NoPoster";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const DisplayMovie = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [genre, setGenre] = useState([]);
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovieWatchlist = watchlist.find((object) => object.id === movie.id);
  let storedMovieWatched = watched.find((object) => object.id === movie.id);

  const watchlistDisabled = storedMovieWatchlist
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setVoteClass = (voteAverage) => {
    if (voteAverage >= 8) {
      return "green";
    } else if (voteAverage >= 6) {
      return "green-yellow";
    } else if (voteAverage >= 4) {
      return "orange";
    } else {
      return "red";
    }
  };

  const clickEvent = (e) => {
    e.preventDefault();

    handleShow();

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${tmdbKEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setGenre(data.genres);
        } else {
          setGenre([]);
        }
      });
  };

  return (
    <>
      <div className="movie-card" onClick={clickEvent}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <NoPoster width={300} height={450} />
        )}
        <div className="movie-card-info">
          <h3>{movie.title}</h3>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="main-modal-style">
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-img-holder">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            ) : (
              <NoPoster width={200} height={300} />
            )}
          </div>
          <div className="genre-container">
            {genre.map((g) => (
              <span className="modal-genre" key={g.id}>{`[${g.name}]`}</span>
            ))}
          </div>
          <div className="modal-movie-info">
            <span>ORIGINAL TITLE: </span>
            <span>
              <i>"{movie.original_title}"</i>
            </span>
          </div>
          <div className="modal-movie-info">
            <span>RELEASE DATE: </span>
            <span>{movie.release_date}</span>
          </div>
          <div className="modal-movie-info">
            <span>MOVIE SCORE: </span>
            <span className={`movie-score ${setVoteClass(movie.vote_average)}`}>
              {" "}
              {movie.vote_average}
            </span>
          </div>
          <div className="modal-movie-info overwiev-align">
            <span>OVERVIEW: </span>
            <span>{movie.overview}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button
              className="btn btn-primary"
              type="button"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              <i className="bi bi-plus-circle-fill"></i> Add to watchlist
            </button>
            <button
              className="btn btn-success"
              type="button"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(movie)}
            >
              <i className="bi bi-check-circle-fill"></i> Already watched
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
