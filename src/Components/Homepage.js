import React from 'react'
import Body from './Body'
import Footer from './Footer'
import { BreadcrumbProfile, Breadcrumbhome } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import { Link } from 'react-router-dom'
import '../assets/style.css'

function Homepage() {

  function openLogoutPage(event) {
    document.getElementById('gonow').classList.remove('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
  }

  function closeLogoutPage(event) {
    document.getElementById('gonow').classList.add('hidden');
    document.getElementById('profile').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
  }

  return (
    <div>
      <div className='sticky top-0 bg-slate-500 flex pl-[50px] py-10 z-10'>
        <div className='w-5/6 font-sans text-6xl font-bold py-4'>PadhaiPlanet</div>
        <div className='text-right flex'>
          <Link to='/about-us' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> About Us</Link>
          <Link to='/login' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Blogs</Link>
          <Link to='/login' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Contact Us</Link>
          <button onClick={event => openLogoutPage()} className='btn float-left bg-amber-400 w-40 text-xl text-center hover:bg-green-500 mr-[50px]'>Profile</button>
        </div>
      </div>
      <div className='relative z-0'>
        <div>
          <div id='home'>
            <Breadcrumbhome />
          </div>
          <div id='profile' className='hidden'>
            <BreadcrumbProfile />
          </div>
          <Body />
          <Joiningoptions />
        </div>

        <div id='gonow' className='absolute duration-700 top-0 right-0 w-[30%] z-1 hidden flex-col'>
          <div className='h-screen py-[50px] w-[100%] bg-sky-800'>
            <img className='w-[250px] h-[250px]' src='https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg'></img>
            <br />
            <hr className='my-20px w-[850px] h-2 bg-green-500' />
            <br />
            <button className='bg-orange-300 ml-[50px] py-[15px] flex w-[200px] rounded-md'>
              <button onClick={event => closeLogoutPage()} className='text-3xl font-bold pl-[10px] pt-[7px]'>Logout
                <img className='w-[50px] h-[50px] ml-[30px] float-right' src='https://cdn-icons-png.flaticon.com/128/1828/1828479.png'></img></button>
            </button>
          </div>
        </div>
      </div>
      <div className='z-2'>
      <Footer />
      </div>
    </div>
  )
}

export default Homepage
