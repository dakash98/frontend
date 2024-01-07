import React from "react";
import Navbar from "./Navbar";
import { BreadcrumbContactUs, BreadcrumbProfile } from "./Breadcrumbs";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ContactUsLink from "./ContactUsLink";
import StaticTag from "./StaticTag";

function ContactUs() {
  return (
    <div>
      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>
      <div className="mr-4 md:mr-[4%] lg:mr-[4%]">
        <StaticTag />
      </div>
      <div className="relative z-0">
        <div>
          <div id="home">
            <BreadcrumbContactUs />
          </div>
          <div id="profile" className="hidden">
            <BreadcrumbProfile />
          </div>
          <div className="flex flex-col items-center justify-center mb-[4%]">
            <div className="text-center ">
              <b className=" md:text-5xl lg:text-5xl text-white">Contact Us</b>
              <br />
              <br />
              <h3 className="md:text-2xl lg:text-2xl text-white">
                How would you like to contact us ?
              </h3>
            </div>
            <br />
            <div className="flex flex-col items-center justify-center w-full  h-[95px] md:flex-row md:w-3/4 lg:w-1/2 border-2 border-gray-300 rounded-md overflow-hidden p-4 mb-4 transform transition duration-300 hover:scale-105 ">
              <FontAwesomeIcon
                icon={faComment}
                className="text-white text-2xl md:text-2xl lg:text-6xl"
                style={{ marginRight: "1em" }}
              />
              <a
                href="https://wa.me/message/M3KZHGMFBK7MB1"
                className="text-white text-xl md:text-2xl lg:text-3xl mt-2 md:mt-0 text-center hover:text-cyan-400"
              >
                Chat with us
              </a>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-[95px] md:flex-row md:w-3/4 lg:w-1/2 border-2 border-gray-300 rounded-md overflow-hidden p-4 transform transition duration-300 hover:scale-105">
              <FontAwesomeIcon
                icon={faPen}
                className="text-white text-2xl md:text-2xl lg:text-6xl "
                style={{ marginRight: "1em" }}
              />
              <ContactUsLink />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
