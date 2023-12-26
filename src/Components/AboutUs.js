import React from 'react'
import Navbar from './Navbar'
import { BreadcrumbAboutUs, BreadcrumbProfile } from './Breadcrumbs'
import Joiningoptions from './Joiningoptions'
import Footer from './Footer'
import Profilepage from './Profilepage'

function AboutUs() {
    return (
        <div>
            <div className="sticky top-0 flex pl-[50px] pt-10 z-10">
                <Navbar />
            </div>
            <div className="relative z-0">
                <div>
                    <div id="home">
                        <BreadcrumbAboutUs />
                    </div>
                    <div id="profile" className="hidden">
                        <BreadcrumbProfile />
                    </div>

                    <div className='w-[50%] h-fitml-[25%] ml-[25%]'>
                        <div className='flex px-[40px]'>
                            <img src='https://tse4.mm.bing.net/th?id=OIP.ClbZyBm2AulCsUHzVb0VuAHaE7&pid=Api&P=0&h=180' className='w-[500px]'></img>
                            <p className='w-[500px] mx-[50px] break-words'>kdvksbvkhsbdvksbvkjdbvksbvksbdvsblkdvbskdvbskdjvbksdbvjsbdvbsdjvbjsdbvksbvksdbvksjdbvssbskdbvksjdvbksjdbvksjbvksdbvkjsdbvkjsbdvkjbsdkvjbskdjbvsjkdbvksjdbvksjdvksdbv</p>
                        </div>

                        <div className='flex px-[40px] mt-[50px]'>
                            <p className='w-[500px] mx-[50px] break-words'>kdvksbvkhsbdvksbvkjdbvksbvksbdvsblkdvbskdvbskdjvbksdbvjsbdvbsdjvbjsdbvksbvksdbvksjdbvssbskdbvksjdvbksjdbvksjbvksdbvkjsdbvkjsbdvkjbsdkvjbskdjbvsjkdbvksjdbvksjdvksdbv</p>
                            <img src='https://tse4.mm.bing.net/th?id=OIP.ClbZyBm2AulCsUHzVb0VuAHaE7&pid=Api&P=0&h=180' className='w-[500px]'></img>
                        </div>

                    </div>
                    <div className='mt-[75px]'>
                        <Joiningoptions />
                    </div>
                    <Profilepage />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
