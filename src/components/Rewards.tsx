import { SignedIn } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./Button";

const Rewards = () => {
  return (
    <div className="px-20 w-full h-full text-primary-text bg-primary-rewards">
      <div className="flex flex-col justify-items items-center py-10 gap-3">
        <h1 className="font-main text-4xl">For Verified Users</h1>
        <div className="flex gap-5 font-bold justify-items items-center">
          <h2 className="font-main text-5xl">Get Up To</h2>
          <h2 className="text-primary-header font-main text-5xl">100 USDT</h2>
          <h2 className="font-main text-5xl">In Rewards</h2>
        </div>
        <SignedIn>
          <Button variant={"main"} size={"default"} className="p-5 text-3xl rounded-3xl font-main text-primary-color font-bold">Register Now</Button>
        </SignedIn>
      </div>
    </div>
  );
};

export default Rewards;
