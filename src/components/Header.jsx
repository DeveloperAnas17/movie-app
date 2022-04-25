import React, { useState, useRef, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMovie2Fill, RiCloseFill } from "react-icons/ri";
import { FcMenu } from "react-icons/fc";

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
  const [nav, setNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleNav = () => {
    setNav(!nav);
  };

  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const activeStyle = "text-red-600 transition duration-150 ease-in";
  return (
    <Fragment>
      <div
        className={` ${
          colorChange ? "bg-[#113044] shadow-md   " : ""
        }  fixed left-0 right-0 z-10 flex justify-between  items-center h-20 w-full transition duration-200 ease-in-out  mx-auto px-4 text-white`}
        ref={headerRef}
      >
        <div className="">
          <Link to="/">
            <div className="flex items-center">
              <RiMovie2Fill className="text-red-700 m-2 h-9 w-9" />
              <h2 className="text-white text-xl font-semibold">Timdam</h2>
            </div>
          </Link>
        </div>
        <ul className=" hidden sm:flex items-center justify-end w-1/2 space-x-14">
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
        <div onClick={handleNav} className="block text-white sm:hidden">
          {nav ? (
            <RiCloseFill className="text-white cursor-pointer" size={20} />
          ) : (
            <FcMenu className="text-white  cursor-pointer" size={20} />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#081b27] md:hidden ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <Link to="/">
            <div className="flex items-center">
              <RiMovie2Fill className="text-red-700 m-2 h-14 w-14" />
              <h2 className="text-white text-xl font-semibold">Timdam</h2>
            </div>
          </Link>
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`font-medium mt-5 text-white border-b p-3 ${
                i === active ? activeStyle : ""
              } hover:text-red-600 transition duration-150 ease-in-out`}
            >
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
