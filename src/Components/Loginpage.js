import React from 'react'

function Loginpage() {
  return (
    <>
        <div className='text-center my-[12.25%] w-[40%] bg-teal-300 mx-[30%]'>
            <h1 className='text-4xl text-left py-[40px] pl-[100px]'>PadhaiPlanet</h1>

            <div>
                <input className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Name' required></input>
            </div>

            <div>
                <input className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Phone number' required></input>
            </div>

            <div>
                <input className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Email' required></input>
            </div>

            <div>
                <input className='mt-[50px] mb-[100px] px-[10px] w-[350px] h-[50px]' placeholder='Password' required></input>
            </div>

            <button className='mb-[100px] px-[10px] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Submit</button>

        </div>
    </>
  )
}

export default Loginpage
