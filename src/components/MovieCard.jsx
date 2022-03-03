import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div
        className="movie-card relative bg-top bg-no-repeat bg-cover pt-6 rounded-3xl mb-3 w-[200px] h-[300px] object-contain"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Button className=" absolute top-[50%] left-[50%] transform -translate-x-2/4 -translate-y-2/4 scale-0 transition duration-200 ease-in box">
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
