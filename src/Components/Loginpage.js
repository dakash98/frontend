import React from 'react'

function Loginpage() {
    return (
        <>
            <form>
                <div className='text-center w-[40%] bg-teal-300 mx-[30%]'>
                    <h1 className='text-4xl text-left py-[40px] pl-[100px]'>PadhaiPlanet</h1>

                    <div>
                        <input type='text' className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Name' required></input>
                    </div>

                    <div>
                        <input type='text' pattern="[7-9]{1}[0-9]{9}" maxLength="10" className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Phone number' required></input>
                    </div>

                    <div>
                        <input type='email' className='mt-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Email' required></input>
                    </div>

                    <div>
                        <input type='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='mt-[50px] mb-[50px] px-[10px] w-[350px] h-[50px]' placeholder='Password' required></input>
                    </div>

                    <div className='text-left italic pl-[135px] text-xl'>Password instructions: <hr className='w-[200px] h-1 bg-violet-900 border-0 rounded  dark:bg-gray-700'/>
                        <ol>
                            <li>Password must contain a Capital letter.</li>
                            <li>Password must contain a small letter.</li>
                            <li> Password must contain a character.(eg. @)</li>
                            <li>Password must contain a digit.</li>
                        </ol>
                    </div>

                    <button className='mb-[100px] mt-[50px] px-[10px] w-[150px] h-[50px] bg-cyan-500 text-xl' type='submit'>Submit</button>

                </div>
            </form>
        </>
    )
}

export default Loginpage
