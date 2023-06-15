import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Home from "../components/Home";
import ContactLinks from "../components/ContactLinks";

const Main = () => {
  return (
    <>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ContactLinks />
    </>
  );
};

export default Main;
