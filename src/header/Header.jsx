import { Link } from "react-scroll";

import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

import logo from "../assets/logo.png"
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuItems = [
    { label: "Home", to: "/", offset: -100 },
    { label: "About", to: "about", offset: -70 },
    { label: "Projects", to: "projects", offset: -70 },
    { label: "Contact", to: "contact", offset: -70 },
  ];

  

  return (
    <div
      
      className="navBar flex justify-between items-center py-[1rem]  sticky top-0 z-[1000] bg-[#FFFBF5] dark:bg-black dark:text-white"
    >
      {/* Logo */}
      <div className="logoDiv">
        <h1 className="logo text-[2rem] text-blueColor">
          <a href="/"><img src={logo} alt="" className="w-10 md:w-14"/></a>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <ul className="flex gap-1">
          {menuItems.map((item) => (
            <li key={item.label} className="menuList text-3rem border-2 rounded-full py-1 px-3 border-black border-opacity-30 hover:bg-black hover:text-white">
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <div className="border-2 border-black border-opacity-10 p-2 rounded-full"><RxCross2 /></div> : <div className="border-2 border-black border-opacity-10 p-2 rounded-full"><CiMenuFries /></div>}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? " animate-slide-in absolute top-14 left-2 h-[40vh] rounded-xl  w-full flex flex-col gap-5 justify-center items-center bg-[#FCF5ED]   " : "hidden"
        } md:hidden`}
      >
        {menuItems.map((item) => (
          <li key={item.label} className="menuList text-2xl ">
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeNav}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
