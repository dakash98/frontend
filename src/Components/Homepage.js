import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import { BreadcrumbProfile, Breadcrumbhome } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import "../assets/style.css";
import QuestionAnswer from "./QuestionAnswer";
import Navbar from "./Navbar";
import Profilepage from "./Profilepage";

function Homepage() {


  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <Breadcrumbhome />
      <Body />
      <Joiningoptions />
      <Profilepage />
      <QuestionAnswer />
      <Footer />
    </div >
  );
}

export default Homepage;
