import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/footer-bg.jpg";
import { RiMovie2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      className="footer p-5 md:p-10"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.6)
    ), url(${bg})`,
      }}
    >
      <div className="footer__content container max-w-[1400px] mx-auto  flex flex-col items-center justify-a ">
        <div className="footer__content__logo ">
          <div className="logo ">
            <Link to="/">
              <div className="flex items-center">
                <RiMovie2Fill className="text-red-700 m-2 h-14 w-14" />
                <h2 className="text-white text-xl font-semibold">Timdam</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer__content__menus  mt-12 flex justify-between flex-1 w-[80%] md:w-[70%] flex-shrink ">
          <div className="footer__content__menu flex flex-col space-y-3">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu flex flex-col space-y-3">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu flex flex-col space-y-3 ">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
