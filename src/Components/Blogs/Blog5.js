import React,{useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import myImage5 from './image5.jpg';
import Joiningoptions from '../Joiningoptions';

const Blog5 = () => {
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
              src={myImage5}
              alt="Description of the image"
              className="w-full h-auto max-w-full rounded-lg"
            />
            <div className="mt-4"> {/* Add margin to separate image and text */}
              <h2 className="text-3xl font-bold mb-4 text-white">Importance of Planning</h2>
              <p className="text-lg mb-4 text-white">
              The ease or difficulty of securing good marks in any examination relies entirely on consistency. Effective planning and flawless execution serve as the linchpin for optimal results. Despite the prevailing competition, consistency empowers us to achieve anything. Once the 10th board syllabus is covered, consulting previous year question papers for class 10 becomes crucial. Rigorous practice is the key to attaining high marks, and the internet offers numerous sample class 10 question papers. Devote ample time to review them, and you'll excel in your performance. Best of luck in your exams!
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

export default Blog5;
