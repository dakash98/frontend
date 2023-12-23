import React from 'react'
import Navbar from './Navbar'
import { BreadcrumbBlogs } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import myImage from './images/banner.jpg'
import myImage2 from './images/image1.jpg'
import myImage3 from './images/image2.jpg'
import myImage4 from './images/image3.jpg'
import myImage5 from './images/image4.jpg'
import myImage6 from './images/image5.jpg'
import myImage7 from './images/image6.jpg'

const Blogs = () => {
    const navigate = useNavigate();

    const handleImageClick = (imageId) => {
        navigate(`/image-detail/${imageId}`);
    };

    return (
        <div>
            <Navbar />
            <BreadcrumbBlogs />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="p-8 mb-10 flex items-center justify-center h-screen">
                    <div className="rounded-lg px-4 md:px-24">
                        <img
                            src={myImage}
                            alt="Description of the image"
                            className="w-auto max-w-full h-66 rounded-lg"
                        />
                    </div>
                </div>
                <div className='block'>
                    <div className="flex flex-wrap px-4 md:px-24">
                        <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div
                                className="mb-4 flex-grow p-15"
                                onClick={() => handleImageClick(1)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage2}
                                    alt="Description of Image 1"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}>
                                        <strong>10th Board SSC Exam 2024 </strong>
                                        <br />
                                        Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(1)}>
                                            ...<strong>Read More</strong>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div
                                className="flex-grow p-15"
                                onClick={() => handleImageClick(2)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage3}
                                    alt="Description of Image 2"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}>
                                        <strong>SSC Exam Timetable 2024</strong>
                                        <br />
                                        The Maharashtra board timetable has been published already on the website www.mahahsscboard.in.
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(2)}>
                                            ...<strong>Read More</strong></button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div
                                className="mb-4 flex-grow p-15"
                                onClick={() => handleImageClick(3)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage4}
                                    alt="Description of Image 3"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}>
                                        <strong>10th examination</strong>
                                        <br />
                                        From our earliest years, we've internalized the notion that conquering the 10th-grade exam.
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(3)}>
                                            ...
                                            <strong>Read More</strong>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div
                                className="flex-grow p-15"
                                onClick={() => handleImageClick(4)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage5}
                                    alt="Description of Image 4"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}><strong>Importance of 10th </strong>
                                        <br />
                                        It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement.
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(4)}>...<strong>Read More</strong></button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow p-8 xs:1/1 md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <div
                                className="mb-4 flex-grow p-15"
                                onClick={() => handleImageClick(5)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage6}
                                    alt="Description of Image 3"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}>
                                        <strong>Importance of Planning</strong>
                                        <br />
                                        The ease or difficulty of securing good marks in any examination relies entirely on consistency.
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(5)}>
                                            ...
                                            <strong>Read More</strong>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div
                                className="flex-grow p-15"
                                onClick={() => handleImageClick(6)}
                                style={{ maxWidth: "400px" }}
                            >
                                <img
                                    src={myImage7}
                                    alt="Description of Image 4"
                                    className="w-full h-60 object-cover rounded-lg"
                                    style={{ width: "100%" }}
                                />
                                <div>
                                    <br />
                                    <p style={{ marginBottom: '10px' }}><strong>How easy is it to crack Class 10 examination? </strong>
                                        <br />
                                        How easy or hard it is to get good marks in any examination is purely based on consistency.
                                        <button className="hover:text-red-600 transition duration-300" onClick={() => handleImageClick(6)}>...<strong>Read More</strong></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Joiningoptions />
            <Footer />
        </div>
    );
};


export default Blogs;
