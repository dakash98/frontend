import React from "react";
import { Link } from "react-router-dom";
// import "../assets/style.css";

function Navbar() {
  function openLogoutPage(event) {
    document.getElementById("gonow").classList.remove("hidden");
    document.getElementById("home").classList.add("hidden");
    document.getElementById("profile").classList.remove("hidden");
  }

  return (
    <div className="flex w-full">
      <div className="flex mr-15% font-sans text-white text-6xl font-bold py-4 gradient-bg">
        PadhaiPlanet
      </div>
      <div className="flex justify-between text-right 2xl:pl-[50%] xl:pl-[30%] gradient-bg">
        <Link
          to="/about-us"
          className=" btn float-right font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          About Us
        </Link>
        <Link
          to="/blogs"
          className=" btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          Blogs
        </Link>
        <Link
          to="/login"
          className="btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center pt-[32px]"
        >
          {" "}
          Contact Us
        </Link>
        <button
          onClick={(event) => openLogoutPage()}
          className="btn float-left font-medium font-sans text-red-400 w-40 text-2xl text-center"
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Navbar;
