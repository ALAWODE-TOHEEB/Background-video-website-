import React, {useRef, useState } from 'react';
import heroVideo from '../assests/heroVideo.mp4';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import GradientBtn from './GradientBtn';



const HeroSection = ( {isMenushown}) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const videoRef = useRef();

    const handleVideoPause =() => {
        videoRef.current.pause()
        setIsVideoPlaying(false)
    }
    const handleVideoPlay =() => {
        videoRef.current.play()
        setIsVideoPlaying(true)
    }

  return (
    <div className='flex items-end justify-center w-full h-screen text-center id="hero"'>
      <video ref={videoRef} src={heroVideo} autoPlay loop muted
      className='object-cover h-full w-full absolute -z-10'/>

      <div className={`p-8 flex flex-col items-center justify-center duration-500 ${isVideoPlaying ? "" : "bg-black/80"} ${isMenushown ? "opacity-10" : "opacity-100"}`}>
        <h1 className='text-5xl lg:text-7xl'>Welcome</h1>
        <h1 className='text-5xl lg:text-7xl capitalize mb-12'> to the <span className='text-thBlue font-bold'>future</span></h1>
      <div className='flex flex-row justify-center items-center'>
        <GradientBtn className="capitalize" title="get use"/>
        <GradientBtn className="capitalize mx-12" title="products"/>

        {isVideoPlaying ? (
            <FaPauseCircle onClick={handleVideoPause} size={30} className="cursor-pointer hover:scale-110 duration-200 text-thBlue"/>
        ) : (
            <FaPlayCircle onClick={handleVideoPlay} size={30} className="cursor-pointer hover:scale-110 duration-200 text-thBlue"/>
        )}
      </div>

    </div>
  </div>
  )
}

export default HeroSection