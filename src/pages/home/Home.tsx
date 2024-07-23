import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import memoji from "../../assets/memoji.png";
import HomeFooter from "./HomeFooter";
import { motion } from "framer-motion";
const Home = () => {
  // const scrollToProjects = () => {
  //   const element = "/#projects";

  //   element.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="flex flex-wrap" id="main">
      <div className="min-h-[60vh] md:flex items-end xl:gap-40 gap-25">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-[6rem] font-medium leading-tight"
        >
          <img src={memoji} alt="" width={120} />
          Yash
          <br />
          Sakre
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{ type: "spring", stiffness: 40 }}
          className="flex w-full text-2rem md:m-5 flex-nowrap "
        >
          <img alt="" />
          I&#39;m a Independent front-end developer who combines design and
          programming to create captivating user experiences through efficient
          website development.
        </motion.div>

        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="hidden m-5 md:block "
        >
          <Link
            to="/#projects"
            className="cursor-pointer "
            // onClick={() => scrollToProjects()}
          >
            <img src={arrow} alt="" className="" />
            <p className="hover">Projects</p>
          </Link>
        </motion.div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Home;
