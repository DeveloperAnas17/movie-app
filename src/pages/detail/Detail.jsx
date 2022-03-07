import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import StarCastList from "./StarCastList";
import VideoList from "./VideoList";

import MovieList from "../../components/MovieList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: `linear-gradient(
                rgba(8, 27, 39, 0.8), 
                rgba(8, 27, 39, 1)
              ), url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          >
            <div className=" px-4 movie-content flex items-center justify-center h-full container max-w-[1400px] mx-auto">
              <div className="movie-content__poster hidden md:inline-flex ">
                <div
                  className="movie-content__poster__img h-[350px] w-[280px] bg-cover rounded-2xl"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      item.poster_path || item.backdrop_path
                    )})`,
                  }}
                ></div>
              </div>
              <div className="movie-content__info mx-7">
                <h1 className="title text-2xl sm:text-3xl md:text-5xl text-white font-semibold">
                  {item.title || item.name}
                </h1>
                <div className="genres flex  mt-2 ">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span
                        key={i}
                        className="genres__item border rounded-3xl text-xs px-3 py-1 mr-2 mt-2"
                      >
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p className="overview mt-5 text-sm text-white max-w-xl">
                  {item.overview}
                </p>
                <div className="cast mt-3 md:mt-6">
                  <div className="section__header">
                    <h1 className="text-white text-xl font-medium underline mb-1">
                      Starcasts
                    </h1>
                  </div>
                  <StarCastList id={item.id} />
                </div>
              </div>
            </div>
          </div>

          <div className="container max-w-[1400px] mx-auto px-4">
            <div className="section  mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mt-3 mb-3">
              <div className="section__header mb-2">
                <h2 className="text-lg text-white font-medium">Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
