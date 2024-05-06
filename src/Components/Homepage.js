import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BreadcrumbProfile, Breadcrumbhome } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import "../assets/style.css";
import QuestionAnswer from "./QuestionAnswer";
import Navbar from "./Navbar";
import StaticTag from "./StaticTag";
import { Helmet } from "react-helmet";

function Homepage() {
  return (
    <div>
      <Helmet>
        <title>Crack Maharashtra 10th SSC Board Exams with Free Previous Year Question Papers.</title>
        <meta name="description" content="Access the ultimate collection of 10th SSC Maharashtra Board question papers for free. Students can get valuable insights from the previous year's question paper for the 10th SSC Maharashtra Board for the respective years 2018,2019,2020,2022,2023." />
      </Helmet>
      <head>
        <link rel="canonical" href="https://padhaiplanet.com/" />
      </head>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="  lg:mr-[2%]">
        <StaticTag />
      </div>
      <Breadcrumbhome />
      <Body />
      <Joiningoptions />
      <QuestionAnswer />
      <Footer />
    </div>
  );
}

export default Homepage;
