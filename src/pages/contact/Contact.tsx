
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import Png1 from "../../assets/Png.png";
const Contact = () => {
  return (
    <div className="min-h-[70vh]" id="contact">
      <div className="text-[3rem]">Contact.</div>
      <hr />
      <div className="md:flex justify-center items-center mt-[4rem] ">
        <div className="">
          <img
            src={Png1}
            alt=""
            className="mx-auto w-[60%] md:w-[70%] rounded-full border-2 object-contain "
          />
        </div>

        <div className="md:w-[50%] flex flex-col  gap-5">
          <div className="text-4xl">Don&apos;t be shy!</div>
          <div className="text-1xl">
            Whether you&apos;re bursting with a project idea or need assistance,
            don&apos;t hesitate to reach out. Let&apos;s collaborate and create
            something extraordinary together. Contact me today and let the magic
            begin!
          </div>

          <div className="w-fit">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:yashsakre940@gmail.com"
                target="__blank"
                className="flex flex-row gap-1 hover"
              >
                {" "}
                <MdEmail className="text-2xl" /> yashsakre940@gmail.com{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/yash-sakre/"
                target="__blank"
                className="flex flex-row gap-1 hover w-fit"
              >
                {" "}
                <AiFillLinkedin className="text-2xl" /> Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
