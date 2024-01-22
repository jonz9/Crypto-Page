import React from 'react'
import { Cryptocurrency } from "../assets/Cryptocurrency.png";

const CompanyInfo = () => {
  return (
    <div className="py-10 px-20 w-full max-h-screen text-primary-text">
      <div className="flex flex-col border-t-2 border-slate-700 justify-items items-center">
        <img src={Cryptocurrency} alt='crypto' />
      </div>
    </div>
  );
}

export default CompanyInfo