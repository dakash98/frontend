import React from 'react';
import Navbar from './Navbar';
import { BreadcrumbContactUs, BreadcrumbProfile } from './Breadcrumbs';
import Footer from './Footer';
import Profilepage from './Profilepage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import ContactUsLink from './ContactUsLink';

function ContactUs() {
    return (
        <div>
            <div className="sticky top-0 flex z-10">
                <Navbar />
            </div>
            <div className="relative z-0">
                <div>
                    <div id="home">
                        <BreadcrumbContactUs />
                    </div>
                    <div id="profile" className="hidden">
                        <BreadcrumbProfile />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="text-center">
                            <h1 className=" md:text-5xl lg:text-5xl text-white">Contact Us</h1>
                            <br />
                            <h3 className="md:text-2xl lg:text-2xl text-white">How would you like to contact us</h3>
                        </div>
                        <br />
                        <div className="flex flex-col items-center justify-center w-full md:flex-row md:w-3/4 lg:w-1/2 border border-gray-300 rounded-md overflow-hidden p-4 mb-4">
                            <FontAwesomeIcon icon={faComment} className="text-white text-4xl md:text-5xl lg:text-6xl" style={{ marginRight: '1em' }} />
                            <a href="https://wa.me/message/M3KZHGMFBK7MB1" className="text-white text-xl md:text-2xl lg:text-3xl mt-2 md:mt-0 text-center">Chat with us</a>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full md:flex-row md:w-3/4 lg:w-1/2 border border-gray-300 rounded-md overflow-hidden p-4">
                            <FontAwesomeIcon icon={faPen} className="text-white text-4xl md:text-5xl lg:text-6xl" style={{ marginRight: '2em' }} />
                            <ContactUsLink />
                        </div>
                        </div>
                    
                    <Profilepage />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
