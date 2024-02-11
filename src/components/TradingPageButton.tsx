import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { Button } from "./Button";
import { SlArrowRight } from "react-icons/sl";

const TradingPageButton = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary-rewards py-10 gap-2">
      <div className="flex flex-row justify-center pr-2 items-center gap-3 text-primary-text">
        <h1 className="font-main text-4xl font-bold font-heavy">
          TRADING PAGE . . .
        </h1>
        <a href="/tradingpage">
          <Button
            variant={"default"}
            size={"default"}
            className="bg-primary-header p-5 rounded-2xl"
          >
            <SlArrowRight />
          </Button>
        </a>
      </div>
      <SignedOut>
        <SignInButton>
          <Button
            variant={"default"}
            size={"default"}
            className="font-main bg-black text-primary-text p-3 px-7 font-bold rounded-2xl hover:bg-slate-500"
          >
            Sign Up First!
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default TradingPageButton;
