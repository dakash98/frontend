import React from 'react'
import {Link} from 'react-router-dom'

function Exploremore() {
  return (
    <div className='w-[50%] ml-[37.5%] mt-[150px]'>
      <h2 className='text-2xl mb-[30px] font-semibold'>Explore more question papers</h2>
      <div className='flex my-[10px]'>
        <Link className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl text-center pt-[17.5px]'>Mathematics</Link>
        <Link to={'/history'} className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl ml-[50px] text-center pt-[17.5px]'>History</Link>
      </div>
      <div className='flex my-[10px]'>
        <Link className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl text-center pt-[17.5px]'>Geography</Link>
        <Link className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl ml-[50px] text-center pt-[17.5px]'>Science1</Link>
      </div>
      <div className='flex mt-[10px]'>
        <Link className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl text-center pt-[17.5px]'>English</Link>
        <Link className='w-[200px] h-[70px] bg-blue-600 rounded-xl text-xl ml-[50px] text-center pt-[17.5px]'>Sanskrit</Link>
      </div>
    </div>
  )
}

export default Exploremore
