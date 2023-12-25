import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BreadcrumbProfile, Breadcrumbhome } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import { Link } from "react-router-dom";
import "../assets/style.css";
import QuestionAnswer from "./QuestionAnswer";
import Navbar from "./Navbar";
import Profilepage from "./Profilepage";

function Homepage() {


  return (
    <div>
      <div className="sticky top-0 flex pl-[50px] pt-10 z-10">
        <Navbar />
      </div>
      <div className="relative z-0">
        <div>
          <div id="home">
            <Breadcrumbhome />
          </div>
          <div id="profile" className="hidden">
            <BreadcrumbProfile />
          </div>
          <Body />
          <Joiningoptions />
        </div>

        <Profilepage />

      </div>
      <div>
        <QuestionAnswer />
      </div>
      <div className="z-2">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
