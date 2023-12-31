import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Static/logo.png";
// import logo from "../Static/logo-black.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navigate = useNavigate();

  const redirectToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <div className="flex items-center justify-between w-full px-4 md:px-8 py-4 gradient-bg">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 mr-4" />
        <h1 className="text-white md:text-6xl text-3xl font-bold">
          PadhaiPlanet
        </h1>
      </div>
      {/* Navigation Links for Wider Screens */}
      <div className="hidden md:flex md:items-center">
        <Link
          to="/about-us"
          className="zoom-effect nav-link"
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link to="/blogs" className="zoom-effect nav-link" onClick={closeMenu}>
          Blogs
        </Link>
        <Link
          to="/contact-us"
          className="zoom-effect nav-link"
          onClick={closeMenu}
        >
          Contact Us
        </Link>
        <Link to="/profile" className="nav-link" onClick={closeMenu}>
          Login
        </Link>
      </div>
      {/* Hamburger Icon for Smaller Screens */}
      <div className="md:hidden">
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
      {/* Navigation Links Positioned on Right */}
      <div
        className={`absolute top-full right-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 rounded-md shadow-lg ${
          showMenu ? "block" : "hidden"
        } md:hidden`}
      >
        <Link
          to="/about-us"
          className="nav-link block mb-2"
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link to="/blogs" className="nav-link block mb-2" onClick={closeMenu}>
          Blogs
        </Link>
        <Link
          to="/contact-us"
          className="nav-link block mb-2"
          onClick={closeMenu}
        >
          Contact Us
        </Link>
        <button className="nav-link block" onClick={redirectToProfilePage}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
