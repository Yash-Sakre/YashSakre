import { motion } from "framer-motion"

const HomeFooter = () => {
  return (
    <motion.div animate={{y:0}} initial={{y:-1000}} transition={{ type: "spring", stiffness: 50 }} >
      <div className=" md:mt-[3rem] w-full pb-3">
        <hr />
        <div className="md:flex flex-row py-7 justify-between xl:gap-60 gap-20 flex-nowrap">
          <div className="first flex justify-between xl:gap-60 gap-[2rem]">
            <div className=" w-[100%] ">
              Developing intuitive,
              <br /> responsive web interfaces.
            </div>

            <div className="w-[100%] ">
              <div className=" text-linkColor">Hire Me</div>
              <a href="https://drive.google.com/file/d/1IGd5kz41pmZugLd_G14pGY0gn2SQv_hG/view?usp=sharing" target="__blank" >Resume</a>
            </div>
          </div>
          <div className="second flex justify-between xl:gap-60 gap-[2rem] md:mt-0 mt-7">
          <div className="">
            <div className=" text-linkColor">Socials</div>
            <ul className="">
              <li><a href="https://www.linkedin.com/in/yash-sakre/" target="__blank">Linkedin</a></li>
              <li><a href="https://twitter.com/YashSakre4"  target="__blank">Twitter</a></li>
              <li><a href="https://github.com/Yash-Sakre"  target="__blank">Github</a></li>
            </ul>
          </div>
          <div className=""><a href="mailto:yashsakre940@gmail.com">yashsakre940@gmail.com</a></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeFooter;
