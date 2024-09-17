import React from "react";
import Navbar from "../../../../Components/Navbar.js";
import Footer from "../../../../Components/Footer.js";
import {
  BreadcrumbPages,
} from "../../../../Components/Breadcrumbs.js";
import Joiningoptions from "../../../../Components/Joiningoptions.js";
import Exploremore from "../../../../Components/Exploremore.js";
import { useState, useEffect } from "react";
import Contentscreen from "../../../../Components/Contentscreen.js";
import Loader from "../../../../Components/Loader.js";
import { sleep, topFunction } from "../../../../Global.js";
import StaticTag from "../../../../Components/StaticTag.js";
import LoginComponent from "../../../../Components/LoginComponent.js";
import { Helmet } from 'react-helmet';

function HindiPapers() {

  const sel_med = localStorage.getItem('medium') ? localStorage.getItem('medium') : "marathi";

  const pre_API = "https://padhaiplanet.com/api/v1/get-question?subject=hindi_full&medium=" + sel_med + "&standard=10";

  //For fetching data
  const API_hisory_paper = pre_API;
  //API data hooks
  const [que_data, setQue_data] = useState([]);

  const [data, setData] = useState([]);

  //Assigning
  const fetchdata = async (url) => {
    try {
      // const res = await fetch(url);
      // const data = await res.json();
      // await sleep(3000);

      const data = {
        "data": [
          {
              "year": 2024,
              "papers": [
                  {
                      "id": 234,
                      "name": "hindi_A_2024_delhi.pdf",
                      "question_url": "https://padhai-planet.s3.ap-south-1.amazonaws.com/Cbse/Delhi%20region/hindi_A_2024_delhi.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCmFwLXNvdXRoLTEiRzBFAiAPIEMUv13HlwYmtZeXTT8mjnCVCCg6u5HW2RRy9p8MvAIhALZ1mY8CS%2B%2B92Qh5nCcIeVnVcHLtdYw7P9F4zpzrHb5lKugCCBIQABoMNTkwMTg0MTA4ODcxIgxcYkx2P4RfCp5bfvYqxQIiLO76eEkjxZk5T9GGeb8kNQO94G1LAZd6neWxJbZE2ym142QRb5p%2FHhlsw%2BCrypwEkIRMfd6TlaUQTVeLda8n0iuhMBR7L%2F4QWMSvjsePQoM0S%2B6SKMQc6HlG%2BAbTdrn67bXU%2FGzBbYMQ%2FE9hpqo%2BCrTMXKRKNDkmaxn0gJv8fpwWG8PKtmJ%2FuZO5DIEBfBj8ol2zYsOxcBBJusFw%2Bt4SI26wS1ZWXU364%2BAEjPdXrs3OLJGiiKQFQL47nDJMe4UD%2BNrMKHD9iihwuLkJHhSXtQG1tbv9P6n9wKHJL8mhkO35%2FJeTD%2FdYjchFRevSjRIP%2BJ0e%2FutxW28NSAdxHIidPNcX4e16IWtMbjcYjwqJFtOps3FFNzcFN3leE71WciKNdm60VstJNnXd%2FleYy7no2WEjo2xS9JQq8mZd6%2BNaqFVDzM%2F1MKfgzLUGOrMC%2Ffgpl5daS%2BJud%2FhUHehhcOyqKLGF6%2Bbym6fP5n3vkHWy6%2FPacFv%2F%2FN8sesZgAl2ktJqUmfITbl2cHLbO7dhSIhZsgI2y7eIDd6MhhznB9a6CvVtNYQVTQy1qcg3xk%2BBpX9%2F8U9iell8v5adsyc4r4Wmcg91%2FxK58GgYTFb951J1RweHty1XDYmxMR6UmHBjyl73hFdU%2FCfxwgsCJy7friqQvts5O2BUX1D6jMq%2BckT8iylfI3qS30OVRZtd7k8hheFUeOsMLjxD%2BB20cS%2BRl82phfFa%2BDpTZ994TfQZQYsutdBUJuqB0luO3N3pVOXdBTIBo2AxX2aw4K%2B%2FFqHQirqj9uDhYs%2FXunFi9iLXZ95PaA%2Fwi61jM7OWt940L%2BHdEtMV1o%2B5ge%2BsuUA8XGMo6sa9Ywg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240807T151612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYS2NW2NDYNTBLSV6%2F20240807%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=42d112d2e7683e9b94e253e3884d3ec0401ac61d638f07d761d86a3a2ca2c2a1",
                      "solution_url": ""
                  }
              ]
          }
      ]
      }
      setData(data.data);
      //⚠️⚠️⚠️ Do not remove below line!!⚠️⚠️⚠️
      // localStorage.setItem("data_hindi_full_" + localStorage.getItem('medium'), JSON.stringify(data));
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
    fetchdata(API_hisory_paper);

//     //⚠️⚠️⚠️ Below commented code can be fixed. Do not remove!!⚠️⚠️⚠️

//     // const timestamp = localStorage.getItem('timestamp_hindi_full_' + localStorage.getItem('medium'));
//     // const data_hindi_full = localStorage.getItem('data_hindi_full_' + localStorage.getItem('medium'));

//     // if (timestamp && data_hindi_full) {

//     //   const check = (new Date()).getDate() > JSON.parse(timestamp).expDate;

//     //   if (check) {

//     //     localStorage.removeItem('timestamp_hindi_full_' + localStorage.getItem('medium'));
//     //     localStorage.removeItem('data_hindi_full_' + localStorage.getItem('medium'));

//     //     //Adding timestamp
//     //     const date = new Date().setDate(new Date().getDate() + 6);

//     //     // console.log(date);
//     //     // console.log(new Date(date));

//     //     localStorage.setItem('timestamp_hindi_full_' + localStorage.getItem('medium'), JSON.stringify({
//     //       value: "string",
//     //       expDate: date,
//     //     }))

//     //     fetchdata(API_hisory_paper);
//     //   } else if(localStorage.getItem('data_hindi_full_' + localStorage.getItem('medium'))) {
//     //     const object = JSON.parse(localStorage.getItem('data_hindi_full_' + localStorage.getItem('medium')))
//     //     setData(object.data)
//     //     document.getElementById("loader").classList.add("hidden");
//     //     document.getElementById("parent").classList.remove("hidden");
//     //     document.getElementById("explore").classList.remove("hidden");
//     //     document.getElementById("footer").classList.remove("hidden");
//     //   }

//     // } else {

//     //   //Adding timestamp
//     //   const date = new Date().setDate(new Date().getDate() + 6);

//     //   // console.log(date);
//     //   // console.log(new Date(date));

//     //   localStorage.setItem('timestamp_hindi_full_' + localStorage.getItem('medium'), JSON.stringify({
//     //     value: "string",
//     //     expDate: date,
//     //   }))

//     //   fetchdata(API_hisory_paper);
//     // }

  }, []);

  const data_imp = [];
  for (var j = 0; j < data["length"]; j++) {
    data_imp.push(data[j]);
  }


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
  return (
    <div className="relative z-0">
      <Helmet>
        <title>Discover English Medium, Marathi Medium, and Sem-English Medium Maharashtra 10th SSC Board History Question Paper for 2018,2019,2020,2022,2023.</title>
        <link rel="canonical" href="https://padhaiplanet.com/cbse-board-hindi-question-papers-10th" />
        <meta name="description" content="Prepare for your exam with our Hindi Full question paper for the Maharashtra 10th SSC board. Prepare with the best resources and boost your chances of success in Maharashtra 10th SSC boards by practicing the previous year's question papers for 2018,2019,2020,2022,2023." />
        <meta name="keywords" content="10th SSC Maharashtra board question papers, Last 5 years question papers, Class 10 th Maharashtra board Hindi Full question paper and Solutions., Question paper pdf., 10th Standard Board exam., Maharashtra Board questions paper all classes., Maharashtra Board Question and Solutions." />
      </Helmet>

      <div>
        <div className="sticky flex top-0 z-10">
          <Navbar />
        </div>
        <div className="mr-4 md:mr-[4%] lg:mr-[4%]">
          <StaticTag />
        </div>
        <div className="lg:px-8 md:px-6 sm:mx-4">
          <BreadcrumbPages sub={"Hindi(Full)"} />
        </div>
        <div id="parent" className="relative">
          <div id="go" className=" top-0 w-full mt-[50px]">
            {/* <div className="w-[50%] xl:ml-[24%] lg:ml-[15%] md:ml-[25%] ml-[28%] pb-[5%] pr-[10%]"> */}
            <div className="pb-[5%]">
              {/* <h1 className="xl:ml-[25%] lg:ml-[80%] md:ml-[25%] ml-[30%] xl:mb-[0%] lg:mb-[0%] md:mb-[0%] mb-[50%] text-center text-3xl font-bold text-white"> */}
              <h1 className="text-center xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white">
                Hindi (Full)
              </h1>
              {/* <div className="w-[100%] xl:ml-[0%] lg:ml-[0%] md:ml-[25%] ml-[0%]"> */}
              <div className="w-full items-center">
                {data_imp.map((item, index) => (
                  <div className="w-[50%] inset-0 m-auto text-center mt-[10%]">
                    <div className="w-[100px] h-[50px] rounded-lg text-center pt-[12.5px] text-xl font-semibold bg-amber-400">
                      {item.year}
                    </div>
                    {/* <div className="lg:flex md:block lg:pl-[28%]"> */}
                    <div className="lg:block lg:block w-full md:block block">
                      {item.papers.map((item1, index1) => (
                        <div className="block xl:mr-[0%] lg:mr-[3%] md:mr-[0%] mr-[0%]">
                          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] block">
                            <button
                              onClick={(event) =>
                                HandleClick(index1, index)
                              }
                              type="submit"
                              className="rounded-2xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] text-white h-[200px] text-lg text-center font-semibold mt-[50px] bg-gradient-to-r from-[#054569] to-[#5591A9]"
                              key={index}
                            >
                              Q Paper
                              {/* {item.papers[index1]["name"]}  */}
                            </button>
                            {item.papers[index1]["solution_url"] ? (<button
                              onClick={(event) =>
                                handleSolution(index1, index)
                              }
                              className="rounded-xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] inset-0 m-auto text-white h-[50px] text-center font-medium mt-[25px] bg-[#5591A9] block"
                              key={index}
                            >
                              Solution
                              {/* {item.papers[index1]["name"]}  */}
                            </button>) : (<button
                              className="rounded-xl 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[250px] w-[200px] inset-0 m-auto text-white h-[50px] text-center font-medium mt-[25px] bg-[#5591A9] block"
                              key={index}
                            >
                              Solution Coming Soon
                              {/* {item.papers[index1]["name"]}  */}
                            </button>)}
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
          <Exploremore sub_name={"hindi_full"} />
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

export default HindiPapers;
