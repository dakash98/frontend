import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BreadcrumbHistory } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import Exploremore from './Exploremore'

function Historypapers() {

  function HandleClick(item) {
    if(item === "bad"){
      document.getElementById("pop").classList.remove('hidden');
      document.getElementById("pop").classList.add('opacity-90');
    }
    else{
      document.getElementById("popgood").classList.remove('hidden');
    }
  }

  function dataAgaya() {
    document.getElementById("pop").classList.add('hidden');
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
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>2022</div>
              <div className='flex'>
                <button onClick={event => HandleClick("bad")} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button onClick={event => HandleClick("good")} type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
            <div className='w-[50%] ml-[25%] mt-[40px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>2021</div>
              <div className='flex'>
                <button type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
            <div className='w-[50%] ml-[25%] mt-[40px]'>
              <div className='w-[100px] h-[50px] text-center pt-[12.5px] text-xl font-semibold bg-amber-400'>2020</div>
              <div className='flex'>
                <button type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600'>Histroy Q Paper</button>
                <button type='submit' className='w-[250px] text-white h-[100px] text-center font-medium mt-[50px] bg-lime-600 ml-[120px]'>Histroy Q Paper</button>
              </div>
            </div>
          </div>
        </div>


        <div id="pop" className='absolute top-0 w-full hidden pb-[20px]'>
          <form>
            <div className='text-center w-[40%] bg-teal-300 mx-[30%]'>
              <h1 className='text-4xl text-left py-[40px] pl-[100px]'>PadhaiPlanet</h1>

              <div>
                <input type='text' className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Name' required></input>
              </div>

              <div>
                <input type='text' pattern="[7-9]{1}[0-9]{9}" maxLength="10" className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Phone number' required></input>
              </div>

              <div>
                <input type='email' className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Email' required></input>
              </div>

              <div>
                <input type='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='mt-[50px] mb-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Password' required></input>
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
              <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 hidden text-xl' onClick={event => dataAgaya()} type='submit'></button>

            </div>
          </form>
        </div>

        <div id="popgood" className='absolute top-0 w-full hidden pb-[20px]'>
          <div className='bg-orange-400 w-[50%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'>
            <div>Home
              <Footer />
              <Footer />
              <Footer />
              <Footer />
              <Footer />
              <Footer />
              <Footer />
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

    </div>
  )
}

export default Historypapers
