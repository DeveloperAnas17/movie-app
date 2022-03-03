import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import Button, { OutlineButton } from "./Button";
import Modal, { ModalContent } from "./Modal";
import tmdbApi, { category, movieType } from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
// Import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import HeroSlideItem from "./HeroSlideItem";

const HomeSlider = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results?.slice(1, 4));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        modules={[Autoplay]}
        grabCursor={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
