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
import download from "../../assets/download.jpeg";

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
  return (
    <div  className="xl:min-h-screen flex flex-col " id="about">
      <div className="text-[3rem]">About Me.</div>
      <hr />
      <div className=" md:flex py-4 items-center gap-60">
        <div className="md:w-[50%]">
          Currently, in my final year of studies pursuing a Bachelor&apos; s
          degree in Computer Science, I have developed a strong foundation in
          frontend technologies such as HTML, CSS, and JavaScript. I have also
          gained experience with modern frameworks including React and Tailwind
          CSS, through personal projects and coursework.
          <br />
          <br />
          Although I do not have professional experience as a developer, I am a
          fast learner with a strong work ethic. I have actively sought out
          opportunities to enhance my skills, participating in coding bootcamps
          and engaging in open-source projects. These experiences have sharpened
          my problem-solving abilities and equipped me with the tools necessary
          to excel in a professional environment.
          <div>
            <button className="my-3 py-3 px-9 text-sm font-medium text-center border-2 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Resume
            </button>
          </div>
        </div>
        <div className="">
          <img className="mx-auto" src={download} alt="" />
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
