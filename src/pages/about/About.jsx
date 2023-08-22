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
// Add more image imports as needed
import Png1 from "../../assets/about/Png1.png"


const imageMap = {
  "../assests/html5.svg": htmlImage,
  "../assests/css3.svg": cssImage,
  "../assests/react.svg": reactImage,
  "../assests/javascript.svg": javascriptImage,
  "../assests/tailwind.svg": tailwindImage,
  "../assests/python.svg": pythonImage,
  "../assests/django.svg": djangoImage,
  "../assests/git.svg": gitImage,

  // Map more image paths to imported images
};
const About = () => {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1k2CYVAvsIgZr2uM416WjYRS3ifqF7P7P/view?usp=sharing"
    );
  }
  return (
    <div className="xl:min-h-screen flex flex-col " id="about">
      <div className="text-[3rem]">About Me.</div>
      <hr />
      <div className=" md:flex py-4 items-center lg:gap-60 ">
        <div className="w-[100%] lg:w-[50%]">
          A final year Computer Science student with a strong passion for
          frontend development. Proficient in HTML, CSS, and JavaScript, I have
          hands-on experience with modern frameworks like React and Tailwind
          CSS. Through coding bootcamps, open-source projects, and coursework, I
          have honed my problem-solving abilities and gained a solid
          understanding of software development principles. Notably, I have
          worked as a frontend developer in various Hackathon projects, thriving
          in intense and collaborative environments.
          <br />
          <br />
          As a fast learner with a strong work ethic, I constantly strive for
          improvement and stay updated with the latest frontend trends. My goal
          is to deliver high-quality, visually appealing code that ensures
          exceptional user experiences.
          <div>
            <button
              onClick={resume}
              className="btn my-3 py-3 px-9 text-sm font-medium text-center border-2 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Resume
            </button>
          </div>
        </div>
        <div className=" ">
          <img className="mx-auto md:w-[70%] rounded-full border-2 object-contain " src={Png1} alt="" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[3rem]">Skills.</div>
        <hr />
        <div className="flex flex-col flex-wrap mt-10">
          <div className="flex flex-row flex-wrap gap-10 md:gap-20  items-center justify-center text-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="object-cover w-14 "
                  src={imageMap[skill.imagePath]}
                  alt={skill.skillName}
                />
                <div className="pt-4">{skill.skillName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
