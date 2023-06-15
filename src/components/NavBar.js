import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
