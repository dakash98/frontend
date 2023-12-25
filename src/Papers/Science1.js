import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { BreadcrumbPages } from '../Components/Breadcrumbs';
import Joiningoptions from '../Components/Joiningoptions';
import Exploremore from '../Components/Exploremore';
import { useState, useEffect } from 'react'
import { fetchdata } from '../Global.js'

function Science1() {

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

  function toggleSignUp(user_choice) {
    if (user_choice === 'sign_up') {
      document.getElementById("signin").classList.add('hidden');
      document.getElementById("signup").classList.remove('hidden');
    }
    else if (user_choice === 'sign_in') {
      document.getElementById("signup").classList.add('hidden');
      document.getElementById("signin").classList.remove('hidden');
    }
  }

  function submitHandlerSignIn(event) {
    event.preventDefault();
    document.getElementById("forms_window").classList.add('hidden');
  }

  const submitHandlerSignUp = (event) => {
    event.preventDefault();
    document.getElementById("forms_window").classList.add('hidden');
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
      <BreadcrumbPages sub={'Science 1'}/>
      <div id='parent' className='relative'>
        <div id='go' className=' top-0 w-full mt-[50px]'>
          <div className='w-[50%] ml-[25%] pb-[5%] pr-[10%]'>
            <h1 className='ml-[50%] text-3xl font-bold text-white'>Science 1</h1>
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

          <div className='text-center w-[75%] bg-teal-300 mx-[12.5%] min-h-screen'>
            <h1 className='text-4xl text-left py-[40px] pl-[100px]'>PadhaiPlanet</h1>
            <div className='flex w-[100%] mt-[5%] pl-[25%]'>
              <button onClick={event => (toggleSignUp('sign_up'))} className='float-left w-[25%] h-[50px] ml-[2.5%] text-white font-semibold bg-sky-600'>Sign Up</button>
              <button onClick={event => (toggleSignUp('sign_in'))} className='float-right w-[25%] h-[50px] ml-[10%] text-white font-semibold bg-sky-600'>Sign In</button>
            </div>
            <form onSubmit={submitHandlerSignUp} id='signup' className=''>
              <div className='w-[63%] mt-[5%] pl-[30%]'>
                <div className='mb-[10%] w-[20%] py-[2.5%] rounded-lg text-indigo-800 font-semibold ml-[45%] bg-green-400'>Create an account</div>
                <label for='uname' className='float-left ml-[30%] mb-[20px]'>Enter your Name: </label><br />
                <input type='text' name='uname' className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Name' required></input>
              </div>

              <div className='w-[63%] mt-[50px] pl-[30%]'>
                <label for='uphnnum' className='float-left ml-[30%] mb-[20px]'>Enter your Number: </label><br />
                <input type='text' name='uphnnum' pattern="[7-9]{1}[0-9]{9}" maxLength="10" className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Phone number' required></input>
              </div>

              <div className='w-[63%] mt-[50px] pl-[30%]'>
                <label for='uemail' className='float-left ml-[30%] mb-[20px]'>Enter your Email: </label><br />
                <input type='email' name='uemail' className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Email' required></input>
              </div>

              <div className='w-[63%] mt-[50px] pl-[30%]'>
                <label for='upass' className='float-left ml-[30%] mb-[20px]'>Enter your Password *: </label><br />
                <input type='password' name='upass' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Password' required></input>
              </div>

              <div className='text-left w-[50%] ml-[9%] mt-[2.5%] italic pl-[30%] text-xl'>* Password must contain a Capital letter, a small letter, character(eg. @) and a number.</div>

              <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Sign up</button>
            </form>

            <form onSubmit={submitHandlerSignIn} id='signin' className='hidden'>

              <div className='w-[63%] mt-[5%] pl-[30%]'>
                <div className='mb-[10%] w-[20%] py-[2.5%] rounded-lg text-indigo-800 font-semibold ml-[45%] bg-green-400'>Login</div>
                <label for='uname' className='float-left ml-[30%] mb-[20px]'>Enter your Name: </label><br />
                <input type='text' name='uname' className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Name' required></input>
              </div>

              <div className='w-[63%] mt-[50px] pl-[30%]'>
                <label for='uphnnum' className='float-left ml-[30%] mb-[20px]'>Enter your Number: </label><br />
                <input type='text' name='uphnnum' pattern="[7-9]{1}[0-9]{9}" maxLength="10" className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Phone number' required></input>
              </div>

              <div className='w-[63%] mt-[50px] pl-[30%]'>
                <label for='upass' className='float-left ml-[30%] mb-[20px]'>Enter your Password: </label><br />
                <input type='password' name='upass' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='ml-[9%] pl-[2%] w-[50%] mt-[2.5%] h-[50px]' placeholder='Password' required></input>
              </div>

              <button className='mb-[100px] mt-[50px] ml-[-3%] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Sign in</button>
            </form>
          </div>

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
        <Exploremore sub_name={'science_1'} />
      </div>
      <Footer />

    </div >
  )
}

export default Science1
