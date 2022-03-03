import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi, { category } from "../api/tmdbApi";
import Button, { OutlineButton } from "./Button";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import CloseIcon from "@material-ui/icons/Close";

const HeroSlideItem = (item) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  console.log(item);

  const base_url = "https://image.tmdb.org/t/p/original";

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlPrams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  let navigate = useNavigate();

  const background = apiConfig.originalImage(
    item.item?.backdrop_path ? item.item?.backdrop_path : item.item?.poster_path
  );

  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ), url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="h-full w-full flex items-center justify-between  md:p-20 ">
        <div className="max-w-[550px]">
          <h1 className="text-4xl font-semibold md:text-5xl md:font-bold">
            {item.item?.title}
          </h1>
          <p className="mt-2 font-medium truncate md:overflow ">
            {item.item?.overview}
          </p>

          <div className="mt-5 flex items-center space-x-3">
            <Button onClick={() => navigate("/movie/" + item.item?.id)}>
              Watch Now
            </Button>

            <OutlineButton onClick={() => handleClick(item.item)}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="flex ">
          <img
            className="hidden md:inline-flex object-contain h-[440px] rounded-3xl  "
            src={apiConfig.w500Image(item.item?.poster_path)}
            alt=""
          />
        </div>
      </div>
      {/* <div className=" bg-emerald-900 h-40 w-full"></div> */}
      <div className=" z-60 flex absolute top-[30%] left-6 sm:left-[40%]  ">
        {trailerUrl && (
          <YouTube
            className="relative border-8 border-gray-600 bg-gray-600 flex-grow h-42 w-56 sm:h-56 sm:w-72 md:h-[340px] md:w-[450px] "
            videoId={trailerUrl}
            opts={opts}
          />
        )}
        <CloseIcon className="hidden absolute -left-3 -top-3 border rounded-full bg-red-600 p-1 cursor-pointer " />
      </div>
    </div>
  );
};

export default HeroSlideItem;
