import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='max-h-screen max-w-screen flex flex-col'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default HomePage