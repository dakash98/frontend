import React from 'react'
import { Link } from 'react-router-dom'

function Profilepage() {

    function closeLogoutPage(event) {
        document.getElementById("gonow").classList.add("hidden");
        document.getElementById("profile").classList.add("hidden");
        document.getElementById("home").classList.remove("hidden");
      }

    return (
        <div
          id="gonow"
          className="absolute duration-700 top-0 right-0 w-[30%] z-1 hidden flex-col"
        >
          <div className="h-screen py-[50px] w-[100%] bg-sky-800">
            <img
              className="w-[250px] h-[250px]"
              src="https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg"
            ></img>
            <br />
            <hr className="my-20px w-[850px] h-2 bg-green-500" />
            <br />
            <button className="bg-orange-300 ml-[50px] py-[15px] flex w-[200px] rounded-md">
              <button
                onClick={(event) => closeLogoutPage()}
                className="text-3xl font-bold pl-[10px] pt-[7px]"
              >
                Logout
                <img
                  className="w-[50px] h-[50px] ml-[30px] float-right"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png"
                ></img>
              </button>
            </button>
          </div>
        </div>
    )
}

export default Profilepage
