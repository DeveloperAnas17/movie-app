import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import tmdbApi, { movieType } from "../api/tmdbApi";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
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
        setMovieItems(response.results?.slice(10, 20));
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
