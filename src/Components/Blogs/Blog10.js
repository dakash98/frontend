import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage6 from './image6.jpg';
import Joiningoptions from '../Joiningoptions';
import { BreadcrumbBlogs } from '../Breadcrumbs';

const Blog10 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const redirectHome = () => {
        navigate('/');
    };


    return (
        <div>
            <div className="sticky top-0 flex z-10">
                <Navbar />
            </div>

            <BreadcrumbBlogs />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="p-4 md:p-8 lg:mb-10 flex items-center justify-center min-h-screen">
                    <div className="rounded-lg p-4 md:p-8 lg:px-24">
                        <img
                            src={myImage6}
                            alt="Description of the image"
                            className="w-full h-auto max-w-full rounded-lg"
                        />
                        <div className="mt-4"> {/* Add margin to separate image and text */}
                            <h2 className="text-3xl font-bold mb-4 text-white">Maharashtra Board SSC and HSC Results 2024: How to Check the result</h2>
                            <p className="text-lg mb-4 text-white">
                            As the academic year comes to an end, Maharashtra students are eagerly waiting for the declaration of the SSC (10th) Maharashtra board and HSC (12th) Maharashtra board exam results. The state's educational landscape is shaped by the Maharashtra State Board of Secondary and Higher Education (MSBSHSE). Access to <a href='https://mahresult.nic.in/' target="_blank"><span style={{ color: 'lightblue', textDecoration: 'underline' }}>https://mahresult.nic.in/</span></a> or <a href='https://results.gov.in' target="_blank"><span style={{ color: 'lightblue', textDecoration: 'underline' }}>https://results.gov.in</span></a> where the results are now available, is important for students and parents. On this blog, we will be guiding you to check your results and talk about how the same can affect the future endeavours of students, especially those shifting from 10th to new majors.
                            <br></br>
                            How to check results for 10th SSC and 12th SSC
                            Begin your journey by navigating to the official website of Maharashtra Board results at mahresult.nic.in.
                            <br></br>
                            1.Once you're on the homepage, keep an eye out for the section marked “Maharashtra HSC Result 2024” and give it a click.
                            <br></br>
                            2.Now, it’s time to fill in the necessary details. Enter your roll number along with your mother’s name into the designated fields.
                            <br></br>
                            3.After double-checking the information for accuracy, hit the “View Result” button to submit your details.
                            <br></br>
                            4.Your Maharashtra HSC Result 2024 will magically appear on your screen. Feel free to capture this moment by taking a printout or a screenshot for your records.
                            <br></br>
                            <br></br>
                            <b> Students can also check 2024 Maharashtra board results result via messaging</b>
                            <br></br>
                            <br></br>
                            Unlock the possibilities of checking your Maharashtra SSC Result 2024 via SMS with these simple steps: 
                            <br></br>
                            Step 1 :Begin by opening your trusty messaging app on your mobile device.
                            <br></br>
                            Step 2 :Craft your message by typing “MHSSC”, followed by a space, and then insert your roll number.
                            <br></br>
                            Step 3:Once your message is polished and ready, send it off to the designated number, 57766. Now, sit back and relax as the magic unfolds.
                            <br></br>
                            Step 4:Your much-awaited 12th Result Maharashtra Board 2024 will make its grand entrance right to your mobile device, on the same number you sent the message.
                            <br></br>
                            <br></br>
                            The release of Maharashtra Board SSC and HSC results marks the beginning of a new chapter for students. By leveraging their results wisely and embracing opportunities, 10th-grade students can chart a course towards a bright and promising future. Remember, success is not solely defined by academic achievements but also by the willingness to learn, adapt, and pursue one's passion with determination and enthusiasm. Congratulations to all the students on their accomplishments, and best wishes for the exciting journey <button onClick={event => (redirectHome())}><span style={{ color: 'lightblue', textDecoration: 'underline' }}>PadhaiPlanet's</span> </button> commitment is to support students, parents and teachers in their educational journey. Through innovative learning solutions and expert resources, we empower students to succeed in an ever-evolving learning environment. Let us together embrace the requirements and opportunities announced in the HSC and SSC 2024 result to set our course for a brighter future.
                            <br></br>


                            </p>
                            {/* Add more content as needed */}
                        </div>
                    </div>
                </div>
                <Joiningoptions />
            </div>
            <Footer />
        </div>
    );
};

export default Blog10;
