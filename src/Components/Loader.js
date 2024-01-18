import React from 'react'
import loader from '../Static/website-loader.gif'

function Loader() {
  return (
      <div className='bg-white bg-opacity-0 w-full h-screen'>
        <img className='xl:w-[200px] xl:h-[300px] 2xl:w-[350px] 2xl:h-[450px] lg:w-[350px] lg:h-[450px] md:w-[400px] md:h-[500px] sm:w-[300px] sm:h-[350px] w-[450px] h-[350px] xl:pt-[22%] lg:pt-[40%] md:pt-[50%] sm:pt-[50%] pt-[60%] inset-0 m-auto' src={loader} alt='Loading..' />
      </div>
  )
}

export default Loader
