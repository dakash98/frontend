import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfigData } from './ConfigData';

function Exploremore(props) {

  const navigate = useNavigate();

  // const API_config = 'https://padhaiplanet-backend.onrender.com/v1/config';

  const [subject, setSubject] = useState([]);

  function handleClick(user_selected_option) {
  const page_mapping = {
    'english': '/english-question-papers-10th-ssc',
    'hindi_full':'/hindi-full-question-papers-10th-ssc',
    'hindi_half':'/hindi-half-question-papers-10th-ssc',
    'sanskrit_full':'/sanskrit-full-question-papers-10th-ssc',
    'sanskrit_half':'/sanskrit-half-question-papers-10th-ssc',
    'marathi':'/marathi-question-papers-10th-ssc',
    'history_and_political_science':'/history-and-political-science-question-papers-10th-ssc',
    'geography':'/geography-question-papers-10th-ssc',
    'math_1':'/math-1-question-papers-10th-ssc',
    'math_2':'/math-2-question-papers-10th-ssc',
    'science_1':'/science-1-question-papers-10th-ssc',
    'science_2':'/science-2-question-papers-10th-ssc',
  }

  navigate(page_mapping[user_selected_option]);
}

  // const fetchdata = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setSubject(data.data.subject)

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  useEffect(() => {
    // fetchdata(API_config);
    setSubject(ConfigData[0].subject);
  }, [])


  // for (var i=0; i< subject.length; i++){
  //   if (subject[i].key === props.sub_name){
  //     subject.splice(i, 1);
  //   }
  // }


  return (
    // <div className='w-[50%] xl:ml-[30%] lg:ml-[30%] md:ml-[30%] ml-[25%] mt-[150px]'>
      <div className='w-[50%] inset-0 m-auto text-center mt-[150px]'>
      <h2 className='xl:text-3xl lg:text-2xl md:text-2xl text-xl w-[100%] text-center mb-[30px] font-semibold text-white'>Explore more question papers</h2>
      <div className='lg:flex lg:flex-wrap inset-0 m-auto md:block max-w-[100%]'>
      {subject.map((subjects) =>
      <div className='my-[5%] lg:mb-[5%] mb-[15%] md:mb-[10%] lg:w-[50%] h-[50px]'> 
        <button onClick={event => (handleClick(subjects.key))} className='xl:w-[300px] lg:w-[240px] md:w-[200px] w-[170px] h-[70px] bg-blue-600 rounded-xl text-xl text-center font-semibold' key={subjects.key}>{subjects.value}</button>
      </div>)}
      </div>
    </div>
  )
}

export default Exploremore
