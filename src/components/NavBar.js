import React from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <header className="flex flex-row justify-between lg:w-full h:screen">
        <nav className="fixed w-full h-16 z-[100] bg-slate-100">
          <ul className="flex flex-row mr-10 my-4 float-right">
            <li className="mr-10 hover:font-bold">
              <HashLink to="/#" smooth>
                Home
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold">
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold">
              <HashLink to="/#skills" smooth>
                Skills
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold">
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            </li>
            <li className="mr-10 hover:font-bold">
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
