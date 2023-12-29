import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage3 from './image3.jpg';
import Joiningoptions from '../Joiningoptions';
import { BreadcrumbBlogs } from '../Breadcrumbs';

const Blog3 = () => {
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
              src={myImage3}
              alt="Description of the image"
              className="w-full h-auto max-w-full rounded-lg"
            />
            <div className="mt-4"> {/* Add margin to separate image and text */}
              <h2 className="text-3xl font-bold mb-4 text-white">10th examination</h2>
              <p className="text-lg mb-4 text-white">
                From our earliest years, we've internalized the notion that conquering the 10th-grade exam stands as a paramount accomplishment. This pivotal examination serves as the crossroads where numerous academic paths unfold. Our entry into these diverse streams hinges on the outcome of our 10th board exams. But does it truly carry such weight? The answer is affirmative. If we excel and put forth our utmost effort, we can effortlessly attain our aspirations. Best of luck in your examinations!
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

export default Blog3;
