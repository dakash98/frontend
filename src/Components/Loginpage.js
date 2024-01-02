import React, { useState } from 'react';
import axios from 'axios';
import myImageLogin from '../Static/login1.jpg';

function Loginpage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [activeForm, setActiveForm] = useState('sign_up');

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

  const toggleSignUp = (user_choice) => {
    if (user_choice === 'sign_up') {
      setActiveForm('sign_up');
    } else if (user_choice === 'sign_in') {
      setActiveForm('sign_in');
    }
  };

  const submitHandlerSignIn = (event) => {
    event.preventDefault();
    document.getElementById('forms_window').classList.add('hidden');
  };

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



  return (
    <>
      <div className='flex flex-col md:flex-row mt-[2%]'>
        <div className='md:ml-44 text-left w-full md:w-[70%] bg-white mx-2 md:mx-[10%] h-auto md:h-[650px] relative rounded-lg'>
          <div className='md:absolute top-1/2 left-10 md:transform md:-translate-y-1/2 w-full md:w-[40%]'>
            <img
              src={myImageLogin}
              alt='Description'
              className='w-full h-auto md:h-[600px] object-cover rounded-xl'
            />
          </div>

          <div className='border-2 border-gray-800 border-solid p-6 ml-2 md:ml-[50%] mr-2 md:mr-[5%] mt-2 md:mt-[2%] mb-2 md:mb-[10%] h-auto md:h-[600px]'>
            <div className='flex w-full ml-2 md:ml-[1%] mr-2 md:mr-[30%]'>
              <button
                onClick={() => toggleSignUp('sign_up')}
                className={`w-full h-12 ml-5 text-white font-semibold ${activeForm === 'sign_up' ? 'bg-blue-700' : 'bg-gray-400'} border border-black`}
              >
                Sign Up
              </button>
              <button
                onClick={() => toggleSignUp('sign_in')}
                className={`w-full h-12 text-white font-semibold ${activeForm === 'sign_in' ? 'bg-blue-700' : 'bg-gray-400'} border border-black`}
              >
                Sign In
              </button>
            </div>

            <form
              onSubmit={activeForm === 'sign_up' ? submitHandlerSignUp : submitHandlerSignIn}
              id='signup'
              className={`${activeForm === 'sign_up' ? '' : 'hidden'}`}
            >
              <div className='w-[90%] pl-[5%] mt-[5%]'>
                <div className='ml-[20%] w-[70%] relative mb-5'>
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
                <div className='ml-[20%] w-[70%] relative mb-5'>
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
                <div className='ml-[20%] w-[70%] relative mb-5'>
                  <label
                    htmlFor='email'>
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
                <div className='ml-[20%] w-[70%] relative mb-5'>
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
                <div className='ml-[20%] w-[70%] relative mb-5'>
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
                <div className='text-left ml-[15%] mt-[2%] text-2sm'>* Password must contain a Capital letter, a small letter, character(eg. @), and a number.</div>

                <button
                  className='mb-2 md:mb-[20px] mt-2 md:mt-[20px] ml-2 md:ml-[10px] px-4 md:px-[30px] w-full md:w-[350px] h-[50px] bg-green-500 text-xl border border-gray-800'
                  type='submit'
                >
                  Sign up
                </button>


              </div>

            </form>


            <form
              onSubmit={activeForm === 'sign_in' ? submitHandlerSignIn : submitHandlerSignUp}
              id='signin'
              className={`${activeForm === 'sign_in' ? '' : 'hidden'}`}
            >
              <div className='w-full pl-[5%]  mt-[10%] mr-[3%]'>
                <div className=' w-[80%] relative mb-5 ml-[10%]'>
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

                <div className='w-[80%] relative mb-5 ml-[10%]'>
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
                <div className='text-left ml-[15%] mt-[2%] text-2sm'>* Password must contain a Capital letter, a small letter, character(eg. @), and a number.</div>

                <button
                  className='mb-2 md:mb-[20px] mt-2 md:mt-[20px] ml-2 md:ml-[10px] px-4 md:px-[30px] w-full sm:w-[250px] md:w-[350px] h-[50px] bg-green-500 text-xl border border-gray-800'
                  type='submit'
                >
                  Sign up
                </button>
 
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default Loginpage
