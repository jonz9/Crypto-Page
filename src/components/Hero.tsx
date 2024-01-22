import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./Button";

const Hero = () => {
  return (
    <div className="flex text-primary-text h-full max-w-screen justify-center items-center bg-primary-color">
      <div className="flex flex-col py-40 px-20 pl-40 w-full border-r-2 border-slate-700 justify-center items-start gap-8">
        <h1 className="font-main font-bold text-7xl">BUY. SELL. TRADE. TRUST.</h1>
        <h2 className="font-main text-2xl">
          CryptoKet is the safest place to buy, sell, and manage crypto.
          Canadian users can now add cash for free with Interac e-Transfer.
        </h2>
        <div className="flex gap-5">
          <SignInButton>
            <Button variant={"main"} size={"default"} className="font-main font-bold text-xl text-black rounded-2xl">
              Get Started
            </Button>
          </SignInButton>
          <SignInButton>
            <Button variant={"default"} size={"default"} className="font-main">
              Sign Up
            </Button>
          </SignInButton>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <h1>second half</h1>
      </div>
    </div>
  );
};

export default Hero;
