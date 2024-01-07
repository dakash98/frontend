import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BreadcrumbProfile, Breadcrumbhome } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import "../assets/style.css";
import QuestionAnswer from "./QuestionAnswer";
import Navbar from "./Navbar";
import StaticTag from "./StaticTag";

function Homepage() {
  return (
    <div>
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
