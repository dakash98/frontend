import React from 'react'

export function Breadcrumbhome() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                    <li
                        className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold">
                        <p className="opacity-60">Home</p>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export function BreadcrumbHistory() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                    <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
                        <a href="http://localhost:3000/" className="opacity-60">Home</a>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
                        <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000"><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path><path fill="none" d="M0,0h24v24H0V0z"></path></svg>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
                        <p className="opacity-60 ">History</p>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export function BreadcrumbAboutUs() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                    <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
                        <a href="http://localhost:3000/" className="opacity-60">Home</a>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
                        <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000"><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path><path fill="none" d="M0,0h24v24H0V0z"></path></svg>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
                        <p className="opacity-60 ">About Us</p>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export function BreadcrumbProfile() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex flex-wrap items-center w-full py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                    <li className="flex items-center font-sans text-2xl antialiased pl-[50px] font-bold leading-normal transition-colors duration-300 cursor-pointer text-gray-800 hover:text-sky-300">
                        <a href="http://localhost:3000/" className="opacity-60">Home</a>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[12px] pt-[7.025px] font-bold">
                        <svg width="30" height="30" viewBox="0 0 27 27" fill="#00000"><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path><path fill="none" d="M0,0h24v24H0V0z"></path></svg>
                    </li>
                    <li className="flex items-center font-sans text-2xl antialiased pl-[11px] font-bold">
                        <p className="opacity-60 ">Profile</p>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

