import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "./Button";
import tmdbApi, { category } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="flex items-center">
      <Swiper
        spaceBetween={10}
        grabCursor={true}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, i) => (
          <SwiperSlide className=" w-1/3 " key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.prototype = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
