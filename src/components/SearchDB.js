import React, { useState } from "react";
import { DisplayMovie } from "./main-page/DisplayMovie";

const tmdbKEY = process.env.REACT_APP_TMDB_KEY;

export const SearchDB = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      <div className="control-input">
        <input
          className="form-control"
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={onChange}
        />
      </div>

      {results.length > 0 && (
        <div className="container-fluid">
          <div className="row">
            {results.map((movie) => (
              <div className="col" align="center" key={movie.id}>
                <DisplayMovie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
