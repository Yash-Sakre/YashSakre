import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Landing = () => {
  return (
    <div className="mt-20 md:mt-0">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
