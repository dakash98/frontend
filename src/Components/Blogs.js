import React from 'react'
import Navbar from './Navbar'
import { BreadcrumbBlogs, BreadcrumbProfile } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import { useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'
import myImage from './images/banner.jpg'
import myImage2 from './Blogs/image1.jpg'
import myImage3 from './Blogs/image2.jpg'
import myImage4 from './Blogs/image3.jpg'
import myImage5 from './Blogs/image4.jpg'
import myImage6 from './Blogs/image5.jpg'
import myImage7 from './Blogs/image6.jpg'
import Profilepage from './Profilepage'

const Blogs = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('');
    };
    return (
        <div>
            <div className="sticky top-0 flex pl-[50px] pt-10 z-10">
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
                        <div className="p-4 md:p-8 lg:mb-10 flex items-center justify-center min-h-screen">
                            <div className="rounded-lg p-4 md:p-8 lg:px-24">
                                <img
                                    src={myImage}
                                    alt="Description of the image"
                                    className="w-full h-auto max-w-full rounded-lg"
                                />
                            </div>
                        </div>
                        <div className='block'>
                            <div className="flex flex-wrap px-4 md:px-24">
                                <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">

                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105" style={{ maxWidth: "400px" }}>
                                        <Link to="/10th-Board-SSC-Exam-2024">
                                            <img
                                                src={myImage2}
                                                alt="Image 2"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer"
                                                style={{ width: "100%" }}
                                                onClick={handleImageClick}

                                            />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-lg '>10th Board SSC Exam 2024 </b>
                                                <br />
                                                Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024
                                                <Link to="/10th-Board-SSC-Exam-2024">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...<b>Read More</b></span></Link>
                                            </p>
                                        </div>

                                    </div>
                                    <br />
                                    <br />
                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105"
                                        style={{ maxWidth: "400px" }}>
                                        <Link to="/SSC-Exam-Timetable-2024">
                                            <img
                                                src={myImage3}
                                                alt="Description of Image 3"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-lg '>SSC Exam Timetable 2024</b>
                                                <br />
                                                The Maharashtra board timetable has been published already on the website www.mahahsscboard.in.
                                                <Link to="/SSC-Exam-Timetable-2024">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...<b>Read More</b></span></Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105" style={{ maxWidth: "400px" }}>
                                        <Link to="/10th-examination">
                                            <img
                                                src={myImage4}
                                                alt="Description of Image 4"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-lg '>10th examination</b>
                                                <br />
                                                From our earliest years, we've internalized the notion that conquering the 10th-grade exam.
                                                <Link to="/10th-examination">
                                                    <span className="text-red-600 hover:text-yellow-200 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110 ">
                                                        ... <b>Read More</b>
                                                    </span></Link>
                                            </p>
                                        </div>
                                        <br />
                                    </div>
                                    <br />
                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105" style={{ maxWidth: "400px" }}>
                                        <Link to="/Importance-of-10th">
                                            <img
                                                src={myImage5}
                                                alt="Description of Image 5"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}><b className='text-lg '>Importance of 10th </b>
                                                <br />
                                                It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement.
                                                <Link to="/Importance-of-10th">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...<b>Read More</b></span></Link>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105" style={{ maxWidth: "400px" }}>
                                        <Link to="/Importance-of-Planning">
                                            <img
                                                src={myImage6}
                                                alt="Description of Image 6"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}>
                                                <b className='text-lg '>Importance of Planning</b>
                                                <br />
                                                The ease or difficulty of securing good marks in any examination relies entirely on consistency.
                                                <Link to="/Importance-of-Planning">
                                                    <span className="text-red-600 hover:text-yellow-200 cursor-pointer transition duration-300 transform hover:scale-110" >
                                                        ...
                                                        <b>Read More</b>
                                                    </span></Link>
                                            </p>
                                        </div>

                                    </div>
                                    <br />
                                    <br />
                                    <div className="mb-4 flex-grow p-15 transform transition duration-300 hover:scale-105" style={{ maxWidth: "400px" }}>
                                        <Link to="/How-easy-is-it-to-crack-Class-10-examination? ">
                                            <img
                                                src={myImage7}
                                                alt="Description of Image 7"
                                                className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300"
                                                style={{ width: "100%" }} />
                                        </Link>
                                        <div>
                                            <br />
                                            <p style={{ marginBottom: '10px', color: "white" }}><b className='text-lg '>How easy is it to crack Class 10 examination? </b>
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
                <Profilepage />

            </div>
            <Footer />
        </div>
    );
};
export default Blogs;
