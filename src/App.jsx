import React from 'react'
import Navbar  from './components/Navbar'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Master from './components/Master'
import Discover from './components/Discover'
import Testimonials from './components/Testimonial'
import Last from './components/Last'
import Footer from './components/Footer'
import Down from './components/Down'


const App = () => {
  return (
    
    <div>
       <Navbar />
      <Hero />
       <Header />
       <About />
       <Master />
       <Discover />
       <Testimonials />
       <Last />
     <Footer />
     <Down />

    </div>
  )
}

export default App