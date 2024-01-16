import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myImageLogin from "../Static/login1.jpg";

function LoginComponent() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [signinname, signinName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const [activeForm, setActiveForm] = useState("sign_up");
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handlesignInputChange = (event) => {
    signinName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setEmailError(isValidEmail(enteredEmail) ? "" : "Invalid email format");
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    setPassword(newPassword);
    setPasswordError(
      newPassword.length >= 8
        ? ""
        : "Password must be at least 8 characters long"
    );
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

  const submitHandlerSignUp = (event) => {
    event.preventDefault();
    // document.getElementById("forms_window").classList.add("hidden");
    const userName = name;
    const userPhnNumber = phoneNumber;
    const userEmail = email;
    const userPass = password;
    const userRole = role;

    axios
      .post("https://padhaiplanet-backend.onrender.com/v1/signup", {
        name: userName,
        email: userEmail,
        phone: userPhnNumber,
        password: userPass,
        role: userRole,
      })
      // .then((response) => {
      // console.log(response);
      // localStorage.setItem("isLoggedIn", 1);
      // navigate("/");

      .then((response) => {
        console.log(response);
        if (!response.data.success) {
          localStorage.setItem("isLoggedIn", 1);
          navigate("/");
        } else {
          console.log("SignUp failed");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandlerSignIn = (event) => {
    event.preventDefault();

    const userPhnNumber = phoneNumber;
    const userPass = password;

    axios
      .post("https://padhaiplanet-backend.onrender.com/v1/login", {
        email_or_phone: userPhnNumber,
        password: userPass,
      })
      .then((response) => {
        console.log(response);
        if (response.data.meta.message === "User logged in") {
          // console.log("logggin", response.data.meta.message);
          localStorage.setItem("user_id", response.data.data.user_id);
          navigate("/");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {screenWidth >= 768 && (
          <img
            src={myImageLogin}
            alt="Your Image Alt Text"
            className="w-full w-[450px] h-auto md:h-[650px]  lg:ml-[280px] xl:ml-[300px] 2xl:ml-[350px] mt-[6%]"
          />
        )}
        <div className="w-full md:w-[430px]  mr:ml-[200px] md:mr-[350px] md:mt-[6%] bg-gray-200 h-auto md:h-[650px] relative">
          <div className="border border-gray-200 border-solid w-full md:w-[402px] md:mr-[5%] md:mt-[2%] h-auto md:h-[500px]">
            <p className="text-center text-lg">Please Login to continue</p>
            <div className="mt-[3%] inner-content h-[600px] bg-white ">
              <div className="flex w-full">
                <button
                  onClick={() => toggleSignUp("sign_up")}
                  className={`relative w-full h-12 text-black font-semibold ${
                    activeForm === "sign_up" ? "bg-blue-600" : "bg-white"
                  } `}
                >
                  Sign Up
                  {activeForm === "sign_up" && (
                    <span className="w-full h-1"></span>
                  )}
                </button>
                <button
                  onClick={() => toggleSignUp("sign_in")}
                  className={`relative w-full h-12 text-black font-semibold ${
                    activeForm === "sign_in" ? "bg-blue-600" : "bg-white"
                  } `}
                >
                  Sign In
                  {activeForm === "sign_in" && (
                    <span className=" w-full h-2 "></span>
                  )}
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
                <div className="w-[90%] pl-[5%] md:pl-[10%] lg:pl-[10%] mt-[8%]">
                  <div className="relative mb-6 sm:mr-[5%]">
                    <label htmlFor="uname">{name ? "" : ""}</label>
                    <input
                      type="text"
                      name="uname"
                      className=" text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10 sm:mr-4"
                      placeholder=""
                      value={name}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Name*
                    </span>
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                    <input
                      type="text"
                      name="phone"
                      className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                      placeholder=""
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Phone Number*
                    </span>
                  </div>

                  <div className="relative mb-5">
                    <label htmlFor="email">{email ? "" : ""}</label>
                    <input
                      type="text"
                      name="email"
                      className={`text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10 ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder=""
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Email*
                    </span>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div className="relative mb-5">
                    <label htmlFor="role">{role ? "" : ""}</label>
                    <select
                      name="role"
                      className=" text-4sm text-gray-900 w-[320px] h-[54px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      <option value="" disabled hidden></option>
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                    </select>
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Select Role
                    </span>
                  </div>

                  <div className="relative mb-2">
                    <label htmlFor="password">{password ? "" : ""}</label>
                    <input
                      type="password"
                      name="password"
                      className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                      placeholder=""
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Password*
                    </span>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>

                  {/* <div className="text-sm ml-[5%] mt-[2%]">
                    * Password must contain a Capital letter, a small letter,
                    character(eg. @), and a number.
                  </div> */}
                  <div>
                    <button
                      className="w-[200px] ml-[18%] rounded-lg text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5 mb-[20px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      <span className="mx-auto">Sign Up</span>
                    </button>
                  </div>
                </div>
              </form>

              <form
                onSubmit={submitHandlerSignIn}
                id="signin"
                className={`${activeForm === "sign_in" ? "" : "hidden"}`}
              >
                <div className="w-full pl-[5%] mt-[35%] mr-[3%]">
                  <div className=" w-[80%] relative mb-8 lg:ml-4">
                    <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                    <input
                      type="text"
                      name="phone"
                      className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                      placeholder=""
                      value={signinname}
                      onChange={handlesignInputChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Phone Number/Email*
                    </span>
                  </div>

                  <div className="w-[80%] relative mb-5 lg:ml-4">
                    <label htmlFor="password">{password ? "" : ""}</label>
                    <input
                      type="password"
                      name="password"
                      className="text-4sm text-gray-900 w-[320px] h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-10"
                      placeholder=""
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Password*
                    </span>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-[200px] ml-[18%] rounded-lg text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5 mb-[20px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
    </>
  );
}

export default LoginComponent;
