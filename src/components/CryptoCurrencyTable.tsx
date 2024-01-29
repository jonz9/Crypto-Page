import React, { useState } from "react";
import Percentage from "./Percentage";
import Chart from "./Chart";

interface Coin {
  id: string;
  market_cap_rank: number;
  image: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7dh_in_currency: number;
  total_volume: number;
  market_cap: number;
  sparkline_in_7d: number[];
}

interface Props {
  coin: Coin[];
}

const CryptoCurrencyTable: React.FC<Props> = (coin) => {
  const [currencies, setCurrencies] = useState<Coin[]>(coin);

  function formatToCAD(val: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; }) => any; }) {
    const formattedValue = val.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });
    const trimmedValue = formattedValue.replace(".00", "");
    return trimmedValue;
  }

  return (
    <div className="max-w-screen h-full flex flex-col justify-items items-center bg-primary-color p-20 gap-10 font-main">
      <div className="text-4xl font-bold text-primary-text">
        <h1>Top Cryptocurrency Prices by Market Cap</h1>
      </div>
      <table>
        <thead>
          <tr className="flex gap-10 text-xl text-primary-header underline">
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24 Volume</th>
            <th>Market Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div>
                  <img src={coin.image} alt={coin.symbol} />
                  <h4>{coin.name}</h4>
                  <small>{coin.symbol}</small>
                </div>
              </td>
              <td>{formatToCAD(coin.current_price)}</td>
              <Percentage coin={coin.price_change_percentage_1h_in_currency} />
              <Percentage coin={coin.price_change_percentage_24h_in_currency} />
              <Percentage coin={coin.price_change_percentage_7dh_in_currency} />
              <td>{formatToCAD(coin.total_volume)}</td>
              <td>{formatToCAD(coin.market_cap)}</td>
              <td>
                <Chart
                  sparkline={coin.sparkline_in_7d}
                  priceChange={coin.price_change_percentage_7dh_in_currency}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoCurrencyTable;
