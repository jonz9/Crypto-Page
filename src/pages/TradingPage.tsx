import { useEffect, useState } from 'react';
import CryptoCurrencyTable from '../components/CryptoCurrencyTable';
import Navbar from '../components/Navbar';

const TradingPage = () => {
  const [dataSet, setDataSet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceUrl =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=CAD&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2";
        const response = await fetch(priceUrl);
        const data = await response.json();
        setDataSet(data);
      } catch (error) {
        console.log("Failed to retrieve data: ", error);
        setError("Failed to retrieve data. Please try again. ");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  console.log(dataSet);
  return (
    <div className="max-h-screen max-w-screen flex flex-col bg-primary-color">
      <Navbar />
      <CryptoCurrencyTable coin={dataSet} />
    </div>
  );
}

export default TradingPage