import test from "../../assets/test.png";
import protfolio from "../../assets/portfolio.png"
import projects from "../../components/projects.json"
const Projects = () => {


  const imageMap = {
    "../assests/test.png": test,
    "../assests/portfolio.png": protfolio,
    
  
    // Map more image paths to imported images
  };
  return (
    <div className="min-h-screen" id="projects">
      <div className="text-[3rem]"> Projects.</div>
      <hr />
      <div className="flex mt-2 flex-wrap ">
      {projects.map((project, index) => (
        <div key={index} className="relative mx-auto w-full max-w-lg pt-4 pb-[4rem]">
          <div className="rounded-lg">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg ">
              <div className="w-full border-2">
                <img className="" src={imageMap[project.imagePath]} alt="" />
              </div>
            </div>

            <div className="">
              <div className="mt-1 grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title={project.ProjName}>
                      {project.ProjName}
                    </h2>
                    <p className="mt-1 line-clamp-1 text-sm text-gray-800" title={project.Projtitle}>
                      {project.Projtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <p className="text-primary whitespace-nowrap rounded-xl font-semibold leading-tight flex gap-3">
                    <a href={project.Github} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      Github
                    </a>
                    <a href={project.Live} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      Live
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-2 border-t border-gray-200 pt-3">
                {project.ProjDesc}
              </div>
              
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
};

export default Projects;
