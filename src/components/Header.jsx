import React, { useEffect, useRef } from "react";
import logo from "../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import { MenuIcon } from "@material-ui/icons/Menu";

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

  // useEffect(() => {
  //   const shrinkHeader = () => {
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       headerRef.current.classList.add("shrink");
  //     } else {
  //       headerRef.current.classList.remove("shrink");
  //     }
  //   };
  //   window.addEventListener("scroll", shrinkHeader);
  //   return () => {
  //     window.removeEventListener("scroll", shrinkHeader);
  //   };
  // }, [input]);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 z-20 left-0  px-4 md:px-7 py-4 flex items-center justify-between"
    >
      <div className="top-0 left-2 flex items-center">
        <img src={logo} alt="" className="mr-3 w-10" />
        <Link className="" to="/">
          tMovies
        </Link>
      </div>
      <ul className="fixed right-2 sm:space-x-6 md:space-x-16 hidden sm:inline-flex sm: ">
        {headerNav.map((e, i) => (
          <li
            key={i}
            className={`${
              i === active ? activeStyle : ""
            } hover:text-red-600 transition duration-150 ease-in-out`}
          >
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
      {/* <div className="sm:hidden">
        <MenuIcon />
      </div> */}
    </div>
  );
};

export default Header;
