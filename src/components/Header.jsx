import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const activeStyle = "text-red-600 transition duration-150 ease-in";

  return (
    <div
      ref={headerRef}
      className="fixed top-0 z-20 left-0  px-4 md:px-14 py-4 flex items-center justify-between"
    >
      <div className="top-0 left-2 flex items-center">
        <Link className="" to="/">
          <div className="flex items-center space-x-2">
            <RiMovie2Fill className="text-red-700 h-9 w-9" />
            <h3 className="text-white font-semibold">tMovies</h3>
          </div>
        </Link>
      </div>
      <ul className="fixed right-5 sm:space-x-6 md:space-x-16 hidden sm:inline-flex sm: ">
        {headerNav.map((e, i) => (
          <li
            key={i}
            className={`font-medium text-white ${
              i === active ? activeStyle : ""
            } hover:text-red-600 transition duration-150 ease-in-out`}
          >
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
