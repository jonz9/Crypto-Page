import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CompanyInfo from "../components/CompanyInfo";
import FAQ from "../components/FAQ";
import Rewards from "../components/Rewards";
import End from "../components/End";

const HomePage = () => {
  return (
    <div className="max-h-screen max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <Rewards />
      <FAQ />
      <Footer />
      <End />
    </div>
  );
};

export default HomePage;
