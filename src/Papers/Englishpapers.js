import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  BreadcrumbPages,
} from "../Components/Breadcrumbs";
import Joiningoptions from "../Components/Joiningoptions";
import Exploremore from "../Components/Exploremore";
import { useState, useEffect } from "react";
import Contentscreen from "../Components/Contentscreen.js";
import Loader from "../Components/Loader.js";
import { sleep, topFunction } from "../Global.js";
import StaticTag from "../Components/StaticTag.js";
import LoginComponent from "../Components/LoginComponent.js";

function EnglishPapers() {

  //For fetching data
  const API_hisory_paper =
    "https://padhaiplanet-backend.onrender.com/v1/get-question?subject=english&medium=a&standard=10 ";

  //API data hooks
  const [que_data, setQue_data] = useState([]);

  const [data, setData] = useState([]);

  //Assigning
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      await sleep(3000);
      setData(data.data);
      localStorage.setItem("data_english", JSON.stringify(data));
      document.getElementById("loader").classList.add("hidden");
      document.getElementById("parent").classList.remove("hidden");
      document.getElementById("explore").classList.remove("hidden");
      document.getElementById("footer").classList.remove("hidden");
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    topFunction();

    const timestamp = localStorage.getItem('timestamp_english');
    const data_english = localStorage.getItem('data_english');
    // console.log(timestamp)
    // console.log(data_english)

    if (timestamp && data_english) {

      const check = (new Date()).getDate() > JSON.parse(timestamp).expDate;

      if (check) {

        localStorage.removeItem('timestamp_english');
        localStorage.removeItem('data_english');

        //Adding timestamp
        const date = new Date().setDate(new Date().getDate() + 6);

        // console.log(date);
        // console.log(new Date(date));

        localStorage.setItem('timestamp_english', JSON.stringify({
          value: "string",
          expDate: date,
        }))

        fetchdata(API_hisory_paper);
      } else if(localStorage.getItem('data_english')) {
        const object = JSON.parse(localStorage.getItem('data_english'))
        setData(object.data)
        document.getElementById("loader").classList.add("hidden");
        document.getElementById("parent").classList.remove("hidden");
        document.getElementById("explore").classList.remove("hidden");
        document.getElementById("footer").classList.remove("hidden");
      }

    } else {

      //Adding timestamp
      const date = new Date().setDate(new Date().getDate() + 6);

      // console.log(date);
      // console.log(new Date(date));

      localStorage.setItem('timestamp_english', JSON.stringify({
        value: "string",
        expDate: date,
      }))

      fetchdata(API_hisory_paper);
    }

  }, []);



  function HandleClick(paper_no, year) {
    topFunction();
    if (!localStorage.getItem("user_id")) {
      document.getElementById("forms_window").classList.remove("hidden");
      document.getElementById("forms_window").classList.add("opacity-90");
    } else {
      document.getElementById("que_paper_screen").classList.remove("hidden");
      setQue_data(data_imp[year].papers[paper_no].question_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }

  function handleSolution(paper_no, year) {
    if (!localStorage.getItem("user_id")) {
      document.getElementById("forms_window").classList.remove("hidden");
      document.getElementById("forms_window").classList.add("opacity-90");
    } else {
      window.open(data_imp[year].papers[paper_no].solution_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }

  const data_imp = [];
  for (var j = 0; j < data["length"]; j++) {
    data_imp.push(data[j]);
  }
  console.log(data_imp)

  return (
    <div className="relative z-0">
      <div>
        <div className="sticky flex top-0 z-10">
          <Navbar />
        </div>
        <div className="mr-4 md:mr-[4%] lg:mr-[4%]">
          <StaticTag />
        </div>
        <div className="lg:px-8 md:px-6 sm:mx-4">
          <BreadcrumbPages sub={"English"} />
        </div>

        <div id="parent" className="relative">
          <div id="go" className=" top-0 w-full mt-[50px]">
            {/* <div className="w-[50%] xl:ml-[24%] lg:ml-[15%] md:ml-[25%] ml-[28%] pb-[5%] pr-[10%]"> */}
            <div className="pb-[5%]">
              {/* <h1 className="xl:ml-[25%] lg:ml-[80%] md:ml-[25%] ml-[30%] xl:mb-[0%] lg:mb-[0%] md:mb-[0%] mb-[50%] text-center text-3xl font-bold text-white"> */}
              <h1 className="text-center xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white">
                English
              </h1>
              {/* <div className="w-[100%] xl:ml-[0%] lg:ml-[0%] md:ml-[25%] ml-[0%]"> */}
              <div className="w-full items-center">
                {data_imp.map((item, index) => (
                  <div className="w-[50%] inset-0 m-auto text-center mt-[10%]">
                    <div className="w-[100px] h-[50px] rounded-lg text-center pt-[12.5px] text-xl font-semibold bg-amber-400">
                      {item.year}
                    </div>
                    {/* <div className="lg:flex md:block lg:pl-[28%]"> */}
                    <div className="lg:flex w-full md:block">
                      {item.papers.map((item1, index1) => (
                        <div className="flex xl:mr-[0%] lg:mr-[3%] md:mr-[0%] mr-[0%]">
                          <div className="block">
                            <button
                              onClick={(event) =>
                                HandleClick(index1, index)
                              }
                              type="submit"
                              className="rounded-2xl xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] text-white h-[200px] text-lg text-center font-semibold mt-[50px] bg-gradient-to-r from-[#054569] to-[#5591A9]"
                              key={index}
                            >
                              {item.papers[index1]["name"]} Q Paper
                            </button>
                            <button
                              onClick={(event) =>
                                handleSolution(index1, index)
                              }
                              className="rounded-xl xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] text-white h-[50px] text-center font-medium mt-[25px] bg-[#5591A9]"
                              key={index}
                            >
                              {item.papers[index1]["name"]} Solution
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            id="forms_window"
            className="absolute top-0 w-full hidden pb-[20px]"
          >
            <LoginComponent />
          </div>

          <div
            id="que_paper_screen"
            className="absolute top-0 md:w-[100%] sm:w-[100%] w-[100%] hidden pb-[20px]"
          >
            <Contentscreen q_data={que_data} />
          </div>
        </div>
        <div className="mt-[150px] xl:ml-[0%] lg:ml-[8%]">
          <Joiningoptions />
        </div>
        <div id="explore" className="hidden">
          <Exploremore sub_name={"english"} />
        </div>
        <div id="footer" className="hidden">
          <Footer />
        </div>
      </div>

      <div id="loader" className="absolute top-0 w-full h-[100%] z-10">
        <Loader />
      </div>
    </div>
  );
}

export default EnglishPapers;
