import React from "react";
import { NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  const listStyle = "p-5 sm:p-2 hover:bg-slate-200 hover:text-black";

  return (
    <>
      <header>
        <nav class="fixed z-[100] w-full leading-4 bg-blue-950 text-white font-bold shadow-xl">
          <ul class="flex flex-row sm:text-sm sm:justify-center">
            <li class={listStyle}>
              <NavHashLink to="/#" smooth>
                Home{" "}
              </NavHashLink>
            </li>
            <li class={listStyle}>
              <NavHashLink to="/#about" smooth>
                About{" "}
              </NavHashLink>
            </li>
            <li class={listStyle}>
              <NavHashLink to="/#skills" smooth>
                Skills
              </NavHashLink>
            </li>
            <li class={listStyle}>
              <NavHashLink to="/#projects" smooth>
                Projects
              </NavHashLink>
            </li>
            <li class={listStyle}>
              <NavHashLink to="/#contact" smooth>
                Contact
              </NavHashLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
