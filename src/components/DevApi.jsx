import React from 'react';
import PageSection from './PageSection';
import robotics from '../assests/robotics.jpg';

const DevApi = (props) => {
  return (
    <div id={props.id}>
        <PageSection name="developer API" title="Developer API" subtitle="Implementation of our Developer APIs to build on the platform that sellers trust."/>
     <div className='flex flex-col lg:flex-row items-center justify-center gap-8 px-4'>

        <div className='flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg '>
            <p className='border-l-4 pl-4 border-thOrange'>Technology is our new present and future, making human lives easier and more convenient.</p>
            <p className='border-l-4 pl-4 border-thBlue'>With new technological innovations, human beings have becoming more productive.</p>
            <p className='border-l-4 pl-4 border-thOrange'>We need technology for all our activities and have become an integral part of our lives.</p>
            <p className='border-l-4 pl-4 border-thBlue'>Technology plays a crucial role in our every day life</p>
        </div>
        <div className='w-full lg:w-1/2 lg:rotate-6 hover:rotate-0 duration-300 flex justify-center'>
            <img src={robotics} alt="codeContact" className='rounded-lg shadow-lg shadow-thBlue'/>

        </div>
     </div>
    </div>
  )
}

export default DevApi