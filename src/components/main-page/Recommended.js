import React, { useState, useEffect, useContext } from "react";
import { DisplayMovie } from "./DisplayMovie";
import { GlobalContext } from "../../context/GlobalState";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const Recommended = () => {
  const [recommended, setRecommended] = useState([]);
  const { watched } = useContext(GlobalContext);

  useEffect(() => {
    if (watched.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          watched[getId()].id
        }/recommendations?api_key=${tmdbKEY}&language=en-US&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.errors) {
            setRecommended(data.results);
          } else {
            setRecommended([]);
          }
        });
    }
  }, []);

  const getId = () => {
    return Math.floor(Math.random() * watched.length);
  };

  return (
    watched.length > 0 && (
      <div className="container-fluid fluid-fix">
        <h1>Movies you might like</h1>
        <div className="row popular-scrollbar">
          {recommended.map((movie) => (
            <DisplayMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  );
};
