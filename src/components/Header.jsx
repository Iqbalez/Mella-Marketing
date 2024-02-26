import React from 'react'

const Header = () => {
  return (
    <div className='bg-neutral-900 md:pt-20 h-auto md:h-[250px] w-full pl-7 text-white flex flex-col text-left md:flex-row justify-between absolute z-10'>
  <div className="md:pl-6 md:pr-4 md:mb-4 flex flex-row ml-1 py-2">
  <h1 className='text-2xl md:text-3xl lg:text-4xl mb-2'>3500+</h1>
    <p className='text-sm md:text-base pl-8 pt-2 md:pr-0'>Users Active</p>
  
  </div>
  <div className="md:pl-6 md:pr-6 md:mb-4 flex flex-row py-2">
  <h1 className='text-2xl md:text-3xl lg:text-4xl mb-2'>250+</h1>
    <p className='text-sm md:text-base pl-12 md:pr-0'>Trusted By <br />Companies</p>
    
  </div>
  <div className="md:pl-6 md:pr-6 md:mb-4 flex flex-row mr-10 py-2">
  <h1 className='text-2xl md:text-3xl lg:text-4xl mb-2'>$230M+</h1>
    <p className='text-sm md:text-base pl-3 pt-2 md:pr-0'>Transactions</p>
    
  </div>
</div>
  )
}

export default Header
