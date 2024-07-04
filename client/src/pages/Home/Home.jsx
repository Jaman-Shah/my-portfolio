import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "../../components/Conatact";

const Home = () => {
  return (
    <div className="mt-24 border-t">
      <div id="banner">
        <Banner />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
