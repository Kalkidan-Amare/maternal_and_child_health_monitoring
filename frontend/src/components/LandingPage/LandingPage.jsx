import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Footer from './components/Footer'
import Chatbot from './ChatBox/Chatbot'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Testimonial/>
      <About/>
      <Footer/>
      <Chatbot/>
    </div>
  )
}

export default LandingPage