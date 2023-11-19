// import html from "../../assets/html.png"
import skills from "../../components/skills.json";
import htmlImage from "../../assets/html5.svg";
import cssImage from "../../assets/css3.svg";
import reactImage from "../../assets/react.svg";
import javascriptImage from "../../assets/javascript.svg";
import tailwindImage from "../../assets/tailwind.svg";
import pythonImage from "../../assets/python.svg";
import djangoImage from "../../assets/django.svg";
import gitImage from "../../assets/git.svg";
import java from "../../assets/java.png";
import typescript from "../../assets/Typescript.png";
// Add more image imports as needed
import Png1 from "../../assets/about/Png1.png";
import { AiOutlineLink } from "react-icons/ai";
const imageMap = {
  "../assests/html5.svg": htmlImage,
  "../assests/css3.svg": cssImage,
  "../assests/react.svg": reactImage,
  "../assests/javascript.svg": javascriptImage,
  "../assests/tailwind.svg": tailwindImage,
  "../assests/python.svg": pythonImage,
  "../assests/django.svg": djangoImage,
  "../assests/git.svg": gitImage,
  "../assests/java.png": java,
  "../assests/Typescript.png": typescript,

  // Map more image paths to imported images
};
const About = () => {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1SOhJ4B_qWFbKN8-6fFk8-qsMMLvBddte/view?usp=drive_link"
    );
  }
  return (
    <div className="xl:min-h-screen flex flex-col" id="about">
      <div className="text-[3rem]">About Me.</div>
      <hr />  
      <div className=" md:flex flex-col py-4  items-center  ">
        <div className="w-full justify-center md:text-2xl font-medium">
          <span className="ml-[50%]">
            I bring not just a passion for frontend development but a unique
            blend 
          </span>
          &nbsp;of creativity and curiosity. Beyond code, I find inspiration in
          diverse experiences, infusing a distinctive perspective into my work
          and fostering a holistic approach to problem-solving.
        </div>
        <div className="  flex items-center w-full mt-4    ">
          <div className="md:flex  w-full gap-10">
            <div className="  md:flex items-center  justify-center">
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
            <div className="text-sm font-medium mt-10  w-full">
              Thriving in collaborative environments, I bring a strong work
              ethic, problem-solving prowess, and a commitment to delivering
              visually captivating code for outstanding user experiences.
              <div className="">
                <button
                  onClick={resume}
                  className="btn flex justify-center items-center gap-1 my-3 py-2 px-4 hover border-2"
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
        <div className="flex flex-col  flex-wrap mt-5">
          <div className="flex flex-row flex-wrap  md:gap-5 gap-2 items-center justify-center ">
            {skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center border-2 py-2 px-4 rounded-full gap-2 hover">
                <img
                  className="object-cover w-5"
                  src={imageMap[skill.imagePath]}
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
