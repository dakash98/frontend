import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage2 from './image2.jpg';
import Joiningoptions from '../Joiningoptions';
import { BreadcrumbBlogs } from '../Breadcrumbs';

const Blog2 = () => {
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
                  src={myImage2}
                  alt="Description of the image"
                  className="w-full h-auto max-w-full rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-3xl font-bold mb-4 text-white">SSC Exam Timetable 2024</h2>
                  <p className="text-lg mb-4 text-white">
                    The Maharashtra board timetable has been published already on the website www.mahahsscboard.in. It contains all the details such as Time, Date, Subjects and the duration. It also comes with the requisites and the needed protocols which are to be followed while appearing for the examination. Students can download the timetable from the above link. All the best for the examination!
                  </p>
                </div>
              </div>
            </div>
            <Joiningoptions />
          </div>
      <Footer />
    </div>
  );
};

export default Blog2;
