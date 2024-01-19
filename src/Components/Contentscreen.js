import React from 'react'
import '../index.css';
// import style from './assets/style.css'


//React pdf Viewer

import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { RenderCurrentScaleProps } from '@react-pdf-viewer/zoom';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

function Contentscreen(props) {

  // const zoomPluginInstance = zoomPlugin();
  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;


  function closeQueWindow() {
    document.getElementById("que_paper_screen").classList.add('hidden');

  }




  // return (
  //   <>
      // <div className='h-[5%] xl:mr-[23%] lg:mr-[23%] md:mr-[10%] sm:mr-[9%] mr-[8%] float-right'><button className='bg-white rounded-full scale-130 hover:scale-150 duration-300' onClick={closeQueWindow}><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply" /></button></div>
      // <div>
      //   <div>

  // <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
  //   <div

  //     className='max-w-[50%] mt-[5%] ml-[25%] mt-[25px] text-center h-[1000px] overflow-scroll'
  //   >

  //     <Viewer className='' fileUrl={'https://padhai-planet.s3.ap-south-1.amazonaws.com/10/question_paper.pdf'} plugins={[zoomPluginInstance]} />
  //   </div>
  // </Worker>
  //       </div>
  //     </div>

  // const zoomPluginInstance = zoomPlugin();
  // const {CurrentScale, ZoomIn, ZoomOut} = zoomPluginInstance;

  return (

    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[80%] w-[90%] flex 2xl:ml-[25%] xl:ml-[25%] lg:ml-[15%] md:ml-[10%] sm:ml-[10%] ml-[5%] text-center'>
        <div
          // style={{
          //   alignItems: 'center',
          //   backgroundColor: '#eeeeee',
          //   borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   padding: '4px',
          //   width: '50%'
          // }}
          className='items-center bg-white flex p-[4px] 2xl:w-[20%] xl:w-[20%] lg:w-[50%] md:w-[50%] sm:w-[50%]'
        >
          <div style={{ padding: '0px 2px' }}>
            <ZoomOut>
              {(RenderZoomOutProps) => (
                <button
                  style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px'
                  }}
                  onClick={RenderZoomOutProps.onClick}
                >
                  Zoom out
                </button>
              )}
            </ZoomOut>
          </div>
          <div style={{ padding: '0px 2px' }}>
            <CurrentScale>
              {(RenderCurrentScaleProps) => <>{`${Math.round(RenderCurrentScaleProps.scale * 100)}%`}</>}
            </CurrentScale>
          </div>
          <div style={{ padding: '0px 2px' }}>
            <ZoomIn>
              {(RenderZoomInProps) => (
                <button
                  style={{
                    backgroundColor: '#357edd',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                  onClick={RenderZoomInProps.onClick}
                >
                  Zoom in
                </button>
              )}
            </ZoomIn>
          </div>
        </div>
        <div className='h-[5%] 2xl:ml-[49%] xl:ml-[47%] lg:ml-[47%] md:ml-[47%] sm:ml-[47%] ml-[38%] float-right'><button className='bg-white rounded-full scale-130 hover:scale-150 duration-300' onClick={closeQueWindow}><img className='text-white' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply" /></button></div>
      </div>
      
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div

            className='max-w-[100%] 2xl:w-[50%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[100%] 2xl:ml-[25%] xl:ml-[25%] lg:ml-[15%] md:ml-[10%] sm:ml-[10%] sm:mr-[10%] ml-[5%] mr-[5%] text-center h-[1000px] overflow-scroll'
          >

            <Viewer  fileUrl={'https://padhai-planet.s3.ap-south-1.amazonaws.com/10/question_paper.pdf'} plugins={[zoomPluginInstance]} />
          </div>
        </Worker>
      </div>
    </div>
  );


}

export default Contentscreen