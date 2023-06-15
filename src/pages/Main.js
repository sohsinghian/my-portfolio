import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <>
      <h1 className="mb-96">My Portfolio</h1>
      <p className="mt-96 mb-96">test</p>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
