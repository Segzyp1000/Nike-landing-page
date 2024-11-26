import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="gap-2 text-lg leading-normal font-medium font-montserrat hidden lg:flex wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="md:hidden p-3">
          {openNavigation ? (
            <AiOutlineClose
              size={25}
              className="text-black"
              onClick={toggleNavigation}
            />
          ) : (
            <RxHamburgerMenu
              size={25}
              className="text-black"
              onClick={toggleNavigation}
            />
          )}
        </div>
        <div
          className={`${
            openNavigation ? "block" : "hidden"
          } leading-[75px] lg:hidden bg-slate-950 text-white text-lg absolute z-50  top-20 left-0  w-full p-2 space-y-9`}
        >
          <ul className="flex-1 flex flex-col justify-center items-center gap-9">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  onClick={handleClick}
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
