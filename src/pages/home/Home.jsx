
import arrow from "../../assets/arrow.png";
import download from "../../assets/download.jpeg";
import HomeFooter from "./HomeFooter";
import { motion } from "framer-motion"
const Home = () => {
  
  return (
    <div className="flex flex-wrap" id="/">
      <div className="min-h-[60vh] md:flex items-end xl:gap-40 gap-25">
        <motion.div animate={{x:0}} initial={{x:-1000}} transition={{ type: "spring", stiffness: 50 }} className="text-[6rem] font-medium leading-tight">
          <img src={download} alt="" width={80} />
          Yash <br />
          Sakre
        </motion.div>
        <motion.div animate={{y:0}} initial={{y:-1000}} transition={{ type: "spring", stiffness: 40 }} className="text-2rem md:m-5 flex flex-nowrap w-full ">
          <img alt="" />
          I&#39;m a Independent front-end developer who combines design and
          programming to create captivating user experiences through efficient
          website development.
        </motion.div>

        <motion.div animate={{y:0}} initial={{y:-1000}} transition={{ type: "spring", stiffness: 30 }} className="hidden md:block m-5 ">
          <a href="#">
            <img src={arrow} alt="" />
            <p>Projects</p>
          </a>
        </motion.div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Home;
