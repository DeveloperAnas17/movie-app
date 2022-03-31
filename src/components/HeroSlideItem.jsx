import React from "react";
import { useNavigate } from "react-router-dom";
import apiConfig from "../api/apiConfig";

const HeroSlideItem = (item) => {
  console.log(item);

  let navigate = useNavigate();

  const background = apiConfig.originalImage(
    item.item?.backdrop_path ? item.item?.backdrop_path : item.item?.poster_path
  );

  return (
    <div
      className="px-4"
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
        <div className="max-w-[580px] mr-3">
          <h1 className="text-4xl font-semibold md:text-5xl md:font-bold">
            {item.item?.title}
          </h1>
          <p className="mt-2 font-medium trucate md:overflow ">
            {item.item?.overview}
          </p>

          <div className="mt-5 flex items-center space-x-3">
            <button
              className="border border-gray-400 px-4 py-2 text-sm rounded-sm"
              onClick={() => navigate("/movie/" + item.item?.id)}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex ">
          <img
            className="hidden lg:inline-flex object-contain  lg:w-[400px] lg:h-[460px]
              "
            src={apiConfig.w500Image(item.item?.poster_path)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
