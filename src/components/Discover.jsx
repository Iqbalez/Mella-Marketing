import React from 'react'
import Newimg from '../assets/newimg.jpg'
const Discover = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 scroll-smooth">
    <div className="grid gap-6 md:grid-cols-2 ">
      <div className="md:order-2">
        <img src={Newimg} className="max-w-full h-auto md:h-[500px] rounded-lg mt-6 md:mt-28" alt="Image" />
      </div>
      <div className="md:order-1 mt-6 md:mt-36">
        <h2 className="text-3xl font-bold mb-4">Discover an exceptional card deal in just a few simple steps.</h2>
        <p className="text-gray-700 mb-4">
          Unleash the power of our exclusive Card Deal. Elevate your marketing game with a handpicked selection of strategies tailored just for you. It's not just a deal; it's a game-changer.
        </p>
        <div className='flex justify-center items-center'>
        <button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-yellow-400 rounded-full text-white border-yellow-400 hover:bg-yellow-300'>
          Get Started
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Discover