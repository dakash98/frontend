import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import readingImage from "../Static/astronut-book.png";
import { ConfigData } from "./ConfigData";

function Body() {
  // const API_config = "https://padhaiplanet-backend.onrender.com/v1/config";

  const navigate = useNavigate();

  const [standard, setStandard] = useState([]);
  const [medium, setMedium] = useState([]);
  const [subject, setSubject] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const fetchdata = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data.data);
  //     setStandard(data.data.standard);
  //     setMedium(data.data.medium);
  //     setSubject(data.data.subject);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    // fetchdata(API_config);
    setStandard(ConfigData[1].standard);
    setMedium(ConfigData[2].medium);
    setSubject(ConfigData[0].subject);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSubmit() {
    let form = document.getElementById("form");

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

    console.log(form.elements["sub"].value);
    navigate(page_mapping[form.elements["sub"].value]);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
    {!isSmallScreen && (
  <div className={isSmallScreen ? "w-[50%] md:w-[10%] md:order-2 mt-8 lg:mt-0" : "lg:w-[25%] md:order-2 lg:mt-0"}>
    <img src={readingImage} alt="Reading" className="w-full h-auto" />
  </div>
)}
    <form id="form" className="md:order-1 md:ml-4 mt-8 lg:mt-0">
        <div className="">
          <div className="text-center h-fit sm:mx-4">
            <p className="md:mx-4 flex text-3xl lg:text-3xl text-white font-semibold my-6 lg:my-10 pt-2.5">
              Please select the relevant options
            </p>
            <div>
              <select
                name="std"
                className="md:w-96 animation text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg pl-5 py-2 mb-2 lg:mb-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 lg:w-[450px]"
                type="button"
              >
                <option>
                  Standard{" "}
                  <svg
                    className=" h-2.5 ms-[19.75rem]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </option>

                {standard.map((standards) => (
                  <option value={standards.key}>{standards.value}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="med"
                className="md:w-96  animation text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg pl-5 py-2 mb-2 lg:mb-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 lg:w-[450px]"
                type="button"
              >
                <option>
                  Medium{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-[19.75rem]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </option>

                {medium.map((mediums) => (
                  <option value={mediums.key}>{mediums.value}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="sub"
                className="md:w-96 animation text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg pl-5 py-2 mb-2 lg:mb-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 lg:w-[450px]"
                type="button"
              >
                <option>
                  Subject{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-[19.75rem]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </option>

                {subject.map((subjects) => (
                  <option value={subjects.key}>{subjects.value}</option>
                ))}
              </select>
            </div>

            <div>
              <button
                onClick={(event) => {
                  handleSubmit();
                }}
                className="text-center rounded-lg text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg pl-[5.25rem] py-2.5 mb-[30px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-60"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
          {/* <div className='text-center pt-[25px]'>
<h1 className='text-lg'>For More Content of SSC please join below.</h1>
<div className='text-center'>
<button type='button' className='flex-inline text-white rounded-lg w-48 font-semibold bg-gray-800 py-4 my-[8px] mx-[10px]'>WhatsApp<svg className='inline ml-[10px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg></button>

<button type='button' className='flex-inline rounded-lg text-white w-48 font-semibold bg-gray-800 py-4 my-[8px] mx-[10px]'>Telegram<svg className='inline ml-[10px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1 c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1 C30,18.7,30.1,18.4,29.9,18.2z"></path>
</svg></button>
</div>
</div> */}
        </div>
      </form>
    </div>
  );
}

export default Body;
