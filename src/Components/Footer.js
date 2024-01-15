import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigData } from "./ConfigData";
import logoo from "../Static/Padhaiplanet-logo.png";

function Footer() {
  const navigate = useNavigate();

  // const API_config = "https://padhaiplanet-backend.onrender.com/v1/config";

  const [subject, setSubject] = useState([]);

  // useEffect(() => {
  //   // Fetch subject data from the API_config
  //   // Update the setSubject state with the fetched data
  //   fetch(API_config)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSubject(data.subjects || []);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [API_config]);

  useEffect(() => {
    setSubject(ConfigData[0].subject);
  }, []);

  function handleClick(user_selected_option) {
    const page_mapping = {
      english: "/english-question-papers-10th-ssc",
      hindi_full: "/hindi-full-question-papers-10th-ssc",
      hindi_half: "/hindi-half-question-papers-10th-ssc",
      sanskrit_full: "/sanskrit-full-question-papers-10th-ssc",
      sanskrit_half: "/sanskrit-half-question-papers-10th-ssc",
      marathi: "/marathi-question-papers-10th-ssc",
      history_and_political_science:
        "/history-and-political-science-question-papers-10th-ssc",
      geography: "/geography-question-papers-10th-ssc",
      math_1: "/math-1-question-papers-10th-ssc",
      math_2: "/math-2-question-papers-10th-ssc",
      science_1: "/science-1-question-papers-10th-ssc",
      science_2: "/science-2-question-papers-10th-ssc",
    };

    navigate(page_mapping[user_selected_option]);
  }

  // const fetchdata = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setSubject(data.data.subject);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchdata(API_config);
  // }, []);

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div class="bg-gray-900">
          <footer class="mx-auto max-w-screen-3xl px-4 md:px-8">
            <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
              <div class="col-span-full lg:col-span-2">
                {/* <!-- logo - start --> */}
                <div class="mb-4 lg:-mt-2">
                  <button
                    onClick={(event) => redirectHome()}
                    class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                    aria-label="logo"
                  >
                    <div className="flex items-center">
                      <button onClick={(event) => redirectHome()}>
                        <img src={logoo} alt="Logo" className="h-10 " />
                      </button>
                      <h1 className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl">
                        adhaiPlanet
                      </h1>
                    </div>
                  </button>
                </div>
                {/* <!-- logo - end --> */}

                <p class="mb-6 text-gray-400 sm:pr-8">
                  One vision, one mission, question papers at single station.
                  One vision, one mission, question papers at single station.
                </p>

                {/* <!-- social - start --> */}
                <div class="flex gap-4">
                  {/* Telegram */}
                  <a
                    href="https://t.me/+bT-UAtZS-m81MzY1"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0,0,256,256"
                    >
                      <defs>
                        <linearGradient
                          x1="9.858"
                          y1="9.858"
                          x2="38.142"
                          y2="38.142"
                          gradientUnits="userSpaceOnUse"
                          id="color-1_oWiuH0jFiU0R_gr1"
                        >
                          <stop offset="0" stop-color="#33bef0"></stop>
                          <stop offset="1" stop-color="#0a85d9"></stop>
                        </linearGradient>
                      </defs>
                      <g transform="translate(-24.32,-24.32) scale(1.19,1.19)">
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          {" "}
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                              fill="url(#color-1_oWiuH0jFiU0R_gr1)"
                            ></path>
                            <path
                              d="M10.119,23.466c8.155,-3.695 17.733,-7.704 19.208,-8.284c3.252,-1.279 4.67,0.028 4.448,2.113c-0.273,2.555 -1.567,9.99 -2.363,15.317c-0.466,3.117 -2.154,4.072 -4.059,2.863c-1.445,-0.917 -6.413,-4.17 -7.72,-5.282c-0.891,-0.758 -1.512,-1.608 -0.88,-2.474c0.185,-0.253 0.658,-0.763 0.921,-1.017c1.319,-1.278 1.141,-1.553 -0.454,-0.412c-0.19,0.136 -1.292,0.935 -1.745,1.237c-1.11,0.74 -2.131,0.78 -3.862,0.192c-1.416,-0.481 -2.776,-0.852 -3.634,-1.223c-1.185,-0.513 -1.639,-2.224 0.14,-3.03z"
                              fill="#000000"
                              opacity="0.05"
                            ></path>
                            <path
                              d="M10.836,23.591c7.572,-3.385 16.884,-7.264 18.246,-7.813c3.264,-1.318 4.465,-0.536 4.114,2.011c-0.326,2.358 -1.483,9.654 -2.294,14.545c-0.478,2.879 -1.874,3.513 -3.692,2.337c-1.139,-0.734 -5.723,-3.754 -6.835,-4.633c-0.86,-0.679 -1.751,-1.463 -0.71,-2.598c0.348,-0.379 2.27,-2.234 3.707,-3.614c0.833,-0.801 0.536,-1.196 -0.469,-0.508c-1.843,1.263 -4.858,3.262 -5.396,3.625c-1.025,0.69 -1.988,0.856 -3.664,0.329c-1.321,-0.416 -2.597,-0.819 -3.262,-1.078c-1.486,-0.576 -1.506,-1.816 0.255,-2.603z"
                              fill="#000000"
                              opacity="0.07"
                            ></path>
                            <path
                              d="M11.553,23.717c6.99,-3.075 16.035,-6.824 17.284,-7.343c3.275,-1.358 4.28,-1.098 3.779,1.91c-0.36,2.162 -1.398,9.319 -2.226,13.774c-0.491,2.642 -1.593,2.955 -3.325,1.812c-0.833,-0.55 -5.038,-3.331 -5.951,-3.984c-0.833,-0.595 -1.982,-1.311 -0.541,-2.721c0.513,-0.502 3.874,-3.712 6.493,-6.21c0.343,-0.328 -0.088,-0.867 -0.484,-0.604c-3.53,2.341 -8.424,5.59 -9.047,6.013c-0.941,0.639 -1.845,0.932 -3.467,0.466c-1.226,-0.352 -2.423,-0.772 -2.889,-0.932c-1.795,-0.616 -1.369,-1.414 0.374,-2.181z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  {/* Telegram */}

                  {/* whatsapp */}
                  <a
                    href="https://chat.whatsapp.com/CLLufbghK7QIeEjFAhSUAk"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 30 30"
                    >
                      <path
                        fill="#f2faff"
                        d="M3.515,21.833L3.41,21.652c-1.175-2.034-1.795-4.356-1.794-6.717C1.62,7.527,7.649,1.5,15.058,1.5 c3.594,0.001,6.971,1.4,9.508,3.94c2.537,2.539,3.935,5.915,3.935,9.507c-0.004,7.409-6.033,13.437-13.441,13.437 c-2.249-0.002-4.471-0.567-6.429-1.636l-0.174-0.095l-6.745,1.769L3.515,21.833z"
                      ></path>
                      <path
                        fill="#788b9c"
                        d="M15.058,2L15.058,2c3.46,0.001,6.711,1.348,9.154,3.793C26.655,8.239,28,11.489,28,14.946 c-0.003,7.133-5.809,12.937-12.946,12.937c-2.16-0.001-4.299-0.545-6.184-1.574l-0.349-0.19L8.137,26.22l-5.715,1.498l1.52-5.552 l0.11-0.403l-0.209-0.362c-1.131-1.958-1.728-4.194-1.727-6.466C2.12,7.803,7.925,2,15.058,2 M15.058,1 C7.374,1,1.12,7.252,1.117,14.935c-0.001,2.456,0.64,4.854,1.861,6.967L1,29.125l7.391-1.938 c2.036,1.111,4.329,1.695,6.663,1.696h0.006c7.683,0,13.938-6.252,13.941-13.936c0-3.724-1.449-7.226-4.081-9.86 C22.287,2.452,18.787,1.001,15.058,1L15.058,1z"
                      ></path>
                      <path
                        fill="#79ba7e"
                        d="M15.055,25.883c-1.827-0.001-3.634-0.461-5.227-1.33l-1.046-0.57L7.63,24.285l-2.364,0.62l0.605-2.21	l0.331-1.208l-0.626-1.085c-0.955-1.654-1.459-3.544-1.459-5.465C4.119,8.906,9.027,4.001,15.057,4	c2.926,0.001,5.674,1.14,7.74,3.207C24.862,9.274,26,12.023,26,14.946C25.997,20.977,21.089,25.883,15.055,25.883z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M21.101,17.717c-0.332-0.165-1.96-0.967-2.263-1.077c-0.304-0.111-0.525-0.165-0.745,0.165	c-0.221,0.332-0.855,1.077-1.048,1.298c-0.193,0.221-0.386,0.248-0.718,0.083c-0.332-0.165-1.399-0.516-2.664-1.644	c-0.985-0.878-1.65-1.962-1.843-2.294c-0.193-0.332-0.021-0.51,0.145-0.676c0.149-0.149,0.332-0.387,0.497-0.58	c0.165-0.193,0.221-0.332,0.332-0.552s0.055-0.415-0.028-0.58c-0.083-0.165-0.745-1.796-1.022-2.458	C11.477,8.756,11.203,8.844,11,8.834c-0.193-0.01-0.414-0.011-0.635-0.011c-0.221,0-0.58,0.083-0.883,0.415	C9.179,9.569,8.323,10.37,8.323,12s1.187,3.205,1.352,3.426c0.165,0.221,2.335,3.565,5.659,5c0.79,0.341,1.408,0.545,1.888,0.698	c0.793,0.252,1.515,0.216,2.087,0.131c0.637-0.095,1.96-0.801,2.235-1.574c0.276-0.773,0.276-1.437,0.193-1.574	C21.654,17.966,21.433,17.883,21.101,17.717z"
                      ></path>
                    </svg>
                  </a>
                  {/* #whatsapp */}

                  {/* youtube */}
                  <a
                    href="https://www.youtube.com/channel/UCuRDo2bcgMZDbazS0uqceAw"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0,0,256,256"
                    >
                      <g transform="translate(-3.84,-3.84) scale(1.03,1.03)">
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M2.771,27.348c-0.507,-3.402 -0.287,-6.486 0.411,-9.854c0.231,-1.115 0.536,-2.227 1.075,-3.232c1.761,-3.28 5.685,-4.823 9.4,-5.24c3.715,-0.416 7.283,-0.221 11.015,-0.437c5.51,-0.319 10.337,0.289 15.482,1.48c0.795,0.184 1.606,0.375 2.297,0.807c1.592,0.996 2.172,3.002 2.485,4.847c0.944,5.56 0.612,11.258 -0.034,16.86c-0.169,1.462 -0.396,3.008 -1.345,4.137c-0.848,1.008 -2.146,1.522 -3.422,1.867c-3.363,0.909 -6.898,0.904 -10.384,0.893c-4.226,-0.014 -8.453,-0.027 -12.679,-0.041c-4.114,-0.013 -8.593,-0.152 -11.757,-2.766c-0.681,-0.562 -1.288,-1.243 -1.615,-2.061c-0.238,-0.594 -0.319,-1.236 -0.399,-1.87c-0.258,-2.054 -0.225,-3.342 -0.53,-5.39z"
                              fill="#ef4823"
                            ></path>
                            <path
                              d="M46.014,22.201c-0.043,-2.331 -0.227,-4.68 -0.66,-6.974c-0.32,-1.695 -0.914,-3.51 -2.355,-4.582c-0.828,-0.616 -1.837,-0.861 -2.826,-1.088c-1.117,-0.257 -2.239,-0.491 -3.367,-0.693c-2.19,-0.393 -4.403,-0.67 -6.625,-0.791c-2.37,-0.129 -4.715,0.005 -7.082,0.083c-2.385,0.078 -4.773,0.044 -7.156,0.178c-3.737,0.211 -7.741,0.905 -10.543,3.611c-1.462,1.412 -2.226,3.233 -2.653,5.193c-0.493,2.258 -0.786,4.579 -0.75,6.892c0.018,1.157 0.127,2.306 0.292,3.451c0.309,2.133 0.248,4.331 0.692,6.444c0.41,1.951 1.987,3.338 3.682,4.242c3.576,1.908 7.845,1.759 11.778,1.772c4.917,0.016 9.85,0.142 14.766,0.013c2.371,-0.062 4.766,-0.263 7.063,-0.887c1.88,-0.511 3.625,-1.413 4.428,-3.285c0.382,-0.89 0.537,-1.846 0.657,-2.801c0.148,-1.173 0.266,-2.352 0.369,-3.53c0.212,-2.409 0.335,-4.829 0.29,-7.248zM44.402,32.579c-0.235,2.017 -0.695,3.903 -2.647,4.888c-1.855,0.936 -4.13,1.202 -6.173,1.365c-4.485,0.358 -9.042,0.134 -13.537,0.119c-2.184,-0.007 -4.37,0.012 -6.554,-0.032c-1.836,-0.037 -3.685,-0.145 -5.477,-0.573c-1.788,-0.427 -3.56,-1.193 -4.874,-2.512c-1.49,-1.496 -1.431,-3.717 -1.579,-5.693c-0.073,-0.979 -0.168,-1.954 -0.308,-2.926c-0.319,-2.207 -0.333,-4.443 -0.074,-6.658c0.244,-2.092 0.565,-4.432 1.642,-6.278c1.748,-2.998 5.377,-4.328 8.657,-4.736c2.197,-0.274 4.422,-0.298 6.633,-0.329c2.202,-0.031 4.398,-0.168 6.599,-0.206c4.259,-0.074 8.481,0.461 12.633,1.384c0.959,0.213 2.013,0.378 2.857,0.911c0.754,0.476 1.265,1.246 1.599,2.058c0.744,1.809 0.912,3.9 1.069,5.828c0.362,4.462 0.052,8.954 -0.466,13.39z"
                              fill="#010101"
                            ></path>
                            <path
                              d="M19.6,17.534c-0.6,4.466 0.18,8.819 0.1,12.932c3.819,-2.139 7.937,-4.278 11.757,-6.417c-1.568,-0.967 -3.336,-1.955 -4.998,-2.75c-2.212,-1.057 -4.998,-2.508 -6.859,-3.765z"
                              fill="#d6e5e5"
                            ></path>
                            <path
                              d="M31.709,23.617c-3.848,-2.363 -8.1,-4 -11.857,-6.515c-0.154,-0.103 -0.302,-0.098 -0.426,-0.041c-0.147,0.036 -0.272,0.138 -0.308,0.339c-0.431,2.392 -0.563,4.791 -0.357,7.213c0.166,1.952 0.469,3.887 0.439,5.851c-0.006,0.386 0.427,0.614 0.752,0.432c3.897,-2.179 7.86,-4.237 11.757,-6.417c0.335,-0.186 0.313,-0.669 0,-0.862zM19.775,24.774c-0.192,-2.15 -0.119,-4.281 0.206,-6.408c3.349,2.13 7.034,3.667 10.461,5.667c-3.407,1.889 -6.852,3.71 -10.259,5.599c-0.046,-1.625 -0.264,-3.236 -0.408,-4.858z"
                              fill="#010101"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  {/* youtube */}

                  {/* instagram */}
                  <a
                    href="https://www.instagram.com/padhai.planetofficial/?igsh=eHR6YXozZDV3cThm"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0,0,256,256"
                    >
                      <defs>
                        <radialGradient
                          cx="19.38"
                          cy="42.035"
                          r="44.899"
                          gradientUnits="userSpaceOnUse"
                          id="color-1_Xy10Jcu1L2Su_gr1"
                        >
                          <stop offset="0" stop-color="#ffdd55"></stop>
                          <stop offset="0.328" stop-color="#ff543f"></stop>
                          <stop offset="0.348" stop-color="#fc5245"></stop>
                          <stop offset="0.504" stop-color="#e64771"></stop>
                          <stop offset="0.643" stop-color="#d53e91"></stop>
                          <stop offset="0.761" stop-color="#cc39a4"></stop>
                          <stop offset="0.841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <radialGradient
                          cx="11.786"
                          cy="5.5403"
                          r="29.813"
                          gradientUnits="userSpaceOnUse"
                          id="color-2_Xy10Jcu1L2Su_gr2"
                        >
                          <stop offset="0" stop-color="#4168c9"></stop>
                          <stop
                            offset="0.999"
                            stop-color="#4168c9"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                      </defs>
                      <g transform="translate(-38.4,-38.4) scale(1.3,1.3)">
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z"
                              fill="url(#color-1_Xy10Jcu1L2Su_gr1)"
                            ></path>
                            <path
                              d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z"
                              fill="url(#color-2_Xy10Jcu1L2Su_gr2)"
                            ></path>
                            <path
                              d="M24,31c-3.859,0 -7,-3.14 -7,-7c0,-3.86 3.141,-7 7,-7c3.859,0 7,3.14 7,7c0,3.86 -3.141,7 -7,7zM24,19c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5z"
                              fill="#ffffff"
                            ></path>
                            <circle
                              cx="31.5"
                              cy="16.5"
                              r="1.5"
                              fill="#ffffff"
                            ></circle>
                            <path
                              d="M30,37h-12c-3.859,0 -7,-3.14 -7,-7v-12c0,-3.86 3.141,-7 7,-7h12c3.859,0 7,3.14 7,7v12c0,3.86 -3.141,7 -7,7zM18,13c-2.757,0 -5,2.243 -5,5v12c0,2.757 2.243,5 5,5h12c2.757,0 5,-2.243 5,-5v-12c0,-2.757 -2.243,-5 -5,-5z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  {/* instagram */}

                  {/* facebook */}
                  <a
                    href=" https://www.facebook.com/profile.php?id=61555747225047&is_tour_completed=true"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0,0,256,256"
                    >
                      <g transform="translate(-24.32,-24.32) scale(1.19,1.19)">
                        <g
                          fill="none"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                        >
                          {" "}
                          <g transform="scale(5.33333,5.33333)">
                            <path
                              d="M24,5c-10.49341,0 -19,8.50659 -19,19c0,10.49341 8.50659,19 19,19c10.49341,0 19,-8.50659 19,-19c0,-10.49341 -8.50659,-19 -19,-19z"
                              fill="#039be5"
                            ></path>
                            <path
                              d="M26.572,29.036h4.917l0.772,-4.995h-5.69v-2.73c0,-2.075 0.678,-3.915 2.619,-3.915h3.119v-4.359c-0.548,-0.074 -1.707,-0.236 -3.897,-0.236c-4.573,0 -7.254,2.415 -7.254,7.917v3.323h-4.701v4.995h4.701v13.729c0.931,0.14 1.874,0.235 2.842,0.235c0.875,0 1.729,-0.08 2.572,-0.194z"
                              fill="#ffffff"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  {/* facebook */}
                </div>
                {/* <!-- social - end --> */}
              </div>

              <div className="mb-4 tracking-widest text-gray-100">
                <p className="font-bold mb-4">PRODUCT</p>

                <div className="flex flex-wrap lg:flex-nowrap">
                  <nav className="flex flex-col lg:gap-4">
                    {subject.slice(0, 6).map((subjects) => (
                      <ol
                        className="w-[140px] sm:w-[100px] lg:w-[250px] pt-2 text-left text-gray-400 hover:text-indigo-500 active:text-indigo-600"
                        key={subjects.key}
                      >
                        <button
                          onClick={() => handleClick(subjects.key)}
                          className=""
                        >
                          {subjects.value} SSC
                        </button>
                      </ol>
                    ))}
                  </nav>

                  <nav className="flex flex-col lg:gap-4 ml-0 lg:ml-1">
                    {subject.slice(6).map((subjects) => (
                      <ol
                        className="w-[140px] lg:w-[250px] pt-2 text-left text-gray-400 hover:text-indigo-500 active:text-indigo-600"
                        key={subjects.key}
                      >
                        <button
                          onClick={() => handleClick(subjects.key)}
                          className=""
                        >
                          {subjects.value} SSC
                        </button>
                      </ol>
                    ))}
                  </nav>
                </div>
              </div>
              {/* <!-- nav - end --> */}

              {/* <!-- nav - start --> */}
              <div className="ml-0 lg:ml-[330px] mb-4 tracking-widest text-gray-100">
                <p className="font-bold mb-4"> COMPANY</p>
                <nav className="flex flex-col lg:gap-4">
                  <div className="w-full lg:w-[100px]">
                    <a
                      href="about-us"
                      className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      About Us
                    </a>
                  </div>

                  <div>
                    <a
                      href="blogs"
                      className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Blogs
                    </a>
                  </div>
                </nav>
              </div>
              {/* <!-- nav - end --> */}

              {/* <!-- nav - start --> */}
              <div className="ml-0 lg:ml-[280px] mb-4 tracking-widest text-gray-100">
                <p className="font-bold mb-4">SUPPORT</p>
                <nav className="flex flex-col lg:gap-4">
                  <div className="w-full lg:w-[100px]">
                    <a
                      href="contact-us"
                      className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Contact Us
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            {/* <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
              © 2024 - Present PadhaiPlanet. All rights reserved.
            </div> */}
            <div className="flex flex-col md:flex-row border-t border-gray-800 py-8">
              <div className="mb-2 md:mb-0 md:mr-2">
                <a href="terms-&-conditions" className="text-sm text-gray-400">
                  Terms & Conditions
                </a>
              </div>
              <p className="text-gray-400 px-2 hidden md:block">|</p>
              <div className="mb-2 md:mb-0 md:mr-2">
                <a href="privacy-&-policy" className="text-sm text-gray-400">
                  Privacy & Policy
                </a>
              </div>
              <div className="text-sm text-gray-400 md:pl-48">
                © 2024 - Present PadhaiPlanet. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
