import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CompanyInfo from "../components/CompanyInfo";
import FAQ from "../components/FAQ";
import Rewards from "../components/Rewards";

const HomePage = () => {
  return (
    <div className="max-h-screen max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <Rewards />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
