import React, { useState } from 'react'
import logo1 from '../assets/logo.svg'


const Navbar = () => {
  const[nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return(
    <div className='flex w-full justify-between md:h-20 h-full  absolute z-10 md:mt-12 mt-6'>
       
     <div className='md:ml-16 ml-8 flex '>
      <img src={logo1} className='h-7 w-8 md:mr-3 mr-2 md:mt-2 '/>
      <h1 onClick={handleNav} className={logo ? 'hidden': 'block'} >Mella</h1>
      
     </div>
    
     <ul className='hidden md:flex mr-16'>
      <li><a href='#'>Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Cients</a></li>
     </ul> 
    
     <div onClick={handleNav} className='md:hidden cursor-pointer z-10 md:mr-4 mr-5'>
      {nav ? <ion-icon size={20}  name="close-outline"></ion-icon>: <ion-icon size={20} name="menu-outline" ></ion-icon>}
     </div>
     <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full bg-gray-100/90 px-2 flex flex-col" : "absolute left-[-100%]"}>
     <h1 >Mella</h1>
      <ul className='h-40'>
        
      <li><a>Home</a></li>
      <li><a>Features</a></li>
      <li><a >Products</a></li>
      <li><a>Clients</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
