import React, { useEffect, useState } from "react";
import Percentage from "./Percentage";
import Chart from "./Chart";
import { easeIn, motion } from "framer-motion";

interface Coin {
  id: string;
  market_cap_rank: number;
  image: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: number[];
}

interface Props {
  coin: Coin[];
}

const CryptoCurrencyTable: React.FC<Props> = ({ coin }) => {
  const [currencies, setCurrencies] = useState<Coin[]>([]);

  useEffect(() => {
    setCurrencies(coin);
  }, [coin]);

  function formatToCAD(val: number) {
    const formattedValue = val.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });
    return formattedValue.replace(".00", "");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="max-w-screen h-full flex flex-col justify-items items-center bg-primary-color p-20 gap-10">
      <div>
        <h1 className="font-main text-4xl font-bold text-primary-text underline">
          Top Cryptocurrency Prices by Market Cap
        </h1>
      </div>
      <div className="overflow-x-auto flex flex-col justify-center items-center">
        <table className="table-auto ">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: easeIn }}
          >
            <thead className="text-primary-header text-xl font-main">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Coin</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">1h</th>
                <th className="px-4 py-2">24h</th>
                <th className="px-4 py-2">7d</th>
                <th className="px-4 py-2">24 Volume</th>
                <th className="px-4 py-2">Market Cap</th>
                <th className="px-4 py-2">Last 7 Days</th>
              </tr>
            </thead>
            <tbody className="text-primary-text">
              {currencies.slice(0, 10).map((coin) => (
                <tr key={coin.id} className="odd:bg-gray-800">
                  <td className="border px-4 py-2">{coin.market_cap_rank}</td>
                  <td className="border px-4 py-2 flex h-52 items-center">
                    <img
                      src={coin.image}
                      alt={coin.symbol}
                      className="max-h-20 max-w-20 pl-2 pr-5"
                    />
                    <div>
                      <h3 className="font-bold ">{coin.name}</h3>
                      <small>{coin.symbol}</small>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    {formatToCAD(coin.current_price)}
                  </td>
                  <td className="border px-4 py-2">
                    <Percentage
                      coin={coin.price_change_percentage_1h_in_currency}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <Percentage
                      coin={coin.price_change_percentage_24h_in_currency}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <Percentage
                      coin={coin.price_change_percentage_7d_in_currency}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    {formatToCAD(coin.total_volume)}
                  </td>
                  <td className="border px-4 py-2">
                    {formatToCAD(coin.market_cap)}
                  </td>
                  <td className="border px-4 py-2">
                    <Chart
                      sparkline={coin.sparkline_in_7d}
                      priceChange={coin.price_change_percentage_7d_in_currency}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.main>
        </table>
        <ul className="p-2">
          {pageNumbers.map((number) => (
            <li key={number} className="">
              {/* <button className="bg-brown text-primary-header font-italic" onClick={setCurrentPage(number)}>number</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CryptoCurrencyTable;
