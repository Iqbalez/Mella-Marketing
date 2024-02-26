import React from 'react'
import Logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
          <img src={Logo} className="w-7 h-7" />
            <h3 className="text-xl font-bold text-white mb-4">Mella Marketing</h3>
            
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul className="text-white" >
              <li>Content</li>
              <li>How it works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <ul className="text-white">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestion</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Partner</h3>
            <ul className="text-white">
              <li>Our Partner</li>
              <li>Become a partner</li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer