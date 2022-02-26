import React, { useRef } from "react";
import logo from "../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom";

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
    <div ref={headerRef} className="  px-4 md:px-7 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-full sm:flex-1 sm:justify-start ">
          <img src={logo} alt="" className="mr-3 w-10" />
          <Link className="" to="/">
            tMovies
          </Link>
        </div>
        <ul className="fixed sm:flex-1 border-t border-red-600 sm:border-0 bottom-0 justify-between left-0 right-0 p-3 flex items-center sm:relative  sm:space-x-12">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? activeStyle : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
