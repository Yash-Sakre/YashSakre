import test from "../../assets/finecode.png";
import Flexfit from "../../assets/Flexfit.png";
import TypeArena from "../../assets/TypeArena.png";
import opinhacks from "../../assets/Opinhacks.png";
import projects from "../../components/projects.json";
import { AiOutlineLink } from "react-icons/ai";
const Projects = () => {
  const imageMap = {
    "../assests/finecode.png": test,
    "../assests/Flexfit.png": Flexfit,
    "../assests/Opinhacks.png": opinhacks,
    "../assests/TypeArena.png": TypeArena

    // Map more image paths to imported images
  };
  return (
    <div className="min-h-screen " id="projects">
      <div className="text-[3rem]"> Projects.</div>
      <hr />
      <div className="flex flex-col w-full gap-20 mt-10 mb-10 ">
        {projects.map((items, index) => (
          <div key={index} className="gap-10 lg:flex ">
            <div className="image-3d">
              <img
                src={imageMap[items.imagePath]}
                alt=""
                className=" w-full lg:min-w-[100vh] card "
                
              />
            </div>
            <div className="mt-3 lg:mt-0">
              <div className="text-4xl font-medium underline">
                {items.ProjName}
              </div>
              <div className="mt-2 mb-3 text-2xl">{items.Projtitle}</div>
              <div className="mb-2">{items.ProjDesc}</div>
              <hr />
              <div className="mt-2 ">
                Tech Stack - <span className="font-medium">{items.tech}</span>
              </div>
              <div className="flex items-center mt-4">
                <p className="flex gap-3 ">
                  <a
                    href={items.Github}
                    target="__blank"
                    className="flex items-center justify-center gap-1 px-4 py-1 border-2 hover"
                  >
                    <AiOutlineLink /> Github
                  </a>
                  {items.Live && ( // Add a conditional rendering statement for Live button
                    <a
                      href={items.Live}
                      target="__blank"
                      className="flex items-center justify-center gap-1 px-4 py-1 border-2 hover"
                    >
                      <AiOutlineLink /> Live
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
