import React from "react";
import { Link } from "react-router-dom";
import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div
        className="movie-card bg-top bg-no-repeat bg-cover pt-6 rounded-3xl mb-3 w-[200px] h-[300px] object-contain"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <h3 className=" text-xs font-medium">{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
