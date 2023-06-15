import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <header className="flex flex-row justify-between">
        <nav className="fixed w-full h-16 z-[100] bg-slate-100">
          <ul className="flex flex-row ml-10 mt-4">
            <li className="mr-10 hover:font-bold hover:underline underline-offset-4">
              <HashLink to="/#" smooth>
                Home
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold hover:underline underline-offset-4">
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold hover:underline underline-offset-4">
              <HashLink to="/#skills" smooth>
                Skills
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold hover:underline underline-offset-4">
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold hover:underline underline-offset-4">
              <HashLink to="/#contact" smooth>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
