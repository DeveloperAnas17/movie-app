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
        className="movie-card bg-top bg-no-repeat bg-cover pt-6 rounded-3xl  w-[220px] h-[340px] object-contain"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <h3 className=" text-lg font-medium mt-2 text-white text-center mb-8">
        {item.title || item.name}
      </h3>
    </Link>
  );
};

export default MovieCard;
