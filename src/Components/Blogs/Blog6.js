import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage6 from './image6.jpg';
import Joiningoptions from '../Joiningoptions';
import { BreadcrumbBlogs } from '../Breadcrumbs';

const Blog6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <h2 className="text-3xl font-bold mb-4 text-white">How easy is it to crack Class 10 examination?</h2>
              <p className="text-lg mb-4 text-white">
                How easy or hard it is to get good marks in any examination is purely based on consistency. Proper planning & excellent execution is the key to better results. Competition is taking over all of us but we still can achieve anything with consistency. After all the 10th board syllabus is completed, We should go and check for the previous year question papers in class 10. Practice is what will help us secure good marks. There are a lot of sample class 10 question papers available on the internet.
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

export default Blog6;
