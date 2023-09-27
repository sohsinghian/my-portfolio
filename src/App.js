import React from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
// import Contact from "../components/Contact";
import Home from "./pages/Home";
import ContactLinks from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <main class="flex flex-col"> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        <ContactLinks />
      {/* </main> */}
    </>
  );
}

export default App;
