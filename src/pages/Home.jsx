import React from "react";
import { Link } from "react-router-dom";
import { category, movieType, tvType } from "../api/tmdbApi";
import HeroSlide from "../components/HeroSlide";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <HeroSlide />
      <div className="container max-w-[1400px] mx-auto p-5">
        <div className="section mt-5">
          <div className="section__header flex items-center justify-between my-5">
            <h2 className=" md:text-3xl font-medium">Trending Movies</h2>
            <Link to="/movie">
              <button className="small border border-white flex items-center justify-center w-36 h-9 rounded-3xl ">
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mt-5">
          <div className="section__header flex items-center justify-between px-3 my-5">
            <h2 className="md:text-3xl font-medium">Top Rated Movies</h2>
            <Link to="/movie">
              <button className="border border-white flex items-center justify-center w-36 h-9 rounded-3xl">
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mt-5">
          <div className="section__header my-5 flex items-center justify-between">
            <h2 className="md:text-3xl font-medium">Trending TV</h2>
            <Link to="/tv">
              <button className="border border-white flex items-center justify-center w-36 h-9 rounded-3xl">
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mt-5">
          <div className="section__header my-5 flex items-center justify-between">
            <h2 className="md:text-3xl font-medium">Top Rated TV</h2>
            <Link to="/tv">
              <button className="border border-white flex items-center justify-center w-36 h-9 rounded-3xl">
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
