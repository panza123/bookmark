import close from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import bookmark from "../assets/images/logo-bookmark copy.svg";
import bookmark2 from "../assets/images/bookmark.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <header className="w-full h-[50px] flex items-center justify-between py-10 px-10">
      {/* Render the bookmark image conditionally based on the 'open' state */}
      {!open && (
        <img src={bookmark} alt="logo" className="w-[200px] object-cover z-0" />
      )}
      {/* Desktop navigation */}
      <nav className="hidden lg:flex items-center gap-4 cursor-pointer">
        <ul className="flex gap-6 uppercase grey text-xl">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <button className="text-white hover:bg-[transparent] border-[1px] border-orange-600 hover:text-orange-600">
          Login
        </button>
      </nav>

      <div className="block  lg:hidden" onClick={handleClick}>
        {!open ? (
          <img
            src={hamburger}
            alt="hamburger"
            className="w-[30px] h-[30px] object-cover"
          />
        ) : (
          <img
            src={close}
            alt="close"
            className="w-[30px] h-[30px] object-cover"
          />
        )}
      </div>

      {/* Mobile navigation */}
      <nav
        className={
          open
            ? "w-full h-screen bg-hsl-229-31-21/90 absolute top-0 left-0 px-4 pt-5 z-20 overflow-hidden lg:hidden"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center">
          <img src={bookmark2} alt="" />
          <img
            src={close}
            alt="close"
            className="w-[30px] h-[30px] object-cover"
            onClick={handleClick}
          />
        </div>

        <div className="w-full h-full flex flex-col items-center pt-[100px]">
          <ul className="grid items-center text-center gap-6 uppercase text-white text-xl cursor-pointer">
            <div className="w-[400px] h-[1px] bg-white"></div>
            <li className="">Features</li>
            <div className="w-[400px] h-[1px] bg-white"></div>
            <li>Pricing</li>
            <div className="w-[400px] h-[1px] bg-white"></div>
            <li>Contact</li>
            <div className="w-[400px] h-[1px] bg-white"></div>
          </ul>
          <button className="w-full h-[50px] border-[1px] border-white bg-[transparent] hover:bg-blue-900 mt-5 uppercase text-xl text-white">
            Login
          </button>
          <div className="flex gap-5 mt-[70px]">
            <img src={facebook} alt="facebook-logo" />
            <img src={twitter} alt="twitter-logo" />
          </div>
        </div>
      </nav>
    </header>
  );
}
