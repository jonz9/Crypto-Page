import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "./Button";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { easeIn, motion } from "framer-motion";
import { useState } from "react";

const TradingPageButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const ifClicked: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-primary-rewards py-10 gap-2">
      <div className="flex flex-row justify-center pr-1 items-center gap-3 text-primary-text">
        <h1 className="font-main text-4xl font-bold font-heavy">
          TRADING PAGE . . .
        </h1>
        <SignedIn>
          <a href="/tradingpage">
            <motion.button
              className="bg-primary-header p-5 rounded-2xl"
              whileHover={{ scale: 1.1, rotate: 180, transition: easeIn }}
              whileTap={{
                scale: 0.8,
                borderRadius: "60%",
                transition: easeIn,
              }}
            >
              <SlArrowLeft />
            </motion.button>
          </a>
        </SignedIn>
        <SignedOut>
          <Button
            variant={"default"}
            size={"default"}
            onClick={ifClicked}
            className="bg-primary-header p-5 rounded-2xl"
          >
            <SlArrowRight />
          </Button>
        </SignedOut>
      </div>
      <SignedOut>
        <SignInButton>
          <Button
            variant={"default"}
            size={"default"}
            className={
              showMessage
                ? `font-main bg-red-200 text-red-600 p-3 px-7 font-bold rounded-2xl hover:bg-red-900`
                : `font-main bg-black text-primary-text p-3 px-7 font-bold rounded-2xl hover:bg-slate-500`
            }
          >
            Sign Up First!
          </Button>
        </SignInButton>
      </SignedOut>
      {/* <h3 className="font-main text-red-600 font-bold bg-red-200 p-1.5 rounded-xl">
        {showMessage && "Sign Up or Register First!"}
      </h3> */}
    </div>
  );
};

export default TradingPageButton;
