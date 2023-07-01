import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// import ThemeSwitcher from "../components/ThemeSwitcher";
import { motion } from "framer-motion"
import {  fadeIn } from "../components/Variant";
const Header = () => {
  
  const [nav, setnav] = useState(false);

  const handleClick = () => setnav(!nav);

  const closenav = () => setnav(false);
  return (
    <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="navBar flex justify-between items-center py-[1rem] sticky top-0 z-[1000] bg-white dark:bg-black dark:text-white">
      <div className="logoDiv">
        <h1 className="logo text-[2rem] text-blueColor">
          <a href="/">Ys.</a>
        </h1>
      </div>

      <div className="flex gap-8">
        <ul className="hidden md:flex gap-8">
          <li className="menuList text-[#6f6f6f] text-3rem">
            {" "}
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="menuList text-[#6f6f6f] text-3rem">
            {" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="menuList text-[#6f6f6f] text-3rem">
            {" "}
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="menuList text-[#6f6f6f] text-3rem">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          
        </ul>

      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      {/* Mobile View */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 h-screen  w-full flex flex-col justify-center items-center bg-white"
        }
      >
        <li className="menuList text-[#6f6f6f] py-6  text-3rem">
          {" "}
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Home
          </Link>
        </li>
        <li className="menuList text-[#6f6f6f] py-6 text-3rem">
          {" "}
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            About
          </Link>
        </li>
        <li className="menuList text-[#6f6f6f] py-6 text-3rem">
          {" "}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Projects
          </Link>
        </li>
        <li className="menuList text-[#6f6f6f] py-6 text-3rem">
          {" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closenav}
          >
            Contact
          </Link>
        </li>

        
      </ul>
    </motion.div>
  );
};

export default Header;
