import React from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <header class="flex flex-row justify-between lg:w-full h:screen">
        <nav class="fixed w-full leading-5 z-[100] bg-blue-100">
          <ul class="flex flex-row">
            <li class="p-5 hover:font-bold">
              <HashLink to="/#" smooth>
                Home
              </HashLink>
            </li>
            <li class="p-5 hover:font-bold">
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            </li>
            <li class="p-5 hover:font-bold">
              <HashLink to="/#skills" smooth>
                Skills
              </HashLink>
            </li>
            <li class="p-5 hover:font-bold">
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            </li>
            <li class="p-5 hover:font-bold">
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
