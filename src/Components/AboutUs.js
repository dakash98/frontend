import React from "react";
import Navbar from "./Navbar";
import { BreadcrumbAboutUs, BreadcrumbProfile } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import Footer from "./Footer";
import myAboutImage1 from "../Static/aboutUs1.jpg";
import myAboutImage2 from "../Static/aboutUs2.jpg";
import StaticTag from "./StaticTag";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Providing Maharashtra 10th Board exam question papers.</title>
        <meta name="description" content="PadhaiPlanet is a platform that provides previous year's question papers for Maharashtra 10th SSC board exams. It mainly comprises question papers in English, Marathi, and Semi- English Mediums for 2018,2019,2020,2022,2023" />
      </Helmet>
      <head>
        <link rel="canonical" href="https://padhaiplanet.com/about-us" />
      </head>
      <div className="sticky top-0 flex z-10">
        <Navbar />
      </div>
      <div className="mr-4 md:mr-[4%] lg:mr-[4%]">
        <StaticTag />
      </div>
      <div className="relative z-0">
        <div>
          <div id="home">
            <BreadcrumbAboutUs />
          </div>
          <div id="profile" className="hidden">
            <BreadcrumbProfile />
          </div>

          <div className="lg:px-24">
            <div className=" mx-4 flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
              <div className="flex w-full lg:w-1/2 m-4 ">
                <img
                  src={myAboutImage2}
                  alt="Your Image Alt Text"
                  className="w-full h-auto object-cover  md:w-auto md:h-auto pr-8"
                />
              </div>

              <div className="flex-grow w-full lg:w-1/2 p-2 content-container animate-fade-in">
                <div className="p-4">
                  <p className="text-white paragraph text-xl text-justify">
                    PadhaiPlanet is an online platform created by students for
                    students. The idea behind this initiative originated when
                    the creators were pursuing their 10th examination. They
                    found it challenging to familiarize themselves with the
                    question papers for practice. Practicing old question papers
                    is as crucial as studying the syllabus when aiming for a
                    good rank or marks. Currently, PadhaiPlanet provides
                    Maharashtra Board 10th question papers, and there are
                    further offerings that PadhaiPlanet plans to introduce in
                    the near future.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="mx-4 flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex w-full lg:w-1/2  m-4 mr-4">
                  <img
                    src={myAboutImage1}
                    alt="Your Image Alt Text"
                    className="w-full h-auto object-cover pr-8"
                  />
                </div>
                <div className="flex-grow w-full lg:w-1/2 p-2 content-container animate-fade-in">
                  <div className="p-4">
                    <p className="text-white paragraph text-xl text-justify">
                      PadhaiPlanet is developing a dynamic platform that aims to
                      simplify students' studies and facilitate an informative
                      journey by fostering connections with fellow students. Our
                      creators believe in three core principles: Consistency,
                      Collaboration, and Creativity (3Cs). Through the
                      implementation of these 3Cs, we envision that PadhaiPlanet
                      will elevate students to their highest potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
          <div className="mt-[45px]">
            <Joiningoptions />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
