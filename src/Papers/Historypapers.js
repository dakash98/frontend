import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { BreadcrumbHistory } from '../Components/Breadcrumbs';
import Joiningoptions from '../Components/Joiningoptions';
import Exploremore from '../Components/Exploremore';
import { useState, useEffect } from 'react'

function Historypapers() {

  //For fetching data
  const API_hisory_paper = 'https://padhaiplanet-backend.onrender.com/v1/get-question?subject=english&medium=a&standard=10 ';

  //API data hooks
  const [que_data, setQue_data] = useState([]);
  const [sol_data, setSol_data] = useState([]);


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
  console.log(data['length']);
  for (var j = 0; j < data['length']; j++) {
    data_imp.push(data[j])
  }
  console.log(data_imp)


  useEffect(() => {
    fetchdata(API_hisory_paper);
  }, [])





  function HandleClick(login_state, paper_no, item) {
    if (login_state==="not_logged_in") {
      document.getElementById("pop").classList.remove('hidden');
      document.getElementById("pop").classList.add('opacity-90');
    }
    else {
      document.getElementById("que_paper_screen").classList.remove('hidden');
      setQue_data(data_imp[item].papers[paper_no].question_url);
    }
  }


  const submitHandler = (event) => {
    event.preventDefault();
    document.getElementById("pop").classList.add('hidden');
    const userName = event.target.uname.value;
    const userPhnNumber = event.target.uphnnum.value;
    const userEmail = event.target.uemail.value;
    const userPass = event.target.upass.value;
    axios.post('https://padhaiplanet-backend.onrender.com/v1/signup', {
      'name': userName,
      'email': userEmail,
      'phone': userPhnNumber,
      'password': userPass
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (

    <div>
      <Navbar />
      <BreadcrumbHistory />
      <div id='parent' className='relative'>
        <div id='go' className=' top-0 w-full mt-[50px]'>
          <h1 className='text-center text-3xl font-bold'>History</h1>
          <div className='w-[50%] ml-[25%]'>

            {data_imp.map((item, index) => 
            <div className='w-[50%] ml-[25%] mt-[100px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>{item.year}</div>
              <div className='flex'>
                <div className='block'>
                <button onClick={event => HandleClick("not_logged_in", 0, index)} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600' key={index}>{item.papers[0]['name']} Q Paper</button>
                <a href={item.papers[0]['solution_url']} target='_blank' type='button' className='w-[250px] text-white h-[50px] text-center font-medium pt-[4%] mt-[25px] bg-blue-500' key={index}>{item.papers[0]['name']} Solution</a>
                </div>
                <div className='block'>
                <button onClick={event => HandleClick("logged_in", 1, index)} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]' key={index}>{item.papers[1]['name']} Q Paper</button>
                <a href={item.papers[0]['solution_url']} target='_blank' type='button' className='w-[250px] text-white h-[50px] text-center font-medium mt-[25px] pt-[3%] bg-blue-500 ml-[120px]' key={index}>{item.papers[1]['name']} Solution</a>
                </div>
              </div>
            </div>)}
          </div>
        </div>


        <div id="pop" className='absolute top-0 w-full hidden pb-[20px]'>

          <div className='text-center w-[40%] bg-teal-300 mx-[30%]'>
            <h1 className='text-4xl text-left py-[40px] pl-[100px]'>PadhaiPlanet</h1>
            <form onSubmit={submitHandler}>
              <div className='w-[50%] mt-[50px] pl-[25%]'>
                <label for='uname' className='float-left ml-[3px] mb-[20px]'>Enter your Name: </label><br />
                <input type='text' name='uname' className='px-[10px] w-[350px] h-[50px]' placeholder='Name' required></input>
              </div>

              <div className='w-[50%] mt-[50px] pl-[25%]'>
                <label for='uphnnum' className='float-left ml-[3px] mb-[20px]'>Enter your Number: </label><br />
                <input type='text' name='uphnnum' pattern="[7-9]{1}[0-9]{9}" maxLength="10" className='px-[10px] w-[350px] h-[50px]' placeholder='Phone number' required></input>
              </div>

              <div className='w-[50%] mt-[50px] pl-[25%]'>
                <label for='uemail' className='float-left ml-[3px] mb-[20px]'>Enter your Email: </label><br />
                <input type='email' name='uemail' className='px-[10px] w-[350px] h-[50px]' placeholder='Email' required></input>
              </div>

              <div className='w-[50%] mt-[50px] pl-[25%]'>
                <label for='upass' className='float-left ml-[3px] mb-[20px]'>Enter your Password: </label><br />
                <input type='password' name='upass' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='mb-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Password' required></input>
              </div>

              <div className='text-left italic pl-[135px] text-xl'>Password instructions: <hr className='w-[200px] h-1 bg-violet-900 border-0 rounded  dark:bg-gray-700' />
                <ol>
                  <li>Password must contain a Capital letter.</li>
                  <li>Password must contain a small letter.</li>
                  <li> Password must contain a character.(eg. @)</li>
                  <li>Password must contain a digit.</li>
                </ol>
              </div>

              <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Sign up</button>
            </form>
          </div>

        </div>

        <div id="que_paper_screen" className='absolute top-0 w-full hidden pb-[20px]'>
          <div className='bg-orange-400 w-[50%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'>
            <div><iframe className='w-[100%] h-screen' src={que_data} /> <a href={sol_data} target='_blank'>Click here to view youtube video</a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[150px]'>
        <Joiningoptions />
      </div>
      <div>
        <Exploremore />
      </div>
      <Footer />

    </div >
  )
}

export default Historypapers
