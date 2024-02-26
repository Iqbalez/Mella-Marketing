import React from 'react'

const About = () => {
  return (
    <section>
    <div className='container flex flex-col px-4 mx-auto space-y-12 mt-64 mb-40 md:space-y-0 md:flex-row scroll-smooth bg-neutral-50'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
       <h3 className='max-w-md text-3xl text-center md:text-left'>
        Focus on the bussiness We 
       will manage the money! </h3>
       <p className='max-w-sm text-center text-darkGrayisBlue md:text-left'>At Mella, we redefine 
       marketing. Our strategies go beyond boundaries, ensuring your brand not only stands o
       ut but dominates the market. Discover a new era of business success.</p>
       <div className='mt-11 flex justify-center items-center'>
       
        <button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-yellow-400 rounded-full text-white border-yellow-400 hover:bg-yellow-300 '>
        Get Started
       </button>
       </div>
        </div>
        <div className='flex flex-col space-y-8 md:w-1/2'>
           <div className='flex flex-col space-y-3 md:space-x-6 md:flex-row'>
             <div className='rounded-l-full bg-white py-3 md:bg-transparent'>
               <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
              01
                  </div>
                  <h3 className='text-base md:mb-4 md:hidden'>
                     Rewared

                  </h3>
               </div>
             </div>
             <div>
                <h3 className='hidden mb-4 text-lg md:block'>
         Reward
                </h3>
                <p className='text-darkGrayishBlue'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere alias repellat quae! Possimus, fugit.
                    </p>
             </div>
           </div>

           <div className='flex flex-col space-y-3 md:space-x-6 md:flex-row'>
             <div className='rounded-l-full bg-white py-3 md:bg-transparent'>
               <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-black rounded-full  md:py-1 bg-brightRed'>
              02
                  </div>
                  <h3 className='text-base md:mb-4 md:hidden'>
                     100% Secured

                  </h3>
               </div>
             </div>
             <div>
                <h3 className='hidden mb-4 text-lg md:block'>
                100% Secured
                </h3>
                <p className='text-darkGrayishBlue'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit obcaecati cumque dignissimos, voluptate inventore nesciunt!

                    </p>
             </div>
           </div>
           <div className='flex flex-col space-y-3 md:space-x-6 md:flex-row'>
             <div className='rounded-l-full bg-white py-3 md:bg-transparent'>
               <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-black rounded-full md:py-1 bg-brightRed'>
              03
                  </div>
                  <h3 className='text-base md:mb-4 md:hidden'>
                     Balance Transfer

                  </h3>
               </div>
             </div>
             <div>
                <h3 className='hidden mb-4 text-lg md:block'>
                Balance Transfer
                </h3>
                <p className='text-darkGrayishBlue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus quasi ea, impedit ad eligendi?

                    </p>
             </div>
           </div>
        </div>
    </div>
    </section>
  )
}

export default About