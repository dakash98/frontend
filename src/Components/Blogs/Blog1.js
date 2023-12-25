import React,{useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage1 from './image1.jpg';
import Joiningoptions from '../Joiningoptions';

const Blog1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="p-4 md:p-8 lg:mb-10 flex items-center justify-center min-h-screen">
          <div className="rounded-lg p-4 md:p-8 lg:px-24">
            <img
              src={myImage1}
              alt="Description of the image"
              className="w-full h-auto max-w-full rounded-lg"
            />
            <div className="mt-4"> {/* Add margin to separate image and text */}
              <h2 className="text-3xl font-bold mb-4 text-white">10th Board SSC Exam 2024</h2>
              <p className="text-lg mb-4 text-white">
                Maharashtra board exam is scheduled on March 1, 2024, and will be over by March 25, 2024. When there are only three months left for the examination, students should be focusing more on practicing the syllabus now which includes a revision and practicing the previous year question papers as much as possible. Time management can reduce stress easily and help you achieve the goal as well.
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

export default Blog1;
