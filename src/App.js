import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}

export default App;
