import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}

export default App;
