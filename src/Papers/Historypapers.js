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
  const [year1, setYear1] = useState();
  const [year2, setYear2] = useState();
  const [que1_year1, setQue1_year1] = useState();
  const [sol1_year1, setSol1_year1] = useState();
  const [que2_year1, setQue2_year1] = useState();
  const [sol2_year1, setSol2_year1] = useState();
  const [que1_year2, setQue1_year2] = useState();
  const [sol1_year2, setSol1_year2] = useState();
  const [que2_year2, setQue2_year2] = useState();
  const [sol2_year2, setSol2_year2] = useState();
  const [que1_year3, setQue1_year3] = useState();
  const [sol1_year3, setSol1_year3] = useState();
  const [que2_year3, setQue2_year3] = useState();
  const [sol2_year3, setSol2_year3] = useState();

  //Assigning 
  const fetchdata = async (url) => {
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data.data);
          setYear1(data.data[0].year);
          setYear2(data.data[1].year);
          //Year 1
          setQue1_year1(data.data[0].papers[0].question_url)
          setSol1_year1(data.data[0].papers[0].solution_url)
          setQue2_year1(data.data[0].papers[1].question_url)
          setSol2_year1(data.data[0].papers[1].solution_url)
          //Year 2
          setQue1_year2(data.data[1].papers[0].question_url)
          setSol1_year2(data.data[1].papers[0].solution_url)
          setQue2_year2(data.data[1].papers[1].question_url)
          setSol2_year2(data.data[1].papers[1].solution_url)
          //Year 3
          // setQue1_year3(data.data[2].papers[0].question_url)          
          // setSol1_year3(data.data[2].papers[0].solution_url)          
          // setQue2_year3(data.data[2].papers[1].question_url)          
          // setSol2_year3(data.data[2].papers[1].solution_url)

      }catch (e){
          console.log(e)
      }
  }

  useEffect(() => {
      fetchdata(API_hisory_paper);
  }, [])





  function HandleClick(item) {
    if (item === "bad") {
      document.getElementById("pop").classList.remove('hidden');
      document.getElementById("pop").classList.add('opacity-90');
    }
    else {
      document.getElementById("popgood").classList.remove('hidden');
      if(item === "y1q2"){
        setQue_data(que2_year1);
        setSol_data(sol2_year1);
      }
      else if(item === "y2q1"){
        setQue_data(que1_year2);
        setSol_data(sol1_year2);
      }
      else if(item === "y2q2"){
        setQue_data(que2_year2);
        setSol_data(sol2_year2);
      }
      else if(item === "y3q1"){
        setQue_data(que1_year3);
        setSol_data(sol1_year3);
      }
      else if(item === "y3q2"){
        setQue_data(que2_year3);
        setSol_data(sol2_year3);
      }
    }
  }

  function collectData() {
    document.getElementById("pop").classList.add('hidden');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = event.target.uname.value;
    const userPhnNumber = event.target.uphnnum.value;
    const userEmail = event.target.uemail.value;
    const userPass = event.target.upass.value;
    axios.post('https://padhaiplanet-backend.onrender.com/v1/signup', {
      'name': userName,
      'email':userEmail,
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
            <div className='w-[50%] ml-[25%] mt-[100px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>{year1}</div>
              <div className='flex'>
                <button onClick={event => HandleClick("bad")} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button onClick={event => HandleClick("y1q2")} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
            <div className='w-[50%] ml-[25%] mt-[40px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>{year2}</div>
              <div className='flex'>
                <button type='submit' onClick={event => HandleClick("y2q1")} className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button type='submit' onClick={event => HandleClick("y2q2")} className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
            <div className='w-[50%] ml-[25%] mt-[40px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>2020</div>
              <div className='flex'>
                <button type='submit' onClick={event => HandleClick("y3q1")} className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button type='submit' onClick={event => HandleClick("y3q2")} className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
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

              <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Login</button>
              <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 hidden text-xl' onClick={event => collectData()} type='submit'></button>
            </form>
          </div>

        </div>

        <div id="popgood" className='absolute top-0 w-full hidden pb-[20px]'>
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
