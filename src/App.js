import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import ProjectsPage from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import { Element } from "react-scroll";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Element name="home">
                <Tagline />
              </Element>
              
              {/* Projects section removed from home to keep it concise */}

              <Element name="about">
                <About />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="experience">
                <Experience />
              </Element>
              <Element name="contact">
                <Connect />
              </Element>
            </>
          } />
          
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
