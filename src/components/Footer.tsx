import React from "react";

const Footer = () => {
  return (
    <div className="px-20 w-full h-full text-primary-text bg-primary-color ">
      <div className="mb-10 py-20 border-b-2 border-slate-700 flex-row justify-center items-center grid grid-cols-4">
        <ul className="font-main flex flex-col gap-2">
          <li className="font-bold pb-5 text-xl">About Us</li>
          <li className="">Business Contacts</li>
          <li className="">Careers</li>
          <li className="">Announcements</li>
          <li className="">News</li>
          <li className="">Press</li>
          <li className="">Legal</li>
          <li className="">Terms</li>
          <li className="">Privacy</li>
          <li className="">Blog</li>
        </ul>
        <ul className="font-main flex flex-col gap-2">
          <li className="font-bold pb-5 text-xl">Products</li>
          <li className="">Exchange</li>
          <li className="">Buy crypto</li>
          <li className="">Leveraged Tokens</li>
          <li className="">TradingView</li>
          <li className="">Pay</li>
          <li className="">Academy</li>
          <li className="">Live</li>
          <li className="">Tax</li>
          <li className="">Gift Card</li>
        </ul>
        <ul className="font-main flex flex-col gap-2">
          <li className="font-bold pb-5 text-xl">Learn</li>
          <li className="">Learn & Earn</li>
          <li className="">Browse crypto prices</li>
          <li className="">Bitcoin price</li>
          <li className="">Ethereum price</li>
          <li className="">Browse crypto price predictions</li>
          <li className="">Bitcoin price prediction</li>
          <li className="">Ethereum price prediction</li>
          <li className="">Listing Application</li>
          <li className="">Labs</li>
        </ul>
        <ul className="font-main flex flex-col gap-2">
          <li className="font-bold pb-5 text-xl">Support</li>
          <li className="">24/7 Chat Support</li>
          <li className="">Support Center</li>
          <li className="">Request a feature</li>
          <li className="">Fees</li>
          <li className="">APIs</li>
          <li className="">CryptoKet Verify</li>
          <li className="">Trading Rules</li>
          <li className="">CryptoKet Airdrop Portal</li>
          <li className="">Law Enforcement Requests</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
