import React from "react";
import { useNavigate } from 'react-router-dom'

export function Breadcrumbhome() {

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans text-2xl antialiased pl-[50px]  font-bold">
            <p className="pb-20 text-red-400">Home</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbPages(props) {

  const navigate = useNavigate()

  const page_map = {
    'home' : '/'
  }

  function handleClick(u_choice){
      navigate(page_map['home']);
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <button onClick={event => {handleClick('home')}} className="text-red-400">
              Home
            </button>
          </li>
          <li className="flex items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
            <svg className="mt-[10%]" width="30" height="30" viewBox="0 0 27 27" fill="#ffffff">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex mt-[1%] items-center font-sans text-2xl antialiased pl-[11px] font-bold">
            <p className="opacity-60 text-white">{props.sub}</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbAboutUs() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <a href="http://localhost:3000/" className="pb-20 text-red-400">
              Home
            </a>
          </li>
          <li className="flex pb-20  items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
            <p className="pb-20 text-red-400">About Us</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbProfile() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <a href="http://localhost:3000/" className="pb-20 text-red-400">
              Home
            </a>
          </li>
          <li className="flex pb-20 text-red-400 items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
            <p className="pb-20 text-red-400">Profile</p>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcrumbBlogs() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
          <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
            <a href="http://localhost:3000/" className="opacity-60">
              Home
            </a>
          </li>
          <li className="flex items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
            <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000">
              <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
              <path fill="none" d="M0,0h24v24H0V0z"></path>
            </svg>
          </li>
          <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
            <a className="opacity-60">Blogs</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
