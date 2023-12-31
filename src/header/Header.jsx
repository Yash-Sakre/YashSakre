import { Link, useLocation, useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/Variant";
import logo from "../assets/logo.png";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);
  const navigate = useNavigate();

  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    if (currentRoute === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [isHome, location]);

  const scrollToSection = (id) => {
    closeNav();
    navigate("/");
    const element = document.getElementById(id);
    
    element.scrollIntoView({ behavior: "smooth" });
  };
  const menuItems = [
    { label: "Home", to: "/#main"},
    { label: "About", to: "/#about" },
    { label: "Projects", to: "/#projects"},
    { label: "Contact", to: "/#contact"},
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="navBar flex justify-between items-center py-[1rem]  sticky top-0 z-[1000] bg-[#FFFBF5] dark:bg-black dark:text-white"
    >
      {/* Logo */}
      <div className="">
        <h1 className="logo text-[2rem] text-blueColor">
          <a href="/">
            <img src={logo} alt="" className="w-10 md:w-14" />
          </a>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <ul className="flex gap-1">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="menuList text-3rem border-2 rounded-full py-1 px-3 border-black border-opacity-30 hover:bg-black hover:text-white"
            >
              <Link
                to={item.to}
                  // spy={true}
                  // smooth={true} 
                  // offset={item.offset}
                  // duration={500}
                  onClick={() => scrollToSection(item.to)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? (
          <div className="border-2 border-black border-opacity-10 p-2 rounded-full">
            <RxCross2 />
          </div>
        ) : (
          <div className="border-2 border-black border-opacity-10 p-2 rounded-full">
            <CiMenuFries />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? " animate-slide-in absolute top-14 left-2 h-[40vh] rounded-xl  w-full flex flex-col gap-5 justify-center items-center bg-[#FCF5ED]   "
            : "hidden"
        } md:hidden`}
      >
        {menuItems.map((item) => (
          <li key={item.label} className="menuList text-2xl ">
            <Link
              to={item.to}
              onClick={() => scrollToSection(item.to)}
              
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Header;
