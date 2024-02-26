import React from 'react'
import Apple from '../assets/apple.png'
import Playstore from '../assets/playstore.png'
import Newimg from '../assets/newimg.jpg'

const Master = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-neutral-900 max-w-full scroll-smooth border-t-8">
    <div className="grid gap-6 md:grid-cols-2">
      <img src={Newimg} className="max-w-full h-auto md:h-[500px] mt-28 rounded-lg z-10" alt="Image" />
      <div className="md:order-2"></div>
      <div className="md:order-1 mt-6 md:mt-36">
        <h2 className="text-3xl text-white font-bold mb-4">Master billing and Invoicing with ease.</h2>
        <p className="text-gray-400 mb-4">
          With Mella, transparency meets efficiency. Our billing process is seamless, providing you with clarity and confidence. No hidden costs, just straightforward excellence.
        </p>
        <div className="flex flex-col md:flex-row">
          <button className="items-center justify-center bg-gray-900 h-14 w-full md:w-40 text-white rounded-lg mb-4 md:mb-0 md:mr-8">
            <p>Get It On</p>
            <h3 className="pb-3">App Store</h3>
          </button>
          <button className="items-center justify-center bg-gray-900 h-14 w-full md:w-40 text-white rounded-lg">
            <p>Download on the</p>
            <h3 className="pb-3">Google Play</h3>
          </button>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Master