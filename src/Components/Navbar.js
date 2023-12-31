import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



function Navbar() {
    const navigate = useNavigate();

    const redirectToProfilePage = () => {
      navigate('/profile'); 
    };

    return (

        <div className='flex'>
            <div className="flex w-[50%] mr-15% font-sans text-white text-6xl font-bold py-4">
                PadhaiPlanet
            </div>
            <div className="text-right flex pl-[42%]">
                <Link
                    to="/about-us"
                    className="btn float-right font-medium font-sans text-white w-40 text-2xl text-center pt-[32px]"
                >
                    {" "}
                    About Us
                </Link>
                <Link
                    to="/blogs"
                    className="inline-block bg-gradient-to-r from-red-800 to-purple-200 text-transparent bg-clip-text btn float-left font-medium font-sans text-white w-40 text-2xl text-center pt-[32px] hover:bg-green-500"
                >
                    {" "}
                    Blogs
                </Link>
                <Link
                    to="/contact-us"
                    className="btn float-left font-medium font-sans text-white w-40 text-2xl text-center pt-[32px] "
                >
                    {" "}
                    Contact Us
                </Link>
                <button
                    className="btn float-left font-medium font-sans text-white w-40 text-2xl text-center"
                    onClick={redirectToProfilePage}
                >
                    Login
                </button>
            </div>

        </div>
    )
}

export default Navbar;
