import React from "react";
import { PopularMovies } from "./PopularMovies";
import { UpcomingMovies } from "./UpcomingMovies";
import { TopRated } from "./TopRated";
import { Recommended } from "./Recommended";

export const MainPage = () => {
  return (
    <div>
      <PopularMovies />
      <UpcomingMovies />
      <TopRated />
      <Recommended />
    </div>
  );
};
