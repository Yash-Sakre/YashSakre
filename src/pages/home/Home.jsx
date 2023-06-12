
import arrow from "../../assets/arrow.png";
import download from "../../assets/download.jpeg";
import HomeFooter from "./HomeFooter";
const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className=" h-[60vh] md:flex items-end xl:gap-40 gap-25">
        <div className="text-[6rem] font-medium leading-tight">
          <img src={download} alt="" width={80} />
          Yash <br />
          Sakre
        </div>
        <div className="text-2rem md:m-5 flex flex-nowrap w-full ">
          <img alt="" />
          I&#39;m a Independent front-end developer who combines design and
          programming to create captivating user experiences through efficient
          website development.
        </div>

        <div className="hidden md:block m-5 ">
          <a href="#">
            <img src={arrow} alt="" />
            <p>Projects</p>
          </a>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

export default Home;
