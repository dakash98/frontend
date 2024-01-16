import React from "react";
import { useNavigate } from "react-router-dom";

export function Breadcrumbhome() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="">
        <ol className="flex flex-row py-1 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold">
            <p className="opacity-60 text-white py-4 lg:px-8 md:px-6 sm:mx-4">Home</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbPages(props) {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="text-red-400"
            >
              Home
            </button>
          </li>
          <li className="flex text-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pt-[3px] font-bold">
            <svg
              className="mt-[10%]"
              width="30"
              height="30"
              viewBox="0 0 27 27"
              fill="#ffffff"
            >
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex flex-wrap pt-[1px] items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased font-bold">
            <p className="opacity-60 text-white">{props.sub}</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbAboutUs() {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="pb-20 text-red-400 lg:pl-8 md:ml-6 sm:ml-4"
            >
              Home
            </button>
          </li>
          <li className="flex pb-20  items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pt-[7.05px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased font-bold">
            <p className="pb-20 opacity-60 text-white">About Us</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbProfile() {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="pb-20 text-red-400  lg:pl-8 md:ml-6 sm:ml-4"
            >
              Home
            </button>
          </li>
          <li className="flex pb-20 text-red-400 items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[12px] pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[11px] font-bold">
            <p className="pb-20 opacity-60 text-white">Profile</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbBlogs() {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max h-[68px]">
        <ol className=" flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex flex-wrap items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="pb-20 text-red-400  lg:pl-8 md:ml-6 sm:ml-4"
            >
              Home
            </button>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pb-20 pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex flex-wrap items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased font-bold">
            <a className="pb-20 opacity-60 text-white">Blogs</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbContactUs() {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="pb-20 text-red-400  lg:pl-8 md:ml-6 sm:ml-4"
            >
              Home
            </button>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pb-20 pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased font-bold">
            <a className="pb-20 opacity-60 text-white">Contact Us</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbLogin() {
  const navigate = useNavigate();

  const page_map = {
    home: "/",
  };

  function handleClick(u_choice) {
    navigate(page_map[u_choice]);
  }

  return (
    <div className="mb-[-8%]">
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full  rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pl-[15px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button
              onClick={(event) => {
                handleClick("home");
              }}
              className="pb-20 text-red-400  lg:pl-8 md:ml-6 sm:ml-4"
            >
              Home
            </button>
          </li>
          <li className="flex pb-20  items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans xl:text-2xl lg:text-xl md:text-xl text-lg antialiased font-bold">
            <p className="pb-20 opacity-60 text-white">Login</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}
