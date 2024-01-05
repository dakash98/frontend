import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();

    const API_config = 'https://padhaiplanet-backend.onrender.com/v1/config';
  
    const [subject, setSubject] = useState([]);
  
    function handleClick(user_selected_option) {
    const page_mapping = {
      'english': '/english-question-papers-10th-ssc',
      'hindi_full':'/hindi-full-question-papers-10th-ssc',
      'hindi_half':'/hindi-half-question-papers-10th-ssc',
      'sanskrit_full':'/sanskrit-full-question-papers-10th-ssc',
      'sanskrit_half':'/sanskrit-half-question-papers-10th-ssc',
      'marathi':'/marathi-question-papers-10th-ssc',
      'history_and_political_science':'/history-and-political-science-question-papers-10th-ssc',
      'geography':'/geography-question-papers-10th-ssc',
      'math_1':'/math-1-question-papers-10th-ssc',
      'math_2':'/math-2-question-papers-10th-ssc',
      'science_1':'/science-1-question-papers-10th-ssc',
      'science_2':'/science-2-question-papers-10th-ssc',
    }
  
    navigate(page_mapping[user_selected_option]);
  }
  
    const fetchdata = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setSubject(data.data.subject)
  
      } catch (e) {
        console.log(e)
      }
    }
  
    useEffect(() => {
      fetchdata(API_config);
    }, [])
  
    const redirectHome = () => {
      navigate('/');
    }


    return (
        <>
            <div className='flex flex-wrap'>

            <div class="bg-gray-900">
  <footer class="mx-auto max-w-screen-3xl px-4 md:px-8">
    <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
      <div class="col-span-full lg:col-span-2">
        {/* <!-- logo - start --> */}
        <div class="mb-4 lg:-mt-2">
          <button onClick={event => (redirectHome())} class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>

            PadhaiPlanet
          </button>
        </div>
        {/* <!-- logo - end --> */}

        <p class="mb-6 text-gray-400 sm:pr-8">One vision, one mission, question papers at single station. One vision, one mission, question papers at single station.</p>

        {/* <!-- social - start --> */}
        <div class="flex gap-4">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        {/* <!-- social - end --> */}
      </div>

      {/* <!-- nav - start --> */}
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Products</div>

        <nav class="flex flex-col gap-4">
          <div>
          {subject.map((subjects) =>
                    <ol className='pt-4  text-left text-gray-400 hover:text-indigo-500 active:text-indigo-600'>
                        <button onClick={event => {handleClick(subjects.key)}} className='' key={subjects.key}>{subjects.value} SSC</button>
                    </ol>)}
          </div>

          {/* <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
          </div> */}
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About Us</a>
          </div>

          {/* <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
          </div> */}

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blogs</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact Us</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Legal</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}
    </div>

    <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2024 - Present PadhaiPlanet. All rights reserved.</div>
  </footer>
</div>




                {/* <div className='w-1/3 bg-neutral-500 text-center pt-[20px]'>
                    <div className='text-xl py-[10px] text-white'>PadhaiPlanet</div>
                    <div className='text-xl py-[10px] text-white'>Company</div>
                    <div className='text-lg py-[10px] text-white'>About Us</div>
                    <div className='text-lg py-[10px] text-white'>Blogs</div>
                </div>
                
                <div className='w-1/3 bg-neutral-500'>
                    <div className='text-xl pt-[20px] text-center text-white'></div>
                </div>

                <div className='w-1/3 flex-wrap pb-[2.5%] bg-neutral-500 text-white'>
                    <div className='text-center text-xl pt-[20px]'>Our Products</div>
                    {subject.map((subjects) =>
                    <ol className='pt-4 text-center'>
                        <button onClick={event => {handleClick(subjects.key)}} className='' key={subjects.key}>{subjects.value} SSC</button>
                    </ol>)}
                </div> */}

            </div>

                {/* Twitter Icon

                <svg className='inline-flex mx-[15px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg> */}

                {/* Telegram icon */}

                {/* <svg className='inline-flex mx-[15px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
                </svg> */}

                {/* WhatsApp icon */}

                {/* <svg className='inline-flex mx-[15px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                </svg> */}

                {/* Youtube icon */}

                {/* <svg className='inline-flex mx-[15px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
                </svg> */}
        </>

    )
}

export default Footer
