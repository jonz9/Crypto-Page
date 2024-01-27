import React from 'react'
import Navbar from '../components/Navbar';
import CryptoCurrencyTable from '../components/CryptoCurrencyTable';

const TradingPage = () => {
  return (
    <div className="max-h-screen max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <CryptoCurrencyTable />
    </div>
  );
}

export default TradingPage