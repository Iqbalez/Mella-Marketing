import React from 'react'
import videobg from '../assets/meeting.mp4'

const Hero = () => {
  return (
    <div className='w-full  relative scroll-smooth'>
    <video className='w-full object-cover  h-60 md:h-screen' src={videobg} autoPlay loop muted playsInline />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
  </div>
  )

  
}

export default Hero 