import React from "react";
import { Link } from "react-router-dom";
import logo from "../Static/logo.png"; 
// import logo from "../Static/logo-black.png"; 


function Navbar() {
  function openLogoutPage(event) {
    document.getElementById("gonow").classList.remove("hidden");
    document.getElementById("home").classList.add("hidden");
    document.getElementById("profile").classList.remove("hidden");
  }

  return (
    <div className="flex w-full">
      <div className="flex items-center pl-4  pr-20 mr-15% font-sans text-white text-6xl font-bold py-4 gradient-bg">
        <img src={logo} alt="Logo" className="h-16 mr-4" /> {/* Logo */}
        PadhaiPlanet
      </div>
      <div className="flex justify-between text-right pl-96 gradient-bg pr-60">
        <Link
          to="/about-us"
          className="zoom-effect btn float-right font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          About Us
        </Link>
        <Link
          to="/blogs"
          className="zoom-effect btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          Blogs
        </Link>
        <Link
          to="/login"
          className="zoom-effect btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          Contact Us
        </Link>
        <button
          onClick={(event) => openLogoutPage()}
          className="zoom-effect btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center"
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Navbar;
