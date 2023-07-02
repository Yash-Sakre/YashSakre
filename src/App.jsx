import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Header from "./header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./Footer/Footer";
import Landing from "./pages/Landing/Landing";
function App() {
  
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="w-[90%] m-auto ">
        
        <Header />
        <Landing />
        <Router>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;