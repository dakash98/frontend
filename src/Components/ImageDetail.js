import React, { useEffect, useState ,} from 'react';
import Navbar from './Navbar';
import Joiningoptions from './Joiningoptions';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import myImage1 from './images/image1.jpg';
import myImage2 from './images/image2.jpg';
import myImage3 from './images/image3.jpg';
import myImage4 from './images/image4.jpg';
import myImage5 from './images/image5.jpg';
import myImage6 from './images/image6.jpg';




const ImageDetail = () => {
    const { id } = useParams();
    
    const [imageUrl, setimageUrl] = useState('');
    const [imageContent, setImageContent] = useState('');



    useEffect(() => {
        const imageMap = {
            "1": {
                url: myImage1,
                content:
                    "<h1><b>10th Board SSC Exam 2024</b></h1> </br>Maharashtra board exam is scheduled on March 1, 2024 and will be over by March 25, 2024. When there are only three months left for the examination, students should be focusing more on practising the syllabus now which includes a revision and practising the previous year question papers as much as possible. Time management can reduce stress easily and help you achieve the goal as well.",
            },
            "2": {
                url: myImage2,
                content:
                    " <h2><b>SSC Exam Timetable 2024</b></h2></br> The Maharashtra board timetable has been published already on the website www.mahahsscboard.in. It contains all the details such as Time, Date, Subjects and the duration. It also comes with the requisites and the needed protocols which are to be followed while appearing for the examination. Students can download the timetable from the above link. All the best for the examination!",
            },
            "3": {
                url: myImage3,
                content:
                    "<h2><b>10th examination</b></h2> </br>From our earliest years, we've internalised the notion that conquering the 10th-grade exam stands as a paramount accomplishment. This pivotal examination serves as the crossroads where numerous academic paths unfold. Our entry into these diverse streams hinges on the outcome of our 10th board exams. But does it truly carry such weight? The answer is affirmative. If we excel and put forth our utmost effort, we can effortlessly attain our aspirations. Best of luck in your examinations!",
            },
            "4": {
                url: myImage4,
                content:
                    " <h2><b>10th examination</b></h2></br> It has been embedded in us since our very childhood that clearing the 10th exam is the biggest achievement. 10th examination is the destination from where multiple streams come in the picture. So entry into these streams is dependent on the score of our 10th board exams. But does it hold really that much of an importance? Answer is yes. If we score well and do our best, we can easily achieve what is to be achieved. All the best for your exam.",
            },
            "5": {
                url: myImage5,
                content:
                    "<h2><b>Importance of Planning</b></h2></br> The ease or difficulty of securing good marks in any examination relies entirely on consistency. Effective planning and flawless execution serve as the linchpin for optimal results. Despite the prevailing competition, consistency empowers us to achieve anything. Once the 10th board syllabus is covered, consulting previous year question papers for class 10 becomes crucial. Rigorous practice is the key to attaining high marks, and the internet offers numerous sample class 10 question papers. Devote ample time to review them, and you'll excel in your performance. Best of luck in your exams!",
            },
            "6": {
                url: myImage6,
                content:
                    " <h2><b>How easy is it to crack Class 10 examination?</b></h2></br>How easy or hard it is to get good marks in any examination is purely based on consistency. Proper planning & excellent execution is the key to better results. Competition is taking over all of us but we still can achieve anything with consistency. After all the 10th board syllabus is completed, We should go and check for the previous year question papers in class 10. Practice is what will help us secure good marks. There are a lot of sample class 10 question papers available on the internet.",
            },
        };

        if (id in imageMap) {
            setimageUrl(imageMap[id].url);
            setImageContent(imageMap[id].content);
        } else {
            console.error(`Image with id ${id} not found`);
        }
    }, [id]);


    

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-7xl w-full">
                    {/* Increase max-width to max-w-7xl */}
                    <img
                        src={imageUrl}
                        alt={`Description of Image ${id}`}
                        className="w-full max-w-full h-auto object-cover rounded-lg"
                    />
                    <br />
                    <p
                        dangerouslySetInnerHTML={{ __html: imageContent }}
                    ></p>
                </div>
            </div>
            <Joiningoptions />
            <Footer />
        </div>
    );
};

export default ImageDetail;