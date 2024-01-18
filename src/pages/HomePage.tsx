import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CompanyInfo from '../components/CompanyInfo'
import FAQ from '../components/FAQ'
import Rewards from '../components/Rewards'

const HomePage = () => {
  return (
    <div className="max-h-screen max-w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col max-w-screen bg-primary-color">
        <Hero />
        <CompanyInfo />
        <Rewards />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage