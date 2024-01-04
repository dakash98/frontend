import React, { useState } from "react";
import axios from "axios";
import myImageLogin from "../Static/login1.jpg";
import Joiningoptions from "./Joiningoptions";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Loginpage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [activeForm, setActiveForm] = useState("sign_up");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleSignUp = (user_choice) => {
    if (user_choice === "sign_up") {
      setActiveForm("sign_up");
    } else if (user_choice === "sign_in") {
      setActiveForm("sign_in");
    }
  };

  const submitHandlerSignIn = (event) => {
    event.preventDefault();
    document.getElementById("forms_window").classList.add("hidden");
  };

  const submitHandlerSignUp = (event) => {
    event.preventDefault();
    document.getElementById("forms_window").classList.add("hidden");
    const userName = event.target.uname.value;
    const userPhnNumber = event.target.uphnnum.value;
    const userEmail = event.target.uemail.value;
    const userPass = event.target.upass.value;
    const userRole = event.target.urole.value;

    axios
      .post("https://padhaiplanet-backend.onrender.com/v1/signup", {
        name: userName,
        email: userEmail,
        phone: userPhnNumber,
        password: userPass,
        role: userRole,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="md:ml-44 text-left w-full md:w-[70%] bg-gray-200 mx-2 md:mx-[10%] h-auto md:h-[600px] relative">
        <div className="md:absolute top-1/2  md:transform md:-translate-y-1/2 w-full md:w-[53%]">
          <img
            src={myImageLogin}
            alt="Description"
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>

        <div className="border border-gray-200 border-solid md:ml-[450px] w-[402px] md:mr-[5%] md:mt-[6%] h-auto md:h-[500px]">
          <p className="text-center mt-2 text-lg">PLease Login to continue</p>
          <div className="mt-[3%] inner-content bg-white">
            <div className="flex w-full ">
              <button
                onClick={() => toggleSignUp("sign_up")}
                className={`w-full h-12 text-black font-semibold ${
                  activeForm === "sign_up" ? "bg-blue-600" : "bg-white"
                } `}
              >
                Sign Up
              </button>
              <button
                onClick={() => toggleSignUp("sign_in")}
                className={`w-full h-12 text-black font-semibold ${
                  activeForm === "sign_in" ? "bg-blue-600" : "bg-white"
                } `}
              >
                Sign In
              </button>
            </div>

            <form
              onSubmit={
                activeForm === "sign_up"
                  ? submitHandlerSignUp
                  : submitHandlerSignIn
              }
              id="signup"
              className={`${activeForm === "sign_up" ? "" : "hidden"}`}
            >
              <div className="w-[90%] pl-[10%] mt-[8%]">
                <div className="relative mb-6">
                  <label htmlFor="uname">{name ? "" : ""}</label>
                  <input
                    type="text"
                    name="uname"
                    className=" text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Name*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>

                <div className="relative mb-6">
                  <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                  <input
                    type="text"
                    name="phone"
                    className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Phone Number*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>

                <div className="relative mb-5">
                  <label htmlFor="email">{email ? "" : ""}</label>
                  <input
                    type="text"
                    name="email"
                    className=" text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Email*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>

                <div className="relative mb-5">
                  <label htmlFor="role">{role ? "" : ""}</label>
                  <select
                    name="role"
                    className=" text-4sm text-gray-900 w-[320px] h-[54px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    value={role}
                    onChange={handleRoleChange}
                  >
                    <option value="" disabled hidden></option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="teacher">Teacher</option>
                  </select>
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Select Role
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>

                <div className="relative mb-2">
                  <label htmlFor="password">{password ? "" : ""}</label>
                  <input
                    type="password"
                    name="password"
                    className=" text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Password*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>
                <div>
                  <button
                    className="w-[320px] ml-[1%] rounded-sm text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5  inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    <span className="mx-auto">Sign Up</span>
                  </button>
                </div>
              </div>
            </form>

            <form
              onSubmit={
                activeForm === "sign_in"
                  ? submitHandlerSignIn
                  : submitHandlerSignUp
              }
              id="signin"
              className={`${activeForm === "sign_in" ? "" : "hidden"}`}
            >
              <div className="w-full pl-[5%]  mt-[10%] mr-[3%]">
                <div className=" w-[80%] relative mb-8 ml-[5%]">
                  <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                  <input
                    type="text"
                    name="phone"
                    className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Phone Number/Email*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>

                <div className="w-[80%] relative mb-5 ml-[5%]">
                  <label htmlFor="password">{password ? "" : ""}</label>
                  <input
                    type="password"
                    name="password"
                    className=" text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-sm border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                    placeholder=""
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-600 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                    Password*
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 pointer-events-none"></div>
                </div>
                <div className="text-sm ml-[5%] mt-[2%]">
                  * Password must contain a Capital letter, a small letter,
                  character(eg. @), and a number.
                </div>

                <div>
                  <button
                    className="w-[320px] ml-[5%] rounded-sm text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5 mb-[20px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    <span className="mx-auto">Sign In</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Joiningoptions />
      <Footer />
    </>
  );
}

export default Loginpage;
