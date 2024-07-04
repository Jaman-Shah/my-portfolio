import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="mt-24 border-t">
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
