import React from 'react'
import Navbar from './Navbar'
import { BreadcrumbAboutUs, BreadcrumbProfile } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import Footer from './Footer'
import Profilepage from './Profilepage'
import myAboutImage1 from '../Static/aboutUs1.jpg';
import myAboutImage2 from '../Static/aboutUs2.jpg';

function AboutUs() {
    return (
        <div>
            <div className="sticky top-0 flex z-10">
                <Navbar />
            </div>
            <div className="relative z-0">
                <div>
                    <div id="home">
                        <BreadcrumbAboutUs />
                    </div>
                    <div id="profile" className="hidden">
                        <BreadcrumbProfile />
                    </div>

                
                        <div className='lg:px-24'>
                            
                            <div className="flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
                                
                                <div className="flex w-full lg:w-1/2 mb-4 lg:mb-0">
                                    <img
                                        src={myAboutImage2} 
                                        alt="Your Image Alt Text"
                                        className="w-full h-96 object-cover rounded-lg m-4" 
                                    />
                                </div>

                                <div className="flex-grow w-full lg:w-1/2 p-12 content-container animate-fade-in">
                                    <div className="p-4">
                                        <p className='text-white paragraph text-lg'>PadhaiPlanet is an online platform created by students for students. The idea behind this initiative originated when the creators were pursuing their 10th examination. They found it challenging to familiarise themselves with the question papers for practice. Practising old question papers is as crucial as studying the syllabus when aiming for a good rank or marks. Currently, PadhaiPlanet provides Maharashtra Board 10th question papers, and there are further offerings that PadhaiPlanet plans to introduce in the near future.</p>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex-grow w-full lg:w-1/2 p-12 content-container animate-fade-in">
                                        <div className="p-4"> 
                                            <p className='text-white paragraph text-lg'>PadhaiPlanet is developing a dynamic platform that aims to simplify students' studies and facilitate an informative journey by fostering connections with fellow students. Our creators believe in three core principles: Consistency, Collaboration, and Creativity (3Cs). Through the implementation of these 3Cs, we envision that PadhaiPlanet will elevate students to their highest potential.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex w-full lg:w-1/2 mt-4 mb-4 mr-4"> 
                                        <img
                                            src={myAboutImage1} 
                                            alt="Your Image Alt Text"
                                            className="w-full h-96 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <br />
                            <br />
                            <br />
                        </div>
                    <div className='mt-[75px]'>
                        <Joiningoptions />
                    </div>
                    <Profilepage />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
