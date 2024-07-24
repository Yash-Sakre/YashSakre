import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Header from "./components/header/Header";

import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import New from "./pages/New";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className=" selection:bg-foreground selection:text-background">
        <Router>
          <div className="w-[85%] m-auto relative">
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/new" element={<New />} />

              {/* <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
