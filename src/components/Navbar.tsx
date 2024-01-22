import Logo from "../assets/Logo.png";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <div className="justify-between flex gap-10 bg-primary-color px-5">
      <div className="flex flex-row justify-center items-center gap-10 text-primary-text">
        <a href="/">
          <img src={Logo} alt="logo" className="w-50 h-20 m-3" />
        </a>
        <a href="/" className="font-main navlink hover-navbutton">
          Buy Crypto
        </a>
        <a href="/" className="font-main backdrop:navlinks hover-navbutton">
          Markets
        </a>
        <a href="/" className="font-main backdrop:navlinks hover-navbutton">
          Trade
        </a>
        <a href="/" className="font-main backdrop:navlinks hover-navbutton">
          Futures
        </a>
        <a href="/" className="font-main backdrop:navlinks hover-navbutton">
          Earn
        </a>
        <div>
          <a href="/" className="font-main backdrop:navlinks hover-navbutton">
            More
          </a>
          {/* DROPDOWN MENU USING LUCIDE AND ANIMATE */}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 m-4">
        <SignedOut>
          <h2 className="font-main font-bold text-xl text-primary-header">
            Welcome to CrypoKet!
          </h2>
          <SignInButton>
            <Button
              variant={"main"}
              size={"default"}
              className="font-main font-bold transition ease-in duration-150 active:text-primary-header"
            >
              Sign In or Register
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <h2 className="font-main font-bold text-xl text-primary-header">
            Welcome {}
          </h2>
          <SignOutButton>
            <Button
              variant={"main"}
              size={"default"}
              className="font-main font-bold transition ease-in duration-150 active:text-primary-header"
            >Sign Out</Button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
