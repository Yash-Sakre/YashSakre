

const HomeFooter = () => {
  return (
    <div>
      <div className=" md:mt-[3rem] w-full pb-3">
        <hr />
        <div className="md:flex flex-row py-7 justify-between xl:gap-60 gap-20 flex-nowrap">
          <div className="first flex justify-between xl:gap-60 gap-[2rem]">
            <div className=" w-[100%] ">
              Developing intuitive,
              <br /> responsive web interfaces.
            </div>

            <div className="w-[100%] ">
              <div className="text-linkColor">Projects</div> 
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="second flex justify-between xl:gap-60 gap-[2rem] md:mt-0 mt-7">
          <div className="">
            <div className=" text-linkColor">Socials</div>
            <ul className="">
              <li><a href="https://www.linkedin.com/in/yash-sakre/">Linkedin</a></li>
              <li><a href="https://twitter.com/YashSakre4">Twitter</a></li>
              <li><a href="https://github.com/Yash-Sakre">Github</a></li>
            </ul>
          </div>
          <div className=""><a href="mailto:yashsakre940@gmail.com">yashsakre940@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
