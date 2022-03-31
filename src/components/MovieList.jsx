import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";
import tmdbApi, { category } from "../api/tmdbApi";
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
    <div className="">
      <Swiper
        className=" flex-shrink h-full relative transform"
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {items.map((item, i) => (
          <SwiperSlide className=" max-w-[240px] " key={i}>
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
