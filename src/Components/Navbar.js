import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    function openLogoutPage(event) {
        document.getElementById("gonow").classList.remove("hidden");
        document.getElementById("home").classList.add("hidden");
        document.getElementById("profile").classList.remove("hidden");
    }


    return (

        <div className='flex'>
            <div className="flex w-[50%] mr-[15%] font-sans text-white text-6xl font-bold py-4">
                PadhaiPlanet
            </div>
            <div className="text-right flex pl-72">
                <Link
                    to="/about-us"
                    className="gradient-text btn float-right font-medium font-sans text-white w-40 text-2xl text-center pt-[32px]"
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
                    to="/login"
                    className="btn float-left font-medium font-sans text-white w-40 text-2xl text-center pt-[32px] hover:bg-green-500"
                >
                    {" "}
                    Contact Us
                </Link>
                <button
                    onClick={(event) => openLogoutPage()}
                    className="btn float-left font-medium font-sans text-white w-40 text-2xl text-center hover:bg-green-500 mr-[50px]"
                >
                    Profile
                </button>
            </div>

        </div>
    )
}

export default Navbar
