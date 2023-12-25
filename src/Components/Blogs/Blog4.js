import React,{useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage4 from './image4.jpg';
import Joiningoptions from '../Joiningoptions';

const Blog4 = () => {
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
              src={myImage4}
              alt="Description of the image"
              className="w-full h-auto max-w-full rounded-lg"
            />
            <div className="mt-4"> {/* Add margin to separate image and text */}
              <h2 className="text-3xl font-bold mb-4 text-white">Importance of 10th</h2>
              <p className="text-lg mb-4 text-white">
              It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement. 10th examination is the destination from where multiple streams come in the picture. So entry into these streams is dependent on the score of our 10th board exams. But does it hold really that much of an importance? Answer is yes. If we score well and do our best, we can easily achieve what is to be achieved. All the best for your exam.
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

export default Blog4;
