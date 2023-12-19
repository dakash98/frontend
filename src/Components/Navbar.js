import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        // <h1>This is Navbar...</h1>
        // < !--TW Elements is free under AGPL, with commercial license required for specific uses.See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
        // < !--Main navigation container-- >
        <div>
            <div className='sticky top-0 bg-slate-500 flex pl-[50px] py-10'>
                <div className='w-5/6 font-sans text-6xl font-bold py-4'>PadhaiPlanet</div>
                <div className='text-right flex'>
                    <Link to='/about-us' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> About Us</Link>
                    <Link to='/login' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Blogs</Link>
                    <Link to='/login' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Contact Us</Link>
                    <Link className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500 mr-[50px]'>Profile</Link>
                </div>
            </div>
            {/* <div>
                <nav aria-label="breadcrumb" className="w-max">
                    <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                        <li
                            className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
                            <a href="http://localhost:3000/" className="opacity-60">Home</a>
                        </li>
                    </ol>
                </nav>
            </div> */}
        </div>
    )
}

export default Navbar
