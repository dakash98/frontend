import React, { useState } from "react";
import Navbar from "./Navbar";
import { BreadcrumbBlogs, BreadcrumbProfile } from "./Breadcrumbs";
import Joiningoptions from "./Joiningoptions";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import myImage from "./images/banner2.jpg";
import myImage2 from "./Blogs/image1.jpg";
import myImage3 from "./Blogs/image2.jpg";
import myImage4 from "./Blogs/image3.jpg";
import myImage5 from "./Blogs/image4.jpg";
import myImage6 from "./Blogs/image5.jpg";
import myImage7 from "./Blogs/image6.jpg";
import StaticTag from "./StaticTag";

const Blogs = () => {
  const navigate = useNavigate();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handleImageClick = () => {
    navigate("");
  };

  const blogItems = [
    {
      url: "/10th-board-ssc-exam-2024",
      image: myImage2,
      heading: "10th Board SSC Exam 2024",
      content:
        "Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024",
    },
    {
      url: "/ssc-exam-timetable-2024",
      image: myImage3,
      heading: "SSC Exam Timetable 2024",
      content:
        "The Maharashtra board timetable has been published already on the website www.mahahsscboard.in.",
    },
    {
      url: "/10th-examination",
      image: myImage4,
      heading: "10th Examination",
      content:
        "From our earliest years, we've internalized the notion that conquering the 10th-grade exam.",
    },
    {
      url: "/importance-of-10th",
      image: myImage5,
      heading: "Importance of 10th",
      content:
        "It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement.",
    },
    {
      url: "/importance-of-planning",
      image: myImage6,
      heading: "Importance of Planning",
      content:
        "The ease or difficulty of securing good marks in any examination relies entirely on consistency.",
    },
    {
      url: "/how-easy-is-it-to-crack-class-10-examination",
      image: myImage7,
      heading: "How easy is it to crack Class 10 examination?",
      content:
        "How easy or hard it is to get good marks in any examination is purely based on consistency.",
    },
    {
      url: "/cbse-2023-results-and-2024-syllabus",
      image: myImage7,
      heading: "CBSE 2023 results and 2024 Syllabus",
      content:
        "CBSE Results 2023 The results of CBSE 2023 showed a significant growth in education across the nation",
    },
    {
      url: "/a-reflection-and-plan-for-the-2024-syllabus-based-on-bihar-board-results-2023",
      image: myImage7,
      heading: " A Reflection and Plan for the 2024 Syllabus Based on Bihar Board Results 2023 ",
      content:
        "Millions of students across the state are influenced by the Bihar School Examination Board (BSEB)",
    },
    {
      url: "/a-comprehensive-analysis-of-the-10th-up-board-results-in-2023-introduction",
      image: myImage7,
      heading: " A Comprehensive Analysis of the 10th UP Board Results in 2023 Introduction",
      content:
        "The Uttar Pradesh Leading group of Secondary School and Moderate Training, generally known as the UP Board",
    },
    {
      url: "/maharashtra-board-sscand-hsc-results-2024-how-to-check-the-result",
      image: myImage7,
      heading: "Maharashtra Board SSC and HSC Results 2024: How to Check the result",
      content:
        "As the academic year comes to an end, Maharashtra students are eagerly waiting for the declaration of the SSC (10th)",
    },
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div>
      <head>
        <link rel="canonical" href="https://padhaiplanet.com/blogs" />
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
            <BreadcrumbBlogs />
          </div>
          <div id="profile" className="hidden">
            <BreadcrumbProfile />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className=" mb-4 rounded-lg lg:mb-10 lg:px-28">
              <img
                src={myImage}
                alt="Description of the image"
                className="w-full h-auto max-w-full rounded-lg border-4 border-white"
              />
            </div>

            <div className="block px-4 md:px-28 lg:px-28 xl:px-28 2xl:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-8 transform transition duration-300 hover:scale-105"
                >
                  <Link to={item.url}>
                    <img
                      src={item.image}
                      alt={`Blog ${index + 1}`}
                      className="w-full h-60 object-cover rounded-lg cursor-pointer"
                    />
                  </Link>
                  <div className="mt-4">
                    <p className="text-white">
                      <b className="text-xl">{item.heading}</b>
                      <br />
                      {item.content}
                      <Link to={item.url}>
                        <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110">
                          ...<b>Read More</b>
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(blogItems.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-2 px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <Joiningoptions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
