/*import React from 'react'
import Navbar from './Navbar'
import { BreadcrumbBlogs, BreadcrumbProfile } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import { useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'
import myImage from './images/banner2.jpg'
import myImage2 from './Blogs/image1.jpg'
import myImage3 from './Blogs/image2.jpg'
import myImage4 from './Blogs/image3.jpg'
import myImage5 from './Blogs/image4.jpg'
import myImage6 from './Blogs/image5.jpg'
import myImage7 from './Blogs/image6.jpg'



const Blogs = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('');
    };
    return (
        <div>
            <div className="sticky top-0 flex z-10">
                <Navbar />
            </div>
            <div className="relative z-0">
                <div>
                    <div id="home">
                        <BreadcrumbBlogs />
                    </div>
                    <div id="profile" className="hidden">
                        <BreadcrumbProfile />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="rounded-lg lg:mb-10 lg:px-32">
                            <img
                                src={myImage}
                                alt="Description of the image"
                                className="w-full h-auto max-w-full rounded-lg border-4 border-white"
                            />
                        </div>


                        <div className='block' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="flex flex-wrap lg:mb-10">
                                
                                <div className="flex-grow p-8 xs:w-full md:w-full lg:flex lg:flex-row xl:w-full pl-[124px] mr-10">

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/10th-Board-SSC-Exam-2024">
                                            <img
                                                src={myImage2}
                                                alt="10th Board SSC Exam 2024"
                                                className="w-[80%] h-60 object-cover rounded-lg cursor-pointer"
                                                style={{ width: "100%" }}
                                                onClick={handleImageClick}
                                            />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-xl '>10th Board SSC Exam 2024 </b>
                                                <br />
                                                Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024
                                                <Link to="/10th-Board-SSC-Exam-2024">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110">
                                                        ...<b>Read More</b></span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/SSC-Exam-Timetable-2024">
                                            <img
                                                src={myImage3}
                                                alt="SSC Exam Timetable 2024"
                                                className="w-[80%] h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-xl '>SSC Exam Timetable 2024</b>
                                                <br />
                                                The Maharashtra board timetable has been published already on the website www.mahahsscboard.in.
                                                <Link to="/SSC-Exam-Timetable-2024">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...<b>Read More</b></span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/10th-examination">
                                            <img
                                                src={myImage4}
                                                alt="10th examination"
                                                className="w-[80%] h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-xl '>10th Examination</b>
                                                <br />
                                                From our earliest years, we've internalized the notion that conquering the 10th-grade exam.
                                                <Link to="/Importance-of-Planning">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...<b>Read More</b>
                                                    </span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="flex-grow p-8 xs:w-full md:w-full lg:flex lg:flex-row xl:w-full pl-[124px] mr-10">

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/Importance-of-10th">
                                            <img
                                                src={myImage5}
                                                alt="Importance of 10th"
                                                className="w-[60%] h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}><b className='text-xl '>Importance of 10th</b>
                                                <br />
                                                It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement.
                                                <Link to="/How-easy-is-it-to-crack-Class-10-examination? ">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110"
                                                    >...<b>Read More</b></span></Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/Importance-of-Planning">
                                            <img
                                                src={myImage6}
                                                alt="Importance of Planning"
                                                className="w-[90%] h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-xl '>Importance of Planning</b>
                                                <br />
                                                The ease or difficulty of securing good marks in any examination relies entirely on consistency.
                                                <Link to="/Importance-of-Planning">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...
                                                        <b>Read More</b>
                                                    </span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full mb-4 flex-grow transform transition duration-300 hover:scale-105 mr-12" style={{ maxWidth: "400px" }}>
                                        <Link to="/How-easy-is-it-to-crack-Class-10-examination? ">
                                            <img
                                                src={myImage7}
                                                alt="How easy is it to crack Class 10 examination?"
                                                className="w-[80%] h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}><b className='text-xl '>How easy is it to crack Class 10 examination? </b>
                                                <br />
                                                How easy or hard it is to get good marks in any examination is purely based on consistency.
                                                <Link to="/How-easy-is-it-to-crack-Class-10-examination? ">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110"
                                                    >...<b>Read More</b></span></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
*/