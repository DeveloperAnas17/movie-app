import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const StarCastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts flex flex-wrap ">
      {casts.map((item, i) => (
        <div
          key={i}
          className="casts__item hover:opacity-80 hover:cursor-pointer mr-4 mt-2"
        >
          <div
            className="casts__item__img w-10 h-10 rounded-full sm:w-20 sm:h-20 sm:rounded-full md:w-24 md:h-32 md:rounded-2xl  object-contain bg-center bg-cover"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="hidden md:inline-block text-xs text-center overflow-hidden">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StarCastList;
