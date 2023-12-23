import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        
        <div>
            <div className='sticky top-0 bg-slate-500 flex pl-[50px] py-10'>
                <div className='w-5/6 font-sans text-6xl font-bold py-4'>PadhaiPlanet</div>
                <div className='text-right flex'>
                    <Link to='/about-us' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> About Us</Link>
                    <Link to='/blogs' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Blogs</Link>
                    <Link to='/login' className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500'> Contact Us</Link>
                    <Link className='btn float-left bg-amber-400 w-40 text-xl text-center pt-[32px] hover:bg-green-500 mr-[50px]'>Profile</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
