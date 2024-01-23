import React from 'react'

const FAQ = () => {
  return (
    <div className="py-10 px-20 w-full h-full text-primary-text bg-primary-color">
      <div className="my-20 flex flex-col justify-items items-center">
        <h1 className="font-main text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="px-20 py-10">
          <ul className="list-decimal">
            <li className="odd-child">
              <h1>What is a cryptocurrency exchange?</h1>
              <p></p>
            </li>
            <li className="even-child">
              <h1>What products does CryptoKet provide?</h1>
              <p></p>
            </li>
            <li className="odd-child">
              <h1>How to buy Bitcoin and other cryptocurrencies on CryptoKet?</h1>
              <p></p>
            </li>
            <li className="even-child">
              <h1>How to track cryptocurrencies?</h1>
              <p></p>
            </li>
            <li className="odd-child">
              <h1>How to trade cryptocurrencies on CryptoKet</h1>
              <p></p>
            </li>
            <li className="even-child">
              <h1>How to earn from crypto on CryptoKet</h1>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ