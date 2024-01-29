import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

const TradingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceUrl =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2";
        const response = await fetch(priceUrl);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to retrieve data: " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-h-screen max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <CryptoCurrencyTable />
    </div>
  );
}

export default TradingPage