import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const listStyle = "p-5 sm:p-2 hover:bg-slate-200 hover:text-black";
  const mobileListStyle =
    "p-3 bg-blue-100 border-b-gray-400 border-solid border text-black hover:bg-white";

  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <header>
        <nav class="fixed z-[100] w-full leading-4 bg-blue-950 text-white font-bold shadow-xl opacity-90">
          <div onClick={handleMobileNav}>
            <AiOutlineMenu size={20} class="m-3 hidden sm:flex" />
          </div>
          <ul class="flex flex-row sm:text-sm sm:justify-between sm:hidden">
            <li class={listStyle}>
              <NavHashLink to="/#" smooth>
                Home
              </NavHashLink>
            </li>
            <li class={listStyle}>
              <NavHashLink to="/#about" smooth>
                About
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
          {mobileNav && (
            <ul class="flex flex-col text-sm justify-between">
              <NavHashLink to="/#" smooth onClick={handleMobileNav}>
                <li class={mobileListStyle}>Home</li>
              </NavHashLink>

              <NavHashLink to="/#about" smooth onClick={handleMobileNav}>
                <li class={mobileListStyle}>About</li>
              </NavHashLink>

              <NavHashLink to="/#skills" smooth onClick={handleMobileNav}>
                <li class={mobileListStyle}>Skills</li>
              </NavHashLink>

              <NavHashLink to="/#projects" smooth onClick={handleMobileNav}>
                <li class={mobileListStyle}>Projects</li>
              </NavHashLink>

              <NavHashLink to="/#contact" smooth onClick={handleMobileNav}>
                <li class="p-3 bg-blue-100 text-black hover:bg-white">
                  Contact
                </li>
              </NavHashLink>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
