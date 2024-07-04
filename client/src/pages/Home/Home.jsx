import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "../../components/Conatact";

const Home = () => {
  return (
    <div className="mt-24 border-t">
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
