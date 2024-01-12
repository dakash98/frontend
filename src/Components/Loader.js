import React from 'react'
import loader from '../Static/Loader.gif'

function Loader() {
  return (
      <div className='bg-white bg-opacity-0 w-full h-screen'>
        <img className='xl:w-[250px] xl:h-[650px] lg:w-[250px] lg:h-[750px] md:w-[250px] md:h-[700px] sm:w-[100px] sm:h-[350px] w-[100px] h-[400px] xl:pt-[22%] lg:pt-[50%] md:pt-[50%] sm:pt-[50%] pt-[70%] inset-0 m-auto' src={loader} alt='Loading..' />
      </div>
  )
}

export default Loader
