import React from 'react'

function Contentscreen(props) {

  function closeQueWindow() {
    document.getElementById("que_paper_screen").classList.add('hidden');
  }

  return (
    <>
      <div className='w-100% h-[5%] mr-[23%] float-right'><button className='bg-white rounded-full scale-130 hover:scale-150 duration-300' onClick={closeQueWindow}><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply"/></button></div>
      <div className='bg-orange-400 w-[50%] mt-[5%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'>
        <div><iframe className='w-[100%] h-screen' src={props.q_data} />
        </div>
      </div>
    </>
  )
}

export default Contentscreen
