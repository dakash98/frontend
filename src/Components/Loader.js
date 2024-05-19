import React from 'react'
// import loader from '../Static/website-loader.gif'
import HashLoader from 'react-spinners/HashLoader';
// HashLoader

function Loader() {
  return (
    <div className='bg-white bg-opacity-0 w-full h-screen flex justify-center items-center'>
    <HashLoader color={"#DAFF33 "} size={120} />
  </div>
  )
}

export default Loader
