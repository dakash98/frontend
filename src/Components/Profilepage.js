import React from 'react'
import { Link } from 'react-router-dom'

function Profilepage() {
    return (
        <div className='float-right h-[1350px] py-[50px] w-[30%] bg-stone-200'>
            <img className='w-[250px] h-[250px]' src='https://secdatacom.no/wp-content/uploads/sites/3/2019/10/blank-profile-male.jpg'></img>
            <br />
            <hr className='my-20px w-[500px] h-2 bg-green-500' />
            <br />
            <button className='bg-orange-300 ml-[50px] py-[15px] flex w-[200px] rounded-md'>
                <Link to='/' className='text-3xl font-bold pl-[10px]'>Logout
                    <img className='w-[50px] h-[50px] ml-[30px] float-right' src='https://cdn-icons-png.flaticon.com/128/1828/1828479.png'></img></Link>
            </button>
        </div>
    )
}

export default Profilepage
