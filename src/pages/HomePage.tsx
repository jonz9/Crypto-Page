import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CompanyInfo from "../components/CompanyInfo";
import FAQ from "../components/FAQ";
import Rewards from "../components/Rewards";
import End from "../components/End";
import TradingPageButton from "../components/TradingPageButton";
import { easeIn, motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="h-fit max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: easeIn }}
      >
        <Hero />
        <CompanyInfo />
        <Rewards />
        <FAQ />
        <TradingPageButton />
        <Footer />
        <End />
      </motion.main>
    </div>
  );
};

export default HomePage;
