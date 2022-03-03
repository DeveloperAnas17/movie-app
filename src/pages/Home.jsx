import React from "react";
import { Link } from "react-router-dom";
import { category, movieType } from "../api/tmdbApi";
import { OutlineButton } from "../components/Button";
import HeroSlide from "../components/HeroSlide";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className=" max-w-[1400px] px-3 mx-auto">
        <div className="mt-5 px-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">Trending Movies</h2>
            <Link to="/movie">
              <button className="cursor-pointer border rounded-3xl border-white flex items-center justify-center w-28 h-7">
                View More
              </button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
