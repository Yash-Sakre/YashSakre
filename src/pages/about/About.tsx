
import { AiOutlineLink } from "react-icons/ai";
import {Skills} from "../../constants/skills"
import Png1 from "../../assets/about/Png1.png";
const About = () => {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1a-ggjMH8qOT_B0rd64yMfQ6eA6UYqThy/view?usp=sharing"
    );
  }
  return (
    <div className="flex flex-col xl:min-h-[80vh]" id="about">
      <div className="text-[3rem]">About Me.</div>
      <hr />
      <div className="flex-col items-center py-4 md:flex">
        <div className="justify-center w-full font-medium md:text-2xl">
          <span className="ml-[50%]">
            I bring not just a passion for frontend development but a unique
            blend
          </span>
          &nbsp;of creativity and curiosity. Beyond code, I find inspiration in
          diverse experiences, infusing a distinctive perspective into my work
          and fostering a holistic approach to problem-solving.
        </div>
        <div className="flex items-center w-full mt-4 ">
          <div className="w-full gap-10 md:flex">
            <div className="items-center justify-center md:flex">
              <div className="flex justify-center image-3d">
                <img
                  className=" w-[50%]  md:w-[40%] md:mr-[30%] mb-4 md:mb-0 rounded-full border-2 object-contain about-card"
                  src={Png1}
                  alt=""
                />
              </div>
              <div className=" text-sm font-medium w-full md:w-[40%] lg:w-[50%]">
                Experienced as a frontend developer in intense and collaborative
                Hackathon projects, I&apos;m also the proud winner of Kavach 23,
                a national-level Cybersecurity Hackathon.
              </div>
            </div>
            <div className="w-full mt-10 text-sm font-medium">
              Thriving in collaborative environments, I bring a strong work
              ethic, problem-solving prowess, and a commitment to delivering
              visually captivating code for outstanding user experiences.
              <div className="">
                <button
                  onClick={resume}
                  className="flex items-center justify-center gap-1 px-4 py-2 my-3 border-2 btn hover"
                >
                  <AiOutlineLink />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[3rem]">Skills.</div>
        <hr />
        <div className="flex flex-col flex-wrap mt-5">
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-5 ">
            {Skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 rounded-full hover"
              >
                <img
                  className="object-cover w-5"
                  src={skill.imagePath}
                  alt={skill.skillName}
                />
                <div className="">{skill.skillName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
