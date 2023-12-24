import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Exploremore(props) {

  const navigate = useNavigate();

  const API_config = 'https://padhaiplanet-backend.onrender.com/v1/config';

  const [subject, setSubject] = useState([]);

  function handleClick(user_selected_option) {
  const page_mapping = {
    'english': '/english-question-papers',
    'hindi_full':'/hindi-full-question-papers',
    'hindi_half':'/hindi-half-question-papers',
    'sanskrit_full':'/sanskrit-full-question-papers',
    'sanskrit_half':'/sanskrit-half-question-papers',
    'marathi':'marathi-question-papers',
    'history_and_political_science':'/history-and-political-science-question-papers',
    'geography':'/geography-question-papers',
    'math_1':'/math-1-question-papers',
    'math_2':'/math-2-question-papers',
    'science_1':'/science-1-question-papers',
    'science_2':'/science-2-question-papers',
  }

  navigate(page_mapping[user_selected_option]);
}

  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSubject(data.data.subject)

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchdata(API_config);
  }, [])


  for (var i=0; i< subject.length; i++){
    if (subject[i].key === props.sub_name){
      subject.splice(i, 1);
    }
  }


  return (
    <div className='w-[25%] ml-[37.5%] mt-[150px]'>
      <h2 className='text-2xl mb-[30px] font-semibold'>Explore more question papers</h2>
      <div className='flex flex-wrap max-w-[100%]'>
      {subject.map((subjects) =>
      <div className='my-[5%] w-[50%] h-[50px]'> 
        <button onClick={event => (handleClick(subjects.key))} className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl text-center' key={subjects.key}>{subjects.value}</button>
      </div>)}
      </div>
    </div>
  )
}

export default Exploremore
