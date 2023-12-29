import React from 'react'
import loader from '../Static/Loader.gif'

function Loader() {
  return (
      <div className='bg-white bg-opacity-10 w-full h-screen'>
        <img className='w-[75%] h-[80%] pl-[25%] pt-[12.5%]' src={loader} alt='Loading..' />
      </div>
  )
}

export default Loader
