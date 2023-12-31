import React, { useState } from 'react'
import axios from 'axios';
import myImageLogin from '../Static/login1.jpg'

function Loginpage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  function toggleSignUp(user_choice) {
    if (user_choice === 'sign_up') {
      document.getElementById('signin').classList.add('hidden');
      document.getElementById('signup').classList.remove('hidden');
    } else if (user_choice === 'sign_in') {
      document.getElementById('signup').classList.add('hidden');
      document.getElementById('signin').classList.remove('hidden');
    }
  }

  function submitHandlerSignIn(event) {
    event.preventDefault();
    document.getElementById('forms_window').classList.add('hidden');
  }

  const submitHandlerSignUp = (event) => {
    event.preventDefault();
    document.getElementById('forms_window').classList.add('hidden');
    const userName = event.target.uname.value;
    const userPhnNumber = event.target.uphnnum.value;
    const userEmail = event.target.uemail.value;
    const userPass = event.target.upass.value;
    const userRole = event.target.urole.value;

    axios
      .post('https://padhaiplanet-backend.onrender.com/v1/signup', {
        name: userName,
        email: userEmail,
        phone: userPhnNumber,
        password: userPass,
        role: userRole,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // bg-gradient-to-r from-blue-100 to-blue-400

  return (
    <>
      <div className='flex relative '>
        <div className='ml-44 text-left w-[75%] bg-white mx-[10%] min-h-screen relative rounded-lg'>
          <div className='absolute top-1/2 left-10 transform -translate-y-1/2 w-[45%]'>
            <img src={myImageLogin} alt='Description' className='ml-8 w-full h-[600px] object-cover rounded-xl' />
          </div>

          <div className='flex w-full mt-[5%] pl-[63%]'>
            <button
              onClick={event => toggleSignUp('sign_up')}
              className='w-1/4 h-12 ml-5 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 border border-gray-800 rounded-md transition duration-300 ease-in-out'
            >
              Sign Up
            </button>
            <button
              onClick={event => toggleSignUp('sign_in')}
              className='ml-10 w-1/4 h-12 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 border border-gray-800 rounded-md transition duration-300 ease-in-out'
            >
              Sign In
            </button>
          </div>


          <form onSubmit={submitHandlerSignUp} id='signup' className=''>
            <div className='w-[90%] pl-[55%]  mt-[3%] '>
              <div className='ml-[30%] w-[60%] relative mb-5'>
                <label htmlFor='uname'>
                  {name ? '' : ''}
                </label>
                <input
                  type='text'
                  name='uname'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Name*'
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div className='ml-[30%] w-[60%] relative mb-5'>
                <label htmlFor='phone'
                >
                  {phoneNumber ? '' : ''}
                </label>
                <input
                  type='text'
                  name='phone'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Phone Number* '
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>

              <div className='ml-[30%] w-[60%] relative mb-5'>
                <label
                  htmlFor='email'
                >
                  {email ? '' : ''}
                </label>
                <input
                  type='text'
                  name='email'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Email* '
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className='ml-[30%] w-[60%] relative mb-5'>
                <label htmlFor='role'>
                  {role ? '' : ''}
                </label>
                <select
                  name='role'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold text-blue-700'
                  value={role}
                  onChange={handleRoleChange}
                  required
                >
                  <option value='' disabled hidden>Select Role*</option>
                  <option value='student'>Student</option>
                  <option value='parent'>Parent</option>
                  <option value='teacher'>Teacher</option>
                </select>
              </div>


              <div className='ml-[30%] w-[60%] relative mb-10'>
                <label
                  htmlFor='password'
                >
                  {password ? '' : ''}
                </label>
                <input
                  type='password'
                  name='password'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Password* '
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className='text-left ml-[15%] mt-[5.5%] text-lg'>* Password must contain a Capital letter, a small letter, character(eg. @), and a number.</div>

              <button className='mb-[40px] mt-[50px] ml-[150px] px-[30px] w-[150px] h-[50px] bg-cyan-500 text-xl border border-gray-800' type='submit'>
                Sign up
              </button>

            </div>

          </form>

          <form onSubmit={submitHandlerSignIn} id='signin' className='hidden'>
            <div className='w-[90%] pl-[55%]  mt-[5%]'>
              <div className='ml-[25%] w-[70%] relative mb-5'>
                <label htmlFor='phone'
                >
                  {phoneNumber ? '' : ''}
                </label>
                <input
                  type='text'
                  name='phone'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Phone Number/Email* '
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>

              <div className='ml-[25%] w-[70%] relative mb-10'>
                <label
                  htmlFor='password'
                >
                  {password ? '' : ''}
                </label>
                <input
                  type='password'
                  name='password'
                  className='w-full h-[50px] border border-gray-800 rounded-lg pl-10 placeholder-blue-custom font-bold'
                  placeholder='Password* '
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>



              <div className='text-left ml-[15%] mt-[5.5%] text-lg'>* Password must contain a Capital letter, a small letter, character(eg. @), and a number.</div>

              <button className='mb-[70px] mt-[50px] ml-[140px] px-[30px] w-[150px] h-[50px] bg-cyan-500 text-xl border border-gray-800' type='submit'>Sign in</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Loginpage
