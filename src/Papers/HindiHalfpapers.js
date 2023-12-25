import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { BreadcrumbPages } from '../Components/Breadcrumbs';
import Joiningoptions from '../Components/Joiningoptions';
import Exploremore from '../Components/Exploremore';
import { useState, useEffect } from 'react'
import { fetchdata } from '../Global.js'
import Loginpage from '../Components/Loginpage.js';

function HindiHalfpapers() {

  //For fetching data
  const API_hisory_paper = 'https://padhaiplanet-backend.onrender.com/v1/get-question?subject=english&medium=a&standard=10 ';

  //API data hooks
  const [que_data, setQue_data] = useState([]);


  const [data, setData] = useState([])

  //Assigning 
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.data);
    } catch (e) {
      console.log(e)
    }
  }

  const data_imp = []
  for (var j = 0; j < data['length']; j++) {
    data_imp.push(data[j])
  }


  useEffect(() => {
    fetchdata(API_hisory_paper);
  }, [])


  function closeQueWindow() {
    document.getElementById("que_paper_screen").classList.add('hidden');
  }


  function HandleClick(login_state, paper_no, year) {
    if (login_state === "not_logged_in") {
      document.getElementById("forms_window").classList.remove('hidden');
      document.getElementById("forms_window").classList.add('opacity-90');
    }
    else {
      document.getElementById("que_paper_screen").classList.remove('hidden');
      setQue_data(data_imp[year].papers[paper_no].question_url);
      console.log("year: " + year + "paper_number" + paper_no);
    }
  }

 
  return (

    <div>
      <Navbar />
      <BreadcrumbPages sub={'Hindi(Half)'}/>
      <div id='parent' className='relative'>
        <div id='go' className=' top-0 w-full mt-[50px]'>
          <div className='w-[50%] ml-[25%] pb-[5%] pr-[10%]'>
            <h1 className='ml-[50%] text-3xl font-bold text-white'>Hindi(Half)</h1>
            <div className='w-[50%] ml-[15%]'>

              {data_imp.map((item, index) =>
                <div className='w-[50%] ml-[-5%] mt-[10%]'>
                  <div className='w-[100px] h-[50px] rounded-lg text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>{item.year}</div>
                  <div className='flex'>
                    {item.papers.map((item1, index1) =>
                      <div className='flex ml-[15%]'>
                        <div className='block'>
                          <button onClick={event => HandleClick("logged_in", index1, index)} type='submit' className='rounded-2xl w-[300px] text-white h-[200px] text-lg text-center font-semibold mt-[50px] bg-gradient-to-r from-[#054569] to-[#5591A9]' key={index}>{item.papers[index1]['name']} Q Paper</button>
                          <a href={item.papers[index1]['solution_url']} target='_blank' type='button' className='rounded-xl w-[300px] text-white h-[50px] text-center font-medium pt-[4%] mt-[25px] bg-[#5591A9]' key={index}>{item.papers[index1]['name']} Solution</a>
                        </div>
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>
        </div>


        <div id="forms_window" className='absolute top-0 w-full hidden pb-[20px]'>
            <Loginpage />
        </div>

        <div id="que_paper_screen" className='absolute top-0 w-full hidden pb-[20px]'>
          <div className='bg-orange-400 w-[50%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'>
            <div className='w-100% h-[5%] float-right'><button onClick={closeQueWindow}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className='mt-[25%] ml-[-100%]'>
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg></button></div>
            <div><iframe className='w-[100%] h-screen' src={que_data} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[150px]'>
        <Joiningoptions />
      </div>
      <div>
        <Exploremore sub_name={'hindi_half'} />
      </div>
      <Footer />

    </div >
  )
}

export default HindiHalfpapers
