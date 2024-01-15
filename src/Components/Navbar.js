import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
// import logo from "../Static/logo.png";
// import { NavLink, useLocation } from "react-router-dom";
import logoo from "../Static/Padhaiplanet-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  // console.log("local", localStorage.getItem("user_id"))
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user_id") === "10201");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const redirectHome = () => {
    navigate('/');
  };


  const handleLogout = () => {
    axios
      .post("https://padhaiplanet-backend.onrender.com/v1/logout", {"user_id": "1"})
      .then((response) => {
        console.log(response);
        localStorage.removeItem("user_id");
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        console.error("Error response:", error.response); 
     });
  };
 


  return (
    <div className="flex items-center justify-between w-full lg:px-8 py-4 gradient-bg sm:mx-4">
      <div className="flex items-center">
        <button onClick={event => (redirectHome())}><img src={logoo} alt="Logo" className="h-20 " /></button>
        <h1 className="text-white sm:text-6xl text-3xl font-bold text-center justify-center">
          adhaiPlanet
        </h1>
      </div>
      {/* Navigation Links for Wider Screens */}
      <div className="hidden lg:flex lg:items-center">
        <NavLink
          to="/about-us"
          className="zoom-effect nav-link text-red-200"
          onClick={closeMenu}
          activeClassName="selected active-nav-link"
          activeStyle={{ color: "green" }}
        >
          About Us
        </NavLink>
        <NavLink to="/blogs" className="zoom-effect nav-link" onClick={closeMenu}>
          Blogs
        </NavLink>
        <NavLink
          to="/contact-us"
          className="zoom-effect nav-link"
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
        {isLoggedIn ? (
          <button className="zoom-effect nav-link" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="zoom-effect nav-link"
            onClick={closeMenu}
          >
            Login
          </NavLink>
        )}
      </div>
      {/* Hamburger Icon for Smaller Screens */}
      <div className="lg:hidden mx-4">
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8 cursor-pointer text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Navigation Links Positioned on Right side */}
      <div
        className={`absolute top-full right-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-md shadow-lg ${
          showMenu ? "block" : "hidden"
        } lg:hidden`}
      >
        <NavLink
          to="/about-us"
          className="nav-link block mb-2"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink to="/blogs" className="nav-link block mb-2 text-2xl" onClick={closeMenu}>
          Blogs
        </NavLink>
        <NavLink
          to="/contact-us"
          className="nav-link block mb-2"
          onClick={closeMenu}
        >
          Contact Us
        </NavLink>
        {isLoggedIn ? (
          <button className="zoom-effect nav-link" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="zoom-effect nav-link"
            onClick={closeMenu}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
