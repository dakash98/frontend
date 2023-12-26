import React from 'react'
import axios from 'axios';

function Loginpage() {

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
        <>
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
        </>
    )
}

export default Loginpage
